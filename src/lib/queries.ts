import 'server-only';
import { adminDb } from './firebaseAdmin';
import { Timestamp } from 'firebase-admin/firestore';
import { convertToKg, aprovechamiento } from './calculations';

interface KPIData {
  since: string;
  recognitionsCompleted: number;
  kgSaved: number;
  co2: number;
  water: number;
  land: number;
  aprovechamiento: number;
}

interface WasteReductionPoint {
  date: string;
  kgSaved: number;
}

/**
 * Obtiene los KPIs de los últimos 30 días
 */
export async function kpisLast30Days(): Promise<KPIData> {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgoTimestamp = Timestamp.fromDate(thirtyDaysAgo);

  // 1. Recognition results completados (last 30 days)
  const recognitionsSnapshot = await adminDb
    .collection('recognition_results')
    .where('created_at', '>=', thirtyDaysAgoTimestamp)
    .get();
  const recognitionsCompleted = recognitionsSnapshot.size;

  // 2. Batches CONSUMED y EXPIRED (last 30 days)
  const batchesSnapshot = await adminDb
    .collectionGroup('batches')
    .where('updated_at', '>=', thirtyDaysAgoTimestamp)
    .get();

  let kgSaved = 0;
  let consumedCount = 0;
  let expiredCount = 0;

  batchesSnapshot.forEach((doc) => {
    const data = doc.data();
    const status = data.status;
    const quantity = data.quantity || 0;
    const unit = data.unit || 'unit';

    if (status === 'CONSUMED') {
      consumedCount++;
      kgSaved += convertToKg(quantity, unit);
    } else if (status === 'EXPIRED') {
      expiredCount++;
    }
  });

  // 3. Recipes cooked (last 30 days) - CO2, water, land
  const recipesSnapshot = await adminDb
    .collectionGroup('recipes')
    .where('isCooked', '==', true)
    .where('createdAt', '>=', thirtyDaysAgoTimestamp)
    .get();

  let co2 = 0;
  let water = 0;
  let land = 0;

  recipesSnapshot.forEach((doc) => {
    const data = doc.data();
    co2 += data.co2Saved || 0;
    water += data.waterSaved || 0;
    land += data.landSaved || 0;
  });

  return {
    since: thirtyDaysAgo.toISOString().split('T')[0],
    recognitionsCompleted,
    kgSaved: Number(kgSaved.toFixed(2)),
    co2: Number(co2.toFixed(2)),
    water: Number(water.toFixed(2)),
    land: Number(land.toFixed(2)),
    aprovechamiento: aprovechamiento(consumedCount, expiredCount),
  };
}

/**
 * Obtiene la serie temporal de reducción de desperdicio (últimos 30 días)
 */
export async function wasteReductionSeries(): Promise<WasteReductionPoint[]> {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgoTimestamp = Timestamp.fromDate(thirtyDaysAgo);

  // Obtener batches CONSUMED de los últimos 30 días
  const batchesSnapshot = await adminDb
    .collectionGroup('batches')
    .where('status', '==', 'CONSUMED')
    .where('updated_at', '>=', thirtyDaysAgoTimestamp)
    .get();

  // Agrupar por día
  const dailyData: Record<string, number> = {};

  batchesSnapshot.forEach((doc) => {
    const data = doc.data();
    const updatedAt = data.updated_at?.toDate() || new Date();
    const dateKey = updatedAt.toISOString().split('T')[0];
    const quantity = data.quantity || 0;
    const unit = data.unit || 'unit';

    if (!dailyData[dateKey]) {
      dailyData[dateKey] = 0;
    }

    dailyData[dateKey] += convertToKg(quantity, unit);
  });

  // Convertir a array y ordenar por fecha
  const series: WasteReductionPoint[] = Object.entries(dailyData)
    .map(([date, kgSaved]) => ({
      date,
      kgSaved: Number(kgSaved.toFixed(2)),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return series;
}
