#!/usr/bin/env ts-node

/**
 * Script de migración de batches
 * - Agrega consumed_at / expired_at si faltan
 * - Calcula inventory_mass_kg usando factores de masa
 * - Usa batch writes con commit cada 400 operaciones
 *
 * Uso: ts-node scripts/migrate-batches.ts
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Cargar variables de entorno
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Inicializar Firebase Admin
const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

const db = getFirestore(app);

// ============================================
// DICCIONARIO DE FACTORES DE MASA (kg por unidad)
// ============================================
const MASS_FACTORS: Record<string, number> = {
  // Frutas
  'aguacate|unidades': 0.17,
  'manzana|unidades': 0.18,
  'plátano|unidades': 0.12,
  'banana|unidades': 0.12,
  'naranja|unidades': 0.15,
  'pera|unidades': 0.16,
  'limón|unidades': 0.08,
  'mandarina|unidades': 0.09,
  'uva|racimo': 0.5,
  'sandía|unidades': 4.0,
  'melón|unidades': 2.0,
  'fresa|caja': 0.25,
  'mango|unidades': 0.3,
  'piña|unidades': 1.5,

  // Verduras
  'tomate|unidades': 0.12,
  'lechuga|unidades': 0.5,
  'zanahoria|unidades': 0.06,
  'cebolla|unidades': 0.15,
  'papa|unidades': 0.2,
  'patata|unidades': 0.2,
  'pimiento|unidades': 0.15,
  'calabacín|unidades': 0.25,
  'berenjena|unidades': 0.3,
  'brócoli|unidades': 0.4,
  'coliflor|unidades': 1.0,
  'pepino|unidades': 0.3,
  'espinaca|manojo': 0.25,

  // Lácteos (por unidad/envase típico)
  'leche|litro': 1.03,
  'leche|medio_litro': 0.515,
  'yogur|unidades': 0.125,
  'queso|bloque': 0.25,
  'mantequilla|barra': 0.25,

  // Huevos
  'huevo|unidades': 0.06,
  'huevos|docena': 0.72,

  // Carnes (porciones típicas)
  'pollo|pechuga': 0.25,
  'carne|bistec': 0.3,
  'pescado|filete': 0.2,

  // Pan y cereales
  'pan|barra': 0.25,
  'pan|rebanada': 0.03,
  'arroz|paquete': 1.0,
  'pasta|paquete': 0.5,

  // Default por unidad si no se encuentra
  'default|unidades': 0.15,
};

/**
 * Función de conversión de unidades a kg (fallback)
 */
function convertToKg(quantity: number, unit: string): number {
  switch (unit.toLowerCase()) {
    case 'g':
    case 'gramos':
      return quantity / 1000;
    case 'kg':
    case 'kilogramos':
      return quantity;
    case 'ml':
    case 'mililitros':
      return quantity / 1000; // Asumiendo densidad del agua
    case 'l':
    case 'litros':
      return quantity;
    case 'unidades':
    case 'unit':
    case 'u':
      return quantity * 0.15; // 150g por unidad por defecto
    default:
      console.warn(`⚠️  Unidad desconocida: ${unit}, usando 0.15kg por defecto`);
      return quantity * 0.15;
  }
}

/**
 * Calcula masa en kg usando el diccionario de factores
 */
function calculateMassKg(
  foodName: string,
  quantity: number,
  unit: string
): number {
  // Normalizar nombres
  const normalizedFood = foodName.toLowerCase().trim();
  const normalizedUnit = unit.toLowerCase().trim();

  // Buscar en diccionario
  const key = `${normalizedFood}|${normalizedUnit}`;
  if (MASS_FACTORS[key]) {
    return quantity * MASS_FACTORS[key];
  }

  // Buscar solo por nombre de alimento con 'unidades'
  const fallbackKey = `${normalizedFood}|unidades`;
  if (MASS_FACTORS[fallbackKey] && normalizedUnit === 'unidades') {
    return quantity * MASS_FACTORS[fallbackKey];
  }

  // Fallback a conversión por unidad
  return convertToKg(quantity, unit);
}

/**
 * Migración principal
 */
async function migrateBatches() {
  console.log('🚀 Iniciando migración de batches...\n');

  try {
    // Obtener todos los batches usando collectionGroup
    const batchesSnapshot = await db.collectionGroup('batches').get();

    console.log(`📊 Total de batches encontrados: ${batchesSnapshot.size}\n`);

    if (batchesSnapshot.empty) {
      console.log('✅ No hay batches para migrar.');
      return;
    }

    let updatedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;
    let currentBatch = db.batch();
    let batchCounter = 0;

    for (const doc of batchesSnapshot.docs) {
      try {
        const data = doc.data();
        const updates: Record<string, any> = {};

        // 1. Actualizar consumed_at si falta
        if (data.status === 'CONSUMED' && !data.consumed_at) {
          updates.consumed_at = data.updated_at || data.created_at || Timestamp.now();
          console.log(`  📝 Batch ${doc.id}: Agregando consumed_at`);
        }

        // 2. Actualizar expired_at si falta
        if (data.status === 'EXPIRED' && !data.expired_at) {
          updates.expired_at =
            data.updated_at ||
            data.expiration_date ||
            data.created_at ||
            Timestamp.now();
          console.log(`  📝 Batch ${doc.id}: Agregando expired_at`);
        }

        // 3. Calcular inventory_mass_kg si falta
        if (!data.inventory_mass_kg && data.quantity) {
          const foodName = data.food_name || data.name || 'default';
          const unit = data.unit || 'unidades';
          const massKg = calculateMassKg(foodName, data.quantity, unit);
          updates.inventory_mass_kg = Number(massKg.toFixed(3));
          console.log(
            `  📝 Batch ${doc.id}: Calculando masa ${massKg.toFixed(3)}kg ` +
            `(${foodName}, ${data.quantity} ${unit})`
          );
        }

        // Si hay actualizaciones, agregarlas al batch
        if (Object.keys(updates).length > 0) {
          currentBatch.update(doc.ref, updates);
          batchCounter++;
          updatedCount++;

          // Commit cada 400 writes
          if (batchCounter >= 400) {
            console.log(`\n💾 Commiteando batch de ${batchCounter} operaciones...`);
            await currentBatch.commit();
            currentBatch = db.batch();
            batchCounter = 0;
            console.log('✅ Batch commiteado exitosamente\n');
          }
        } else {
          skippedCount++;
        }
      } catch (error) {
        console.error(`❌ Error procesando batch ${doc.id}:`, error);
        errorCount++;
      }
    }

    // Commit final si quedan operaciones pendientes
    if (batchCounter > 0) {
      console.log(`\n💾 Commiteando batch final de ${batchCounter} operaciones...`);
      await currentBatch.commit();
      console.log('✅ Batch final commiteado exitosamente\n');
    }

    // Resumen
    console.log('\n' + '='.repeat(60));
    console.log('📊 RESUMEN DE MIGRACIÓN');
    console.log('='.repeat(60));
    console.log(`✅ Batches actualizados:  ${updatedCount}`);
    console.log(`⏭️  Batches omitidos:      ${skippedCount}`);
    console.log(`❌ Errores:               ${errorCount}`);
    console.log(`📦 Total procesados:      ${batchesSnapshot.size}`);
    console.log('='.repeat(60) + '\n');

    console.log('✅ Migración completada exitosamente!');

  } catch (error) {
    console.error('❌ Error durante la migración:', error);
    process.exit(1);
  }
}

// Ejecutar migración
migrateBatches()
  .then(() => {
    console.log('👋 Finalizando script...');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });
