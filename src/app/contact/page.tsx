'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faEnvelope, 
  faUser,
  faComment,
  faMessage,
  faPaperPlane,
  faCheckCircle,
  faExclamationTriangle,
  faHeadset,
  faBug,
  faLightbulb,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();

  const contactCategories = [
    { id: 'support', label: 'Soporte Técnico', icon: faHeadset },
    { id: 'bug', label: 'Reportar Error', icon: faBug },
    { id: 'feature', label: 'Sugerir Función', icon: faLightbulb },
    { id: 'feedback', label: 'Comentarios Generales', icon: faHeart }
  ];

  // Función de validación de email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Función de validación de campos
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es requerido';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        if (value.trim().length > 50) return 'El nombre no puede tener más de 50 caracteres';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es requerido';
        if (!isValidEmail(value)) return 'Ingresa un email válido';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'El asunto es requerido';
        if (value.trim().length < 5) return 'El asunto debe tener al menos 5 caracteres';
        if (value.trim().length > 100) return 'El asunto no puede tener más de 100 caracteres';
        return '';
      
      case 'category':
        if (!value) return 'Selecciona una categoría';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        if (value.trim().length > 1000) return 'El mensaje no puede tener más de 1000 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Actualizar el valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo actual
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Limpiar error general
    if (submitError) {
      setSubmitError('');
    }

    // Validar en tiempo real para email
    if (name === 'email' && value) {
      const error = validateField(name, value);
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Validar todos los campos
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    // Si hay errores, mostrarlos y no enviar
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      setSubmitError('Por favor, corrige los errores antes de enviar el mensaje.');
      return;
    }

    try {
      // Importar el cliente de email dinámicamente
      const { sendEmailClient } = await import('@/lib/emailClient');
      
      // Enviar email
      const success = await sendEmailClient(formData);
      
      if (success) {
        setIsSubmitted(true);
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitError('Error al enviar el mensaje. Por favor, intenta de nuevo o envía un email directamente a zerowasteai4@gmail.com');
      }
    } catch (error) {
      console.error('Error:', error);
      
      // Verificar si es un error de configuración
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      
      if (errorMessage.includes('service') || errorMessage.includes('template') || errorMessage.includes('key')) {
        setSubmitError('Servicio de email no configurado. Usando método alternativo...');
        
        // Fallback: abrir cliente de email por defecto
        setTimeout(() => {
          const subject = encodeURIComponent(`[${getCategoryLabel(formData.category)}] ${formData.subject}`);
          const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`);
          window.location.href = `mailto:zerowasteai4@gmail.com?subject=${subject}&body=${body}`;
        }, 2000);
      } else {
        setSubmitError('Error de conexión. Por favor, verifica tu internet e intenta de nuevo.');
      }
    }
    
    setIsSubmitting(false);
  };

  // Función auxiliar para obtener label de categoría
  const getCategoryLabel = (category: string): string => {
    const categories: Record<string, string> = {
      'support': 'Soporte Técnico',
      'bug': 'Reportar Error',
      'feature': 'Sugerir Función',
      'feedback': 'Comentarios Generales'
    };
    return categories[category] || 'Consulta General';
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.category && formData.message;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-sm sm:max-w-md mx-auto text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <FontAwesomeIcon icon={faCheckCircle} className="text-2xl sm:text-3xl text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">¡Mensaje Enviado!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2 sm:px-0">
            Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos en las próximas 24 horas.
          </p>
          <div className="space-y-2 sm:space-y-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-[var(--primary-green)] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[var(--primary-green-dark)] transition-colors text-sm sm:text-base"
            >
              Enviar Otro Mensaje
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full bg-gray-100 text-gray-700 py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center mb-3 sm:mb-4">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center text-[var(--primary-green)] hover:text-[var(--primary-green-dark)] transition-colors mr-4 text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1 sm:mr-2 text-sm sm:text-base" />
              <span className="hidden xs:inline">Volver al inicio</span>
              <span className="xs:hidden">Volver</span>
            </button>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-2xl" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Contáctanos</h1>
                <p className="text-sm sm:text-base text-gray-600 px-4 sm:px-0">Estamos aquí para ayudarte con cualquier pregunta o comentario</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Información de Contacto</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white mr-3 sm:mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs sm:text-sm" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:zerowasteai4@gmail.com" 
                      className="text-[var(--primary-green)] hover:underline break-all text-xs sm:text-sm"
                    >
                      zerowasteai4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3 sm:mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={faHeadset} className="text-xs sm:text-sm" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Tiempo de Respuesta</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Típicamente dentro de 24 horas</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">💡 Antes de escribir</h4>
                <p className="text-green-700 text-xs sm:text-sm">
                  Revisa nuestro{' '}
                  <a href="/help" className="underline hover:no-underline">Centro de Ayuda</a>{' '}
                  para respuestas rápidas a preguntas comunes.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Envíanos un Mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      <FontAwesomeIcon icon={faUser} className="mr-1 sm:mr-2 text-[var(--primary-green)] text-xs sm:text-sm" />
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                        errors.name 
                          ? 'border-red-300 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-[var(--primary-green)]'
                      }`}
                      placeholder="Tu nombre completo"
                      suppressHydrationWarning
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-1 sm:mr-2 text-[var(--primary-green)] text-xs sm:text-sm" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-[var(--primary-green)]'
                      }`}
                      placeholder="tu@email.com"
                      suppressHydrationWarning
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                    Categoría del Mensaje *
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                    {contactCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                        className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-center min-h-[70px] sm:min-h-[80px] flex flex-col items-center justify-center ${
                          formData.category === category.id
                            ? 'border-[var(--primary-green)] bg-[var(--primary-green-light)] text-[var(--primary-green)]'
                            : errors.category
                            ? 'border-red-300 hover:border-red-400 text-gray-600'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <FontAwesomeIcon icon={category.icon} className="text-base sm:text-lg mb-1 sm:mb-2 block" />
                        <span className="text-xs sm:text-xs font-medium leading-tight px-1">{category.label}</span>
                      </button>
                    ))}
                  </div>
                  {errors.category && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    <FontAwesomeIcon icon={faComment} className="mr-1 sm:mr-2 text-[var(--primary-green)] text-xs sm:text-sm" />
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all text-sm sm:text-base ${
                      errors.subject 
                        ? 'border-red-300 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-[var(--primary-green)]'
                    }`}
                    placeholder="Resumen breve de tu mensaje"
                    suppressHydrationWarning
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    <FontAwesomeIcon icon={faMessage} className="mr-1 sm:mr-2 text-[var(--primary-green)] text-xs sm:text-sm" />
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all resize-vertical text-sm sm:text-base ${
                      errors.message 
                        ? 'border-red-300 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-[var(--primary-green)]'
                    }`}
                    placeholder="Describe tu consulta, problema o sugerencia con el mayor detalle posible..."
                    suppressHydrationWarning
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                      Mínimo 10 caracteres ({formData.message.length}/1000). Sé específico para ayudarnos a darte la mejor respuesta.
                    </p>
                  )}
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mr-3" />
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-3 sm:pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                      isFormValid && !isSubmitting
                        ? 'bg-[var(--primary-green)] hover:bg-[var(--primary-green-dark)] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                        <span className="text-sm sm:text-base">Enviando Mensaje...</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-2 sm:mr-3 text-sm sm:text-base" />
                        <span className="text-sm sm:text-base">Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Form Footer */}
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex items-start text-xs sm:text-sm text-gray-600">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0 text-xs sm:text-sm" />
                    <p>
                      Al enviar este formulario, aceptas que podemos usar tu email para responder a tu consulta. 
                      Lee nuestra{' '}
                      <a href="/privacy" target="_blank" className="text-[var(--primary-green)] hover:underline">
                        Política de Privacidad
                      </a>.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-8 sm:mt-12 bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
            ¿Buscas respuestas rápidas? 🚀
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <a href="/help#getting-started" className="p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🚀</div>
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">Primeros Pasos</h4>
            </a>
            <a href="/help#scanning" className="p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📷</div>
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">Escaneo de Alimentos</h4>
            </a>
            <a href="/help#inventory" className="p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">📦</div>
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">Gestión de Inventario</h4>
            </a>
            <a href="/help#account" className="p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2">👤</div>
              <h4 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">Cuenta y Suscripción</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}