'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faShieldAlt, 
  faEye, 
  faDatabase, 
  faUserSecret,
  faCloudUploadAlt,
  faLock,
  faMobile,
  faTrash,
  faUserCog,
  faBell,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';

export default function Privacy() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const router = useRouter();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'introduction',
      icon: faShieldAlt,
      title: 'Introducción',
      summary: 'Nuestro compromiso con tu privacidad',
      content: `Zer0 Waste AI respeta profundamente tu privacidad y está comprometida con la protección de tus datos personales. Esta Política de Privacidad explica de manera clara y transparente cómo recopilamos, usamos, almacenamos y protegemos tu información cuando utilizas nuestra aplicación móvil.

Creemos que la privacidad es un derecho fundamental, no un privilegio. Por eso hemos diseñado nuestra aplicación con la privacidad como prioridad desde el primer día.`
    },
    {
      id: 'data-collection',
      icon: faEye,
      title: 'Información que Recopilamos',
      summary: 'Qué datos necesitamos y por qué',
      content: `📧 Información Personal:
• Correo electrónico, nombre de usuario, teléfono
• Foto de perfil (opcional)
• Credenciales de inicio de sesión

🍎 Preferencias del Usuario:
• Alergias y restricciones dietéticas
• Nivel de cocina (principiante/intermedio/avanzado)
• Tipos de alimentos preferidos
• Configuración de idioma

🥬 Datos de Inventario:
• Nombres de alimentos, cantidades, fechas de vencimiento
• Ubicaciones de almacenamiento (refrigerador, despensa, congelador)
• Patrones de uso y desperdicio

📱 Contenido Multimedia:
• Fotografías de alimentos para reconocimiento de IA
• Metadatos generados por IA sobre contenido alimentario
• Resultados de identificación con puntuaciones de confianza

📊 Análisis de IA:
• Información nutricional calculada
• Detección de alérgenos
• Cálculos de impacto ambiental (CO2 y agua)
• Recomendaciones personalizadas`
    },
    {
      id: 'data-usage',
      icon: faDatabase,
      title: 'Cómo Usamos tu Información',
      summary: 'Para qué utilizamos tus datos',
      content: `🎯 Funcionalidad Principal:
• Procesar imágenes para identificar ingredientes
• Generar recetas personalizadas basadas en tu inventario
• Rastrear alimentos y fechas de vencimiento
• Optimizar planes alimentarios según tus preferencias

✨ Personalización:
• Adaptar experiencia según alergias y preferencias
• Notificaciones inteligentes sobre vencimientos
• Recomendaciones relevantes para reducir desperdicio

🔒 Seguridad y Cumplimiento:
• Verificar identidad y proteger cuentas
• Detectar y prevenir uso no autorizado
• Cumplir con obligaciones legales

🚀 Mejora del Servicio:
• Entender cómo se usa la aplicación para mejoras
• Identificar nuevas características
• Proporcionar soporte técnico efectivo

¡IMPORTANTE! Nunca vendemos, alquilamos o comercializamos tus datos personales a terceros.`
    },
    {
      id: 'third-parties',
      icon: faCloudUploadAlt,
      title: 'Servicios de Terceros',
      summary: 'Socios tecnológicos de confianza',
      content: `🔥 Firebase (Google):
• Autenticación y gestión de cuentas
• Base de datos en tiempo real (Cloud Firestore)
• Almacenamiento seguro en la nube
• Analytics y informes de errores
• Notificaciones push

🔐 Autenticación Social:
• Google Sign-In, Facebook Login, Apple Sign In
• Solo información básica del perfil autorizada por ti

🤖 API Backend Personalizada:
• Servicios de IA para reconocimiento de alimentos
• Cálculos de impacto ambiental
• Generación de recetas personalizadas

✅ Garantía: Solo compartimos información con proveedores de servicios de confianza necesarios para operar la aplicación. Todos nuestros socios cumplen con altos estándares de seguridad y privacidad.`
    },
    {
      id: 'storage-security',
      icon: faLock,
      title: 'Almacenamiento y Seguridad',
      summary: 'Cómo protegemos tus datos',
      content: `📱 Almacenamiento Local:
• Configuraciones básicas (no encriptadas)
• Tokens y datos sensibles (totalmente encriptados)
• Caché local para mejor rendimiento

☁️ Almacenamiento en la Nube:
• Firebase Firestore para perfiles y preferencias
• Firebase Storage para imágenes procesadas
• API backend segura para resultados de IA

🛡️ Medidas de Seguridad:
• Encriptación de datos en tránsito y en reposo
• Comunicación HTTPS con encriptación TLS
• Autenticación JWT con renovación automática
• Reglas de seguridad de Firebase granulares
• Firebase App Check para protección contra abuso

🔍 Monitoreo Continuo:
• Detección automática de amenazas
• Auditorías regulares de seguridad
• Actualizaciones de seguridad proactivas`
    },
    {
      id: 'permissions',
      icon: faMobile,
      title: 'Permisos del Dispositivo',
      summary: 'Qué accesos necesitamos y por qué',
      content: `✅ Permisos Requeridos:
• 📷 Cámara: Para escanear e identificar alimentos
• 🖼️ Galería: Para seleccionar imágenes existentes
• 💾 Almacenamiento: Para guardar imágenes procesadas
• 🌐 Internet: Para conectividad y servicios de IA
• 🔔 Notificaciones: Para alertas de vencimiento

🔧 Permisos Opcionales:
• 🎤 Micrófono: Solo para funciones futuras de reconocimiento de voz
• 📊 Seguimiento (iOS): Para análisis personalizados (puedes deshabilitarlo)

💡 Control Total: Puedes revisar y cambiar estos permisos en cualquier momento desde la configuración de tu dispositivo. La aplicación funcionará con funcionalidades limitadas si deshabilitas permisos requeridos.`
    },
    {
      id: 'data-retention',
      icon: faTrash,
      title: 'Retención y Eliminación',
      summary: 'Cuánto tiempo guardamos tus datos',
      content: `📅 Datos de Cuenta Activa:
• Datos de perfil: Conservados mientras tu cuenta esté activa
• Datos de inventario: Según tu configuración personal
• Historial de recetas: Para personalización continua

🗑️ Eliminación de Cuenta:
• Eliminación completa en 30 días máximo
• Datos analíticos solo en forma agregada y anonimizada
• Registros de errores sin información identificable

🎛️ Control del Usuario:
• Eliminación de cuenta disponible en configuraciones
• Eliminación individual de inventario y recetas
• Configuración de notificaciones completamente personalizable

⚡ Eliminación Automática:
• Datos de sesión eliminados después de inactividad
• Caché local limpiado periódicamente
• Imágenes temporales eliminadas después del procesamiento`
    },
    {
      id: 'user-rights',
      icon: faUserCog,
      title: 'Tus Derechos de Privacidad',
      summary: 'Tienes control total sobre tus datos',
      content: `🔍 Derechos Generales:
• Acceso: Solicitar copia de todos tus datos personales
• Rectificación: Corregir información inexacta o incompleta
• Eliminación: Solicitar eliminación completa de tus datos
• Portabilidad: Obtener datos en formato estructurado
• Restricción: Limitar el procesamiento de tus datos

🌍 Cumplimiento Regulatorio:
• GDPR (Europa): Pleno cumplimiento para usuarios de la UE
• CCPA (California): Cumplimiento para residentes de California
• Otras jurisdicciones: Cumplimiento con leyes locales aplicables

📧 Ejercer tus Derechos:
Contáctanos en: zerowasteai4@gmail.com
• Respuesta en 48 horas para consultas generales
• 30 días máximo para solicitudes de privacidad
• 24 horas para problemas de seguridad`
    },
    {
      id: 'notifications',
      icon: faBell,
      title: 'Notificaciones y Comunicaciones',
      summary: 'Control total sobre las comunicaciones',
      content: `🔔 Tipos de Notificaciones:
• Alertas de vencimiento de alimentos
• Sugerencias de recetas basadas en inventario
• Recordatorios de planes de comidas
• Logros ambientales y hitos de sostenibilidad

⚙️ Control Granular:
• Configuración individual por tipo de notificación
• Opt-out completo disponible en cualquier momento
• Personalización de horarios de notificaciones
• Configuración de frecuencia (diaria, semanal, mensual)

📱 Métodos de Comunicación:
• Notificaciones push en la aplicación
• Correos electrónicos importantes (solo para cuenta y seguridad)
• Nunca spam o comunicaciones de marketing no solicitadas

🎯 Notificaciones Inteligentes:
• Basadas en tus patrones de uso
• Optimizadas para tu zona horaria
• Reducen automáticamente si no interactúas`
    },
    {
      id: 'international',
      icon: faGlobe,
      title: 'Transferencias Internacionales',
      summary: 'Cómo manejamos datos globalmente',
      content: `🌍 Infraestructura Global:
Nuestros servicios utilizan proveedores con infraestructura global. Tus datos pueden ser transferidos y procesados en países fuera de tu residencia, incluyendo Estados Unidos y otros países donde operan nuestros proveedores.

🛡️ Garantías de Protección:
• Cláusulas contractuales estándar aprobadas
• Marcos de adecuación reconocidos internacionalmente
• Salvaguardas legales apropiadas en todas las jurisdicciones
• Cumplimiento con estándares internacionales de privacidad

🔒 Mismo Nivel de Protección:
Garantizamos que tus datos reciben el mismo nivel de protección sin importar dónde se procesen, cumpliendo siempre con los estándares más altos de privacidad y seguridad.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center mb-4">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center text-[var(--primary-green)] hover:text-[var(--primary-green-dark)] transition-colors mr-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Volver al inicio
            </button>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                <FontAwesomeIcon icon={faUserSecret} className="text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
                <p className="text-gray-600">Última actualización: 20 de julio de 2025</p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-green-800 text-sm">
                🔒 <strong>Compromiso de privacidad:</strong> Tu privacidad no es una idea tardía: está integrada en todo lo que construimos. 
                Nunca vendemos tus datos y tienes control total sobre tu información.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={section.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-600">{section.summary}</p>
                  </div>
                </div>
                <div className={`transform transition-transform duration-200 ${
                  expandedSection === section.id ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                  <div className="pt-4 prose prose-sm max-w-none">
                    <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-8 bg-blue-500 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">¿Preguntas sobre tu privacidad?</h3>
          <p className="mb-4">Estamos aquí para ayudarte. La transparencia es fundamental para nosotros.</p>
          <div className="flex justify-center">
            <a 
              href="mailto:zerowasteai4@gmail.com" 
              className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              zerowasteai4@gmail.com
            </a>
          </div>
        </div>

        {/* Rights Summary */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">🛡️ Resumen de tus derechos</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              Acceder a todos tus datos
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              Corregir información incorrecta
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              Eliminar tu cuenta completamente
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              Exportar tus datos
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              Limitar el procesamiento
            </div>
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              Presentar quejas a autoridades
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Esta política de privacidad forma parte integral de nuestros Términos y Condiciones de servicio.
          </p>
        </div>
      </div>
    </div>
  );
}