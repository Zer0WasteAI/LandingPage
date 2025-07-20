'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faGavel, 
  faHandshake, 
  faUserCheck,
  faClipboardList,
  faExclamationTriangle,
  faBrain,
  faCreditCard,
  faBalanceScale
} from '@fortawesome/free-solid-svg-icons';

export default function Terms() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const router = useRouter();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'acceptance',
      icon: faHandshake,
      title: 'Aceptación de Términos',
      summary: 'Al usar ZeroWasteAI, aceptas nuestros términos legales',
      content: `Al acceder y utilizar la aplicación móvil Zer0 Waste AI ("la Aplicación", "nuestro Servicio"), usted acepta estar legalmente obligado por estos Términos y Condiciones. Si no está de acuerdo con cualquier parte de estos términos, no debe utilizar nuestra Aplicación.

Estos Términos constituyen un acuerdo legal vinculante entre usted ("Usuario") y Zer0 Waste AI ("nosotros", "Empresa").`
    },
    {
      id: 'service',
      icon: faBrain,
      title: 'Descripción del Servicio',
      summary: 'IA para reducir desperdicio de alimentos y gestionar tu cocina',
      content: `Zer0 Waste AI es una aplicación móvil impulsada por inteligencia artificial diseñada para:

• Reducir el desperdicio de alimentos mediante reconocimiento inteligente
• Gestionar inventarios alimentarios con seguimiento automático
• Generar recetas personalizadas basadas en ingredientes disponibles
• Planificar comidas optimizadas según preferencias
• Rastrear impacto ambiental de decisiones alimentarias

Funcionalidades principales incluyen reconocimiento de alimentos con IA, análisis nutricional, detección de alérgenos, y seguimiento de sostenibilidad.`
    },
    {
      id: 'eligibility',
      icon: faUserCheck,
      title: 'Elegibilidad y Registro',
      summary: 'Requisitos de edad y responsabilidades de cuenta',
      content: `Requisitos de edad:
• Menores de 13 años: No permitidos
• 13-17 años: Requieren consentimiento parental verificable
• 18+ años: Registro completo disponible

Al crear una cuenta garantizas que:
• Información proporcionada es veraz y actualizada
• La cuenta es para uso personal, no comercial
• Eres responsable de mantener confidencialidad de credenciales
• Informarás sobre cualquier uso no autorizado`
    },
    {
      id: 'usage',
      icon: faClipboardList,
      title: 'Uso Aceptable',
      summary: 'Qué puedes y no puedes hacer con la aplicación',
      content: `Usos permitidos:
• Gestión personal de alimentos e inventario doméstico
• Planificación nutricional y organización de comidas
• Reducción de desperdicios y optimización de ingredientes
• Educación nutricional e impacto ambiental

Usos prohibidos:
• Uso comercial no autorizado o reventa
• Ingeniería inversa o descompilación
• Ataques de sistema o acceso no autorizado
• Información falsa médica o nutricional
• Spam, abuso o contenido inapropiado`
    },
    {
      id: 'ai',
      icon: faBrain,
      title: 'Funcionalidades de IA',
      summary: 'Limitaciones y precisión de nuestros algoritmos',
      content: `Precisión de la IA:
• Proporcionamos identificación de alta precisión, pero no 100% exacta
• Siempre revisa y confirma resultados de reconocimiento
• Los algoritmos se actualizan regularmente para mayor precisión

Información nutricional:
• Solo para propósitos educativos, no es consejo médico
• No sustituye consulta profesional médica o nutricional
• Aunque detectamos alérgenos, siempre verifica ingredientes
• Consulta profesionales para dietas médicas específicas

No somos responsables por errores de identificación, información incorrecta, o problemas de salud resultantes del uso.`
    },
    {
      id: 'payments',
      icon: faCreditCard,
      title: 'Pagos y Suscripciones',
      summary: 'Modelo de precios actual y futuro',
      content: `Modelo actual:
• Plan Starter: Completamente gratuito
• Plan Chef: $5.00/mes con funciones premium

Funcionalidades futuras premium pueden incluir:
• Suscripciones mensuales/anuales para IA avanzada
• Compras dentro de la aplicación para contenido premium
• Análisis avanzados de sostenibilidad

Cuando implementemos nuevos pagos:
• 30 días de aviso previo
• Consentimiento explícito requerido
• Política de reembolso clara
• Transparencia total en precios`
    },
    {
      id: 'liability',
      icon: faExclamationTriangle,
      title: 'Limitación de Responsabilidad',
      summary: 'Descargos de responsabilidad importantes',
      content: `En la máxima medida permitida por la ley:
• El servicio se proporciona "tal como está"
• Uso bajo su propio riesgo
• Nuestra responsabilidad se limita al monto pagado

No somos responsables por:
• Daños indirectos o pérdida de datos
• Consecuencias de decisiones alimentarias
• Problemas de salud o reacciones alérgicas
• Interrupciones de servicios de terceros
• Pérdida de datos (aunque usamos mejores prácticas)

En jurisdicciones con protecciones del consumidor, se mantienen derechos legales obligatorios.`
    },
    {
      id: 'termination',
      icon: faBalanceScale,
      title: 'Terminación',
      summary: 'Cómo terminar tu cuenta y efectos',
      content: `Terminación por el usuario:
• En cualquier momento sin justificación
• Proceso simple a través de configuraciones
• Eliminación de datos según Política de Privacidad

Terminación por nuestra parte por:
• Violación de términos
• Actividad ilegal
• Abuso del sistema
• Inactividad prolongada (más de 2 años)

Efectos de terminación:
• Acceso cesa inmediatamente
• Datos eliminados según cronograma establecido
• Ciertos términos sobreviven la terminación`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-green-light)] via-white to-gray-50">
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
              <div className="w-16 h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white mr-4">
                <FontAwesomeIcon icon={faGavel} className="text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
                <p className="text-gray-600">Última actualización: 20 de julio de 2025</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 text-sm">
                📋 <strong>Resumen rápido:</strong> Usa ZeroWasteAI responsablemente, respeta la propiedad intelectual, 
                entiende las limitaciones de la IA, y contáctanos si tienes dudas. ¡Estamos aquí para ayudarte a reducir el desperdicio de alimentos!
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
                  <div className="w-10 h-10 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
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
        <div className="mt-8 bg-[var(--primary-green)] text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">¿Tienes preguntas sobre estos términos?</h3>
          <p className="mb-4">Estamos aquí para ayudarte. Contáctanos si necesitas aclaraciones.</p>
          <div className="flex justify-center">
            <a 
              href="mailto:zerowasteai4@gmail.com" 
              className="bg-white text-[var(--primary-green)] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              zerowasteai4@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Al utilizar ZeroWasteAI, reconoces que has leído, entendido y aceptas 
            estar legalmente obligado por estos Términos y Condiciones.
          </p>
        </div>
      </div>
    </div>
  );
}