'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faLifeRing, 
  faQuestionCircle, 
  faCameraRetro,
  faBoxOpen,
  faUtensils,
  faSeedling,
  faMobile,
  faShieldAlt,
  faExclamationTriangle,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

export default function Help() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const faqCategories = [
    {
      id: 'getting-started',
      title: '🚀 Primeros Pasos',
      icon: faMobile,
      faqs: [
        {
          id: 'how-to-start',
          question: '¿Cómo empezar a usar ZeroWasteAI?',
          answer: `¡Es súper fácil! Solo sigue estos pasos:

1. Descarga la app desde App Store o Google Play
2. Crea tu cuenta con email o redes sociales
3. Configura tus preferencias (alergias, nivel de cocina, tipos de comida)
4. ¡Empieza a escanear! Apunta la cámara a cualquier alimento

En menos de 2 minutos estarás reduciendo desperdicio de alimentos.`
        },
        {
          id: 'first-scan',
          question: '¿Cómo hacer mi primer escaneo?',
          answer: `Tu primer escaneo es muy simple:

1. Abre la app y toca el botón de cámara grande
2. Apunta tu teléfono a cualquier fruta, verdura o platillo
3. Mantén estable por 1-2 segundos
4. ¡Voilá! La IA identificará el alimento automáticamente

💡 Tip: Asegúrate de tener buena iluminación para mejores resultados.`
        },
        {
          id: 'setup-preferences',
          question: '¿Cómo configurar mis alergias y preferencias?',
          answer: `Configurar tus preferencias es clave para recetas personalizadas:

Durante el onboarding:
• Selecciona tus alergias (frutos secos, gluten, lácteos, etc.)
• Elige tu nivel de cocina (principiante, intermedio, avanzado)
• Marca tus tipos de comida favoritos

Cambiar después:
• Ve a tu Perfil → Configuración
• Edita "Preferencias Alimentarias"
• Los cambios se aplican inmediatamente`
        }
      ]
    },
    {
      id: 'scanning',
      title: '📷 Escaneo de Alimentos',
      icon: faCameraRetro,
      faqs: [
        {
          id: 'scan-accuracy',
          question: '¿Qué tan preciso es el reconocimiento de alimentos?',
          answer: `Nuestro reconocimiento tiene 95%+ de precisión:

Funciona excelente con:
• Frutas y verduras enteras
• Platillos preparados comunes
• Ingredientes individuales
• Productos empacados con etiquetas visibles

Consejos para mejor precisión:
• Usa buena iluminación natural
• Enfoca un alimento a la vez
• Evita fondos muy complicados
• Mantén el teléfono estable`
        },
        {
          id: 'scan-multiple',
          question: '¿Puedo escanear varios alimentos a la vez?',
          answer: `¡Sí! Puedes escanear múltiples alimentos:

Modo múltiple:
• La IA detecta automáticamente varios elementos
• Cada uno aparece como resultado separado
• Puedes confirmar o editar cada identificación

Mejores prácticas:
• Máximo 3-4 alimentos por foto
• Separa los elementos visualmente
• Usa el modo individual para mejor precisión`
        },
        {
          id: 'wrong-detection',
          question: '¿Qué hago si el escaneo detecta mal un alimento?',
          answer: `No te preocupes, puedes corregirlo fácilmente:

Opción 1 - Corrección rápida:
• Toca el resultado incorrecto
• Selecciona "Corregir identificación"
• Busca y selecciona el alimento correcto

Opción 2 - Nuevo escaneo:
• Toca "Escanear de nuevo"
• Mejora la iluminación o ángulo
• Intenta con fondo más simple

¡Cada corrección ayuda a mejorar nuestra IA!`
        }
      ]
    },
    {
      id: 'inventory',
      title: '📦 Gestión de Inventario',
      icon: faBoxOpen,
      faqs: [
        {
          id: 'add-expiry',
          question: '¿Cómo agregar fechas de vencimiento?',
          answer: `Hay varias formas de agregar fechas de vencimiento:

Automático:
• La IA sugiere fechas típicas para cada alimento
• Basado en el tipo de alimento y almacenamiento

Manual:
• Toca la fecha sugerida para editarla
• Usa el calendario o escribe la fecha
• Ajusta según la condición del alimento

Desde empaque:
• Escanea códigos de barras cuando estén disponibles
• La app puede leer fechas de algunos empaques`
        },
        {
          id: 'storage-locations',
          question: '¿Cómo organizar por ubicaciones de almacenamiento?',
          answer: `Organiza tu inventario por ubicaciones:

Ubicaciones disponibles:
• 🥶 Congelador (hasta 12 meses)
• 🧊 Refrigerador (1-2 semanas típicamente)
• 🏠 Despensa (1-6 meses según el producto)

Cambiar ubicación:
• Toca cualquier alimento en tu inventario
• Selecciona "Cambiar ubicación"
• Las fechas de vencimiento se ajustan automáticamente`
        },
        {
          id: 'expiry-alerts',
          question: '¿Cómo funcionan las alertas de vencimiento?',
          answer: `Las alertas te mantienen informado:

Tipos de alertas:
• 🟡 3 días antes del vencimiento
• 🟠 1 día antes del vencimiento
• 🔴 El día del vencimiento
• ⚠️ Productos ya vencidos

Personalizar alertas:
• Ve a Configuración → Notificaciones
• Ajusta los días de anticipación
• Elige horarios preferidos (mañana/tarde)
• Puedes silenciarlas por categorías específicas`
        }
      ]
    },
    {
      id: 'recipes',
      title: '🍳 Recetas y Cocina',
      icon: faUtensils,
      faqs: [
        {
          id: 'generate-recipes',
          question: '¿Cómo generar recetas con mis ingredientes?',
          answer: `Generar recetas es automático y personalizado:

Proceso automático:
• La IA analiza tu inventario actual
• Considera tus preferencias y alergias
• Prioriza ingredientes próximos a vencer

Generar manualmente:
• Ve a "Recetas" → "Generar nueva"
• Selecciona ingredientes específicos
• Elige tipo de comida (desayuno, almuerzo, cena)
• Ajusta tiempo de preparación deseado

Personalización:
• Nivel de dificultad
• Tiempo disponible (15min, 30min, 1hr+)
• Tipo de cocina (italiana, mexicana, asiática, etc.)`
        },
        {
          id: 'save-favorites',
          question: '¿Puedo guardar recetas favoritas?',
          answer: `¡Por supuesto! Gestiona tus recetas favoritas:

Guardar favoritas:
• Toca el ❤️ en cualquier receta
• Se guarda automáticamente en "Mis Favoritas"
• Acceso rápido desde el menú principal

Organizar favoritas:
• Crea colecciones personalizadas
• Etiquetas: "Cenas rápidas", "Postres", "Saludables"
• Busca por ingredientes o tiempo de preparación

Compartir recetas:
• Comparte con familia y amigos
• Exporta ingredientes a lista de compras
• Califica y comenta recetas de la comunidad`
        }
      ]
    },
    {
      id: 'sustainability',
      title: '🌱 Impacto Ambiental',
      icon: faSeedling,
      faqs: [
        {
          id: 'track-impact',
          question: '¿Cómo se calcula mi impacto ambiental?',
          answer: `Calculamos tu impacto de múltiples formas:

Métricas que rastreamos:
• 💧 Agua ahorrada (litros por ingredient)
• 🌍 CO2 reducido (kg de emisiones evitadas)
• 🗑️ Desperdicio evitado (kg de comida salvada)
• 💰 Dinero ahorrado (basado en precios promedio)

Cálculos basados en:
• Estudios científicos de ciclo de vida
• Bases de datos ambientales internacionales
• Tu comportamiento real de consumo
• Comparación con desperdicios típicos`
        },
        {
          id: 'sustainability-goals',
          question: '¿Puedo establecer metas de sostenibilidad?',
          answer: `¡Sí! Establece y alcanza metas ambientales:

Metas disponibles:
• Reducir desperdicio mensual en X%
• Ahorrar X litros de agua por semana
• Evitar X kg de CO2 al mes
• Cocinar X recetas con ingredientes que expiran pronto

Seguimiento de progreso:
• Dashboard visual con gráficas
• Notificaciones de logros
• Comparación con otros usuarios
• Insignias y recompensas por metas alcanzadas`
        }
      ]
    },
    {
      id: 'account',
      title: '👤 Cuenta y Suscripción',
      icon: faShieldAlt,
      faqs: [
        {
          id: 'plan-differences',
          question: '¿Cuál es la diferencia entre el plan gratuito y premium?',
          answer: `Compara nuestros planes:

Plan Starter (GRATIS):
• Escaneo básico de ingredientes (50/mes)
• Inventario simple
• 5 recetas básicas por semana
• Recordatorios de vencimiento
• Acceso a la comunidad

Plan Chef ($5/mes):
• ✅ Todo del plan Starter +
• 🚀 Escaneo ilimitado de ingredientes
• 📊 Gestión avanzada de inventario
• 🤖 Recetas IA ilimitadas
• 📅 Planificación de comidas inteligente
• 🌍 Seguimiento detallado de impacto ambiental
• 💬 Soporte prioritario
• 👨‍👩‍👧‍👦 Compartir familiar (4 miembros)`
        },
        {
          id: 'upgrade-plan',
          question: '¿Cómo actualizar mi plan?',
          answer: `Actualizar es rápido y sencillo:

Desde la app:
• Ve a Perfil → Configuración → Suscripción
• Toca "Actualizar a Chef"
• Elige mensual ($5) o anual ($50, ahorra 17%)
• Confirma con tu método de pago preferido

Activación inmediata:
• Las funciones premium se activan al instante
• Mantén todo tu progreso e inventario actual
• Puedes cancelar en cualquier momento

Métodos de pago:
• Tarjeta de crédito/débito
• PayPal
• Apple Pay / Google Pay
• Facturación móvil (según región)`
        },
        {
          id: 'cancel-subscription',
          question: '¿Cómo cancelar mi suscripción?',
          answer: `Cancelar es fácil, sin complicaciones:

Proceso de cancelación:
• Ve a Perfil → Configuración → Suscripción
• Toca "Gestionar suscripción"
• Selecciona "Cancelar suscripción"
• Confirma tu decisión

Qué sucede después:
• Mantienes acceso premium hasta el final del período pagado
• Después regresas automáticamente al plan gratuito
• Conservas todo tu inventario y datos
• Puedes reactivar cuando quieras

Sin preguntas, sin retención: Respetamos tu decisión.`
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: '⚠️ Solución de Problemas',
      icon: faExclamationTriangle,
      faqs: [
        {
          id: 'app-crashes',
          question: '¿Qué hago si la app se cierra inesperadamente?',
          answer: `Si la app se cierra, prueba estos pasos:

Soluciones inmediatas:1. Reinicia la app completamente
2. Reinicia tu teléfono 
3. Verifica espacio disponible (mínimo 1GB libre)
4. Actualiza la app desde tu tienda

Si persiste el problema:
• Asegúrate de tener la última versión de iOS/Android
• Verifica tu conexión a internet
• Libera memoria cerrando otras apps
• Contacta soporte con detalles del error

Datos seguros: Tu inventario se guarda automáticamente en la nube.`
        },
        {
          id: 'camera-issues',
          question: '¿Por qué la cámara no funciona correctamente?',
          answer: `Problemas comunes de cámara y soluciones:

Verifica permisos:
• Ve a Configuración del teléfono → ZeroWasteAI
• Asegúrate que "Cámara" esté habilitada
• Reinicia la app después de cambiar permisos

Problemas de enfoque:
• Limpia el lente de tu cámara
• Asegúrate de tener suficiente luz
• Mantén distancia de 15-30cm del objeto
• Evita superficies muy brillantes o reflejos

Si no abre la cámara:
• Cierra todas las apps que usen cámara
• Reinicia el teléfono
• Actualiza la app a la última versión`
        },
        {
          id: 'sync-issues',
          question: '¿Por qué mis datos no se sincronizan?',
          answer: `Problemas de sincronización y soluciones:

Verifica conectividad:
• Asegúrate de tener conexión estable a internet
• Prueba cambiar entre WiFi y datos móviles
• Verifica que no tengas restricciones de datos para la app

Forzar sincronización:
• Ve a Configuración → Cuenta → "Sincronizar ahora"
• Cierra y reabre la app
• Espera 1-2 minutos para que complete

Si continúa el problema:
• Cierra sesión y vuelve a iniciarla
• Contacta soporte con tu email de cuenta
• Nunca perdemos tus datos, están seguros en nuestros servidores`
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center text-[var(--primary-green)] hover:text-[var(--primary-green-dark)] transition-colors mr-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Volver al inicio
            </button>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white mr-4">
                <FontAwesomeIcon icon={faLifeRing} className="text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Centro de Ayuda</h1>
                <p className="text-gray-600">Encuentra respuestas a todas tus preguntas sobre ZeroWasteAI</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar en preguntas frecuentes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent outline-none transition-all"
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-800 text-sm">
                💡 <strong>¿No encuentras lo que buscas?</strong> Contáctanos directamente en{' '}
                <a href="mailto:zerowasteai4@gmail.com" className="font-medium underline hover:no-underline">
                  zerowasteai4@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredFaqs.reduce((acc, cat) => acc + cat.faqs.length, 0)} resultados para &ldquo;{searchTerm}&rdquo;
            </p>
          </div>
        )}

        <div className="space-y-8">
          {filteredFaqs.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--primary-green)] to-[var(--primary-green-dark)] text-white p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={category.icon} className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {category.faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faQuestionCircle} className="text-[var(--primary-green)] mr-3 flex-shrink-0" />
                          <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                        </div>
                        <div className={`transform transition-transform duration-200 ${
                          expandedFaq === faq.id ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                          <div className="pt-4 prose prose-sm max-w-none">
                            <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No encontramos resultados</h3>
            <p className="text-gray-600 mb-6">Intenta con términos diferentes o contacta nuestro soporte.</p>
            <a 
              href="mailto:zerowasteai4@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-[var(--primary-green)] text-white rounded-lg hover:bg-[var(--primary-green-dark)] transition-colors"
            >
              <FontAwesomeIcon icon={faLifeRing} className="mr-2" />
              Contactar Soporte
            </a>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-[var(--primary-green)] text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Aún necesitas ayuda?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nuestro equipo de soporte está aquí para ayudarte. Respuesta típica en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:zerowasteai4@gmail.com"
              className="bg-white text-[var(--primary-green)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enviar Email
            </a>
            <a 
              href="/contact"
              className="bg-[var(--primary-green-dark)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Formulario de Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}