'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCameraRetro, 
  faClipboardList, 
  faUtensils, 
  faSeedling, 
  faSearch, 
  faBoxOpen, 
  faChartLine, 
  faDownload, 
  faPlay, 
  faTrash, 
  faClock, 
  faQuestionCircle, 
  faMobile, 
  faGlobe, 
  faCarrot,
  faLeaf,
  faPepperHot,
  faCheck,
  faLemon,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram, 
  faTwitter, 
  faLinkedin, 
  faApple as faAppleBrand, 
  faGooglePlay 
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: {
        features: 'Features',
        howItWorks: 'How It Works',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
        download: 'Download App'
      },
      hero: {
        title: 'Transform Your Kitchen Into a Smart, Sustainable Space',
        subtitle: 'Reduce food waste by up to 40% with AI-powered ingredient recognition and personalized recipe generation',
        description: 'Discover how ZeroWasteAI combines cutting-edge artificial intelligence with environmental consciousness to revolutionize your cooking experience while saving money and protecting our planet.',
        downloadIOS: 'Download for iOS',
        downloadAndroid: 'Download for Android',
        watchDemo: 'Watch Demo Video',
        trustedBy: 'Trusted by 10,000+ eco-conscious families worldwide'
      },
      problem: {
        title: 'The Hidden Cost of Food Waste',
        description: 'Every year, the average household wastes $1,500 worth of food while contributing to 8% of global greenhouse gas emissions. Traditional meal planning is time-consuming, ingredient management is chaotic, and expired food silently damages both your wallet and our environment.',
        painPoints: [
          '$125/month lost to spoiled ingredients',
          '2+ hours weekly on meal planning',
          'Daily "what to cook" decision fatigue',
          'No unified solution for kitchen management',
          'Lack of environmental impact awareness'
        ]
      },
      solution: {
        title: 'Meet ZeroWasteAI: Your Intelligent Kitchen Assistant',
        description: 'ZeroWasteAI leverages advanced computer vision and machine learning to create a seamless kitchen management experience that saves money, time, and the environment.',
        steps: [
          { icon: faCameraRetro, title: 'Scan', description: 'Point your camera at ingredients - our AI instantly recognizes them' },
          { icon: faClipboardList, title: 'Track', description: 'Digital inventory automatically tracks expiration dates and quantities' },
          { icon: faUtensils, title: 'Cook', description: 'Get personalized recipes using ingredients you already have' },
          { icon: faSeedling, title: 'Impact', description: 'Monitor your environmental savings and celebrate achievements' }
        ]
      },
      features: [
        {
          icon: faSearch,
          title: 'Instant AI Food Recognition',
          description: 'Transform your smartphone into a powerful food identification tool. Our advanced computer vision technology recognizes over 5,000 ingredients and prepared dishes with 95%+ accuracy in real-time.',
          benefits: [
            'Instant ingredient identification via camera',
            'Support for 15+ languages and regional cuisines',
            'Automatic nutritional information lookup',
            'Allergy alert system for detected foods',
            'Barcode scanning for packaged items'
          ]
        },
        {
          icon: faBoxOpen,
          title: 'Smart Digital Pantry',
          description: 'Never let food expire again with our intelligent inventory system that tracks everything in your kitchen automatically and sends timely reminders.',
          benefits: [
            'Automatic expiration date tracking',
            'Multi-location storage (fridge, pantry, freezer)',
            'Smart notifications before food spoils',
            'Quantity management with usage predictions',
            'Environmental impact metrics per item'
          ]
        },
        {
          icon: faUtensils,
          title: 'AI-Powered Recipe Creation',
          description: 'Get unlimited personalized recipes using ingredients you already have. Our AI considers your dietary preferences, cooking skill level, and available time to create perfect meal suggestions.',
          benefits: [
            'Custom recipes based on available inventory',
            'Dietary restriction compliance (gluten-free, vegan, etc.)',
            'Cooking level adaptation (beginner to advanced)',
            'Time-based meal suggestions (quick, elaborate)',
            'Nutritional optimization and calorie tracking'
          ]
        },
        {
          icon: faChartLine,
          title: 'Sustainability Dashboard',
          description: 'Visualize your positive environmental impact with detailed metrics showing carbon footprint reduction, water savings, and waste prevention achievements.',
          benefits: [
            'Real-time carbon footprint calculations',
            'Water footprint tracking per ingredient',
            'Waste reduction statistics and trends',
            'Achievement badges and milestone celebrations',
            'Community impact comparison and challenges'
          ]
        }
      ],
      pricing: {
        title: 'Simple, Transparent Pricing',
        plans: [
          {
            name: 'Starter',
            price: 'FREE',
            features: [
              'Basic ingredient scanning (50/month)',
              'Simple inventory tracking',
              '5 basic recipes per week',
              'Basic expiration reminders',
              'Community access'
            ]
          },
          {
            name: 'Chef',
            price: '$5.00/month',
            yearlyPrice: '$50.00/year (Save 17%)',
            featured: true,
            features: [
              'Unlimited ingredient scanning',
              'Advanced inventory management',
              'Unlimited AI recipe generation',
              'Smart meal planning calendar',
              'Detailed environmental impact tracking',
              'Priority customer support',
              'Advanced dietary customization',
              'Family sharing (up to 4 members)'
            ]
          }
        ]
      },
      testimonials: [
        {
          quote: "ZeroWasteAI completely transformed how we approach cooking. We've cut our food waste by 60% and discovered amazing recipes we never would have tried!",
          author: "Sarah M., San Francisco"
        },
        {
          quote: "As a busy parent, this app is a lifesaver. No more staring at the fridge wondering what to cook!",
          author: "Michael R., Austin"
        },
        {
          quote: "The environmental tracking feature keeps me motivated. Knowing I'm making a real difference feels amazing.",
          author: "Emma L., Portland"
        }
      ]
    },
    es: {
      nav: {
        features: 'Características',
        howItWorks: 'Cómo Funciona',
        pricing: 'Precios',
        about: 'Acerca de',
        contact: 'Contacto',
        download: 'Descargar App'
      },
      hero: {
        title: 'Transforma Tu Cocina En Un Espacio Inteligente y Sostenible',
        subtitle: 'Reduce el desperdicio de alimentos hasta un 40% con reconocimiento de ingredientes impulsado por IA y generación de recetas personalizadas',
        description: 'Descubre cómo ZeroWasteAI combina inteligencia artificial de vanguardia con conciencia ambiental para revolucionar tu experiencia culinaria mientras ahorras dinero y proteges nuestro planeta.',
        downloadIOS: 'Descargar para iOS',
        downloadAndroid: 'Descargar para Android',
        watchDemo: 'Ver Video Demo',
        trustedBy: 'Confiado por más de 10,000 familias eco-conscientes en todo el mundo'
      },
      problem: {
        title: 'El Costo Oculto del Desperdicio de Alimentos',
        description: 'Cada año, el hogar promedio desperdicia $1,500 en alimentos mientras contribuye al 8% de las emisiones globales de gases de efecto invernadero. La planificación tradicional de comidas consume tiempo, la gestión de ingredientes es caótica, y los alimentos vencidos dañan silenciosamente tanto tu billetera como nuestro medio ambiente.',
        painPoints: [
          '$125/mes perdidos en ingredientes echados a perder',
          'Más de 2 horas semanales en planificación de comidas',
          'Fatiga diaria de decisión "qué cocinar"',
          'Ninguna solución unificada para gestión de cocina',
          'Falta de conciencia sobre impacto ambiental'
        ]
      },
      solution: {
        title: 'Conoce ZeroWasteAI: Tu Asistente Inteligente de Cocina',
        description: 'ZeroWasteAI aprovecha visión computacional avanzada y aprendizaje automático para crear una experiencia perfecta de gestión de cocina que ahorra dinero, tiempo y el medio ambiente.',
        steps: [
          { icon: faCameraRetro, title: 'Escanear', description: 'Apunta tu cámara a los ingredientes - nuestra IA los reconoce instantáneamente' },
          { icon: faClipboardList, title: 'Rastrear', description: 'El inventario digital rastrea automáticamente fechas de vencimiento y cantidades' },
          { icon: faUtensils, title: 'Cocinar', description: 'Obtén recetas personalizadas usando ingredientes que ya tienes' },
          { icon: faSeedling, title: 'Impacto', description: 'Monitorea tus ahorros ambientales y celebra logros' }
        ]
      },
      // Translated features, pricing, and testimonials would be here
      features: [
        {
          icon: faSearch,
          title: 'Reconocimiento Instantáneo de Alimentos IA',
          description: 'Transforma tu smartphone en una herramienta poderosa de identificación de alimentos. Nuestra tecnología avanzada de visión computacional reconoce más de 5,000 ingredientes y platillos preparados con 95%+ precisión en tiempo real.',
          benefits: [
            'Identificación instantánea de ingredientes vía cámara',
            'Soporte para 15+ idiomas y cocinas regionales',
            'Búsqueda automática de información nutricional',
            'Sistema de alerta de alergias para alimentos detectados',
            'Escaneo de códigos de barras para productos empacados'
          ]
        },
        {
          icon: faBoxOpen,
          title: 'Despensa Digital Inteligente',
          description: 'Nunca dejes que los alimentos se venzan de nuevo con nuestro sistema inteligente de inventario que rastrea automáticamente todo en tu cocina y envía recordatorios oportunos.',
          benefits: [
            'Seguimiento automático de fechas de vencimiento',
            'Almacenamiento multi-ubicación (refrigerador, despensa, congelador)',
            'Notificaciones inteligentes antes de que se echen a perder',
            'Gestión de cantidades con predicciones de uso',
            'Métricas de impacto ambiental por artículo'
          ]
        },
        {
          icon: faUtensils,
          title: 'Creación de Recetas Impulsada por IA',
          description: 'Obtén recetas personalizadas ilimitadas usando ingredientes que ya tienes. Nuestra IA considera tus preferencias dietéticas, nivel de habilidad culinaria y tiempo disponible para crear sugerencias perfectas de comidas.',
          benefits: [
            'Recetas personalizadas basadas en inventario disponible',
            'Cumplimiento de restricciones dietéticas (sin gluten, vegano, etc.)',
            'Adaptación de nivel de cocina (principiante a avanzado)',
            'Sugerencias de comidas basadas en tiempo (rápidas, elaboradas)',
            'Optimización nutricional y seguimiento de calorías'
          ]
        },
        {
          icon: faChartLine,
          title: 'Panel de Sostenibilidad',
          description: 'Visualiza tu impacto ambiental positivo con métricas detalladas que muestran reducción de huella de carbono, ahorro de agua y logros de prevención de desperdicios.',
          benefits: [
            'Cálculos de huella de carbono en tiempo real',
            'Seguimiento de huella hídrica por ingrediente',
            'Estadísticas y tendencias de reducción de desperdicios',
            'Insignias de logros y celebraciones de hitos',
            'Comparación de impacto comunitario y desafíos'
          ]
        }
      ],
      pricing: {
        title: 'Precios Simples y Transparentes',
        plans: [
          {
            name: 'Principiante',
            price: 'GRATIS',
            features: [
              'Escaneo básico de ingredientes (50/mes)',
              'Seguimiento simple de inventario',
              '5 recetas básicas por semana',
              'Recordatorios básicos de vencimiento',
              'Acceso a la comunidad'
            ]
          },
          {
            name: 'Chef',
            price: '$5.00/mes',
            yearlyPrice: '$50.00/año (Ahorra 17%)',
            featured: true,
            features: [
              'Escaneo ilimitado de ingredientes',
              'Gestión avanzada de inventario',
              'Generación ilimitada de recetas IA',
              'Calendario inteligente de planificación de comidas',
              'Seguimiento detallado de impacto ambiental',
              'Soporte prioritario al cliente',
              'Personalización dietética avanzada',
              'Compartir familiar (hasta 4 miembros)'
            ]
          }
        ]
      },
      testimonials: [
        {
          quote: "ZeroWasteAI transformó completamente cómo enfocamos la cocina. ¡Hemos reducido nuestro desperdicio de alimentos en 60% y descubierto recetas increíbles que nunca habríamos probado!",
          author: "María G., Barcelona"
        },
        {
          quote: "Como padre ocupado, esta app es una salvación. ¡Ya no más mirar el refrigerador preguntándome qué cocinar!",
          author: "Carlos R., México DF"
        },
        {
          quote: "La función de seguimiento ambiental me mantiene motivada. Saber que estoy haciendo una diferencia real se siente increíble.",
          author: "Ana L., Madrid"
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <img src="/icon.svg" alt="ZeroWasteAI Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
                <div className="text-xl sm:text-2xl font-bold text-[var(--primary-green)]">
                  ZeroWasteAI
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#features" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 text-sm font-medium transition-colors">
                  {currentContent.nav.features}
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 text-sm font-medium transition-colors">
                  {currentContent.nav.howItWorks}
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 text-sm font-medium transition-colors">
                  {currentContent.nav.pricing}
                </a>
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
                </button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <button className="btn-primary text-sm px-4 py-2">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                {currentContent.nav.download}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[var(--primary-green)] p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Abrir menú de navegación"
              >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu md:hidden ${isMenuOpen ? 'open' : ''}`}>
          <div className="px-4 py-6 space-y-4 bg-white border-b border-gray-200">
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-[var(--primary-green)] py-3 text-base font-medium transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faSearch} className="mr-3 text-[var(--primary-green)]" />
              {currentContent.nav.features}
            </a>
            <a 
              href="#how-it-works" 
              className="block text-gray-700 hover:text-[var(--primary-green)] py-3 text-base font-medium transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUtensils} className="mr-3 text-[var(--primary-green)]" />
              {currentContent.nav.howItWorks}
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-700 hover:text-[var(--primary-green)] py-3 text-base font-medium transition-colors border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[var(--primary-green)]" />
              {currentContent.nav.pricing}
            </a>
            <button
              onClick={() => {
                setLanguage(language === 'es' ? 'en' : 'es');
                setIsMenuOpen(false);
              }}
              className="block text-gray-700 hover:text-[var(--primary-green)] py-3 text-base font-medium transition-colors w-full text-left border-b border-gray-100"
            >
              {language === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
            </button>
            <div className="pt-4">
              <button 
                className="btn-primary w-full text-center py-4 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                {currentContent.nav.download}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green-light)] via-white to-[var(--accent-blue)]/10"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#00B894" fill-opacity="0.03"><circle cx="30" cy="30" r="4"/></g></g></svg>')}")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-[fadeInUp_0.8s_ease-out] leading-tight">
              {currentContent.hero.title}
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--primary-green)] font-semibold mb-4 sm:mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both] px-2">
              {currentContent.hero.subtitle}
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.4s_both] px-2">
              {currentContent.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both] px-4">
              <button className="btn-primary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <FontAwesomeIcon icon={faAppleBrand} className="mr-2" />
                {currentContent.hero.downloadIOS}
              </button>
              <button className="btn-primary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                {currentContent.hero.downloadAndroid}
              </button>
              <button className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                {currentContent.hero.watchDemo}
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 animate-[fadeInUp_0.8s_ease-out_0.8s_both] px-4">
              {currentContent.hero.trustedBy}
            </p>
          </div>
          
          <div className="mt-8 sm:mt-12 lg:mt-16 relative">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-auto sm:w-56 lg:w-64 rounded-2xl sm:rounded-3xl shadow-2xl animate-[float_3s_ease-in-out_infinite] overflow-hidden">
                  <img 
                    src="/app-screenshots/Home_.png.png" 
                    alt="ZeroWasteAI App Home Screen"
                    className="w-full h-auto rounded-2xl sm:rounded-3xl"
                  />
                </div>
                
                {/* Floating elements - responsive sizes */}
                <div className="absolute -top-2 -left-4 sm:-top-4 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center text-white animate-[float_2s_ease-in-out_infinite_0.5s] shadow-lg">
                  <FontAwesomeIcon icon={faCarrot} className="text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white animate-[float_2.5s_ease-in-out_infinite_1s] shadow-lg">
                  <FontAwesomeIcon icon={faPepperHot} className="text-xs sm:text-sm lg:text-base" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white animate-[float_2.2s_ease-in-out_infinite_1.5s] shadow-lg">
                  <FontAwesomeIcon icon={faLeaf} className="text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center text-white animate-[float_1.8s_ease-in-out_infinite_2s] shadow-lg">
                  <FontAwesomeIcon icon={faLemon} className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {currentContent.problem.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
              {currentContent.problem.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentContent.problem.painPoints.map((point, index) => {
                const icons = [faTrash, faClock, faQuestionCircle, faMobile, faGlobe];
                return (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="text-red-500 mb-3 sm:mb-4">
                      <FontAwesomeIcon icon={icons[index]} className="text-2xl sm:text-3xl" />
                    </div>
                    <p className="text-red-700 font-medium text-sm sm:text-base">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-12 sm:py-16 px-4 bg-[var(--primary-green-light)]">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {currentContent.solution.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
              {currentContent.solution.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {currentContent.solution.steps.map((step, index) => (
                <div key={index} className="text-center reveal-on-scroll">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg hover:shadow-xl transition-shadow text-[var(--primary-green)]">
                    <FontAwesomeIcon icon={step.icon} className="text-xl sm:text-2xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base px-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 px-4 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {language === 'es' ? 'Características Poderosas para Cocina Inteligente' : 'Powerful Features for Smart Cooking'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              {language === 'es' 
                ? 'Descubre cómo nuestras características impulsadas por IA trabajan juntas para eliminar el desperdicio de alimentos y mejorar tu experiencia culinaria.'
                : 'Discover how our AI-powered features work together to eliminate food waste and enhance your culinary experience.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="feature-card reveal-on-scroll">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="feature-icon w-12 h-12 sm:w-16 sm:h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 transition-transform duration-300">
                    <FontAwesomeIcon icon={feature.icon} className="text-base sm:text-lg" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{feature.description}</p>
                
                <ul className="space-y-2 sm:space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-gray-700 text-sm sm:text-base">
                      <FontAwesomeIcon icon={faCheck} className="text-[var(--primary-green)] mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              📱 {language === 'es' ? 'Mira ZeroWasteAI en Acción' : 'See ZeroWasteAI in Action'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              {language === 'es' 
                ? 'Descubre cómo nuestra aplicación transforma la gestión de alimentos con tecnología de vanguardia'
                : 'Discover how our app transforms food management with cutting-edge technology'
              }
            </p>
          </div>

          {/* Main Feature Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Food Scanning */}
            <div className="text-center reveal-on-scroll group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="/app-screenshots/Escaneo de comidas.png" 
                  alt="Food Scanning Feature"
                  className="w-full h-auto max-w-xs mx-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {language === 'es' ? 'Escaneo Inteligente' : 'Smart Scanning'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Reconocimiento instantáneo de alimentos con IA' : 'Instant AI-powered food recognition'}
              </p>
            </div>

            {/* Inventory Management */}
            <div className="text-center reveal-on-scroll group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="/app-screenshots/Inventario.png" 
                  alt="Inventory Management"
                  className="w-full h-auto max-w-xs mx-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {language === 'es' ? 'Gestión de Inventario' : 'Inventory Management'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Control total de tus ingredientes y fechas' : 'Complete control of your ingredients and dates'}
              </p>
            </div>

            {/* Impact Dashboard */}
            <div className="text-center reveal-on-scroll group md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img 
                  src="/app-screenshots/Panel impact.png" 
                  alt="Environmental Impact Dashboard"
                  className="w-full h-auto max-w-xs mx-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {language === 'es' ? 'Impacto Ambiental' : 'Environmental Impact'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'es' ? 'Visualiza tu contribución al planeta' : 'Visualize your contribution to the planet'}
              </p>
            </div>
          </div>

          {/* Onboarding Flow */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl reveal-on-scroll">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                🚀 {language === 'es' ? 'Configuración Súper Fácil' : 'Super Easy Setup'}
              </h3>
              <p className="text-gray-600">
                {language === 'es' ? 'Solo 3 pasos para empezar a reducir desperdicio' : 'Just 3 steps to start reducing waste'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50 p-3 mb-4 transform transition-all duration-300 hover:scale-105">
                  <img 
                    src="/app-screenshots/Onboarding-2.png" 
                    alt="Setup Preferences"
                    className="w-full h-auto max-w-[200px] mx-auto rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">1</div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'es' ? 'Preferencias' : 'Preferences'}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Configura tus alergias y preferencias' : 'Set your allergies and preferences'}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50 p-3 mb-4 transform transition-all duration-300 hover:scale-105">
                  <img 
                    src="/app-screenshots/Onboarding-3.png" 
                    alt="Cooking Level"
                    className="w-full h-auto max-w-[200px] mx-auto rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-[var(--accent-blue)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">2</div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'es' ? 'Nivel de Cocina' : 'Cooking Level'}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Dinos tu experiencia culinaria' : 'Tell us your culinary experience'}
                </p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50 p-3 mb-4 transform transition-all duration-300 hover:scale-105">
                  <img 
                    src="/app-screenshots/Onboarding-4.png" 
                    alt="Food Types"
                    className="w-full h-auto max-w-[200px] mx-auto rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">3</div>
                  <h4 className="font-semibold text-gray-900">
                    {language === 'es' ? 'Tipos de Comida' : 'Food Types'}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Selecciona tus alimentos favoritos' : 'Select your favorite foods'}
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-full">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-700 font-medium text-sm">
                  {language === 'es' ? '¡Listo! Empieza a escanear alimentos' : 'Ready! Start scanning food'}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
            <div className="text-center reveal-on-scroll group">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="/app-screenshots/Comidas reconocidas.png" 
                  alt="Recognized Foods"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
                {language === 'es' ? 'Reconocimiento' : 'Recognition'}
              </p>
            </div>

            <div className="text-center reveal-on-scroll group">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="/app-screenshots/Dietas.png" 
                  alt="Diet Management"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
                {language === 'es' ? 'Dietas' : 'Diets'}
              </p>
            </div>

            <div className="text-center reveal-on-scroll group">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="/app-screenshots/Alergia.png" 
                  alt="Allergy Detection"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
                {language === 'es' ? 'Alergias' : 'Allergies'}
              </p>
            </div>

            <div className="text-center reveal-on-scroll group">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img 
                  src="/app-screenshots/Perfil.png" 
                  alt="User Profile"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">
                {language === 'es' ? 'Perfil' : 'Profile'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {currentContent.pricing.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {currentContent.pricing.plans.map((plan, index) => (
              <div key={index} className={`pricing-card reveal-on-scroll ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-[var(--primary-green)] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {language === 'es' ? 'Más Popular' : 'Most Popular'}
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{plan.name}</h3>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.yearlyPrice && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{plan.yearlyPrice}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-700 text-sm sm:text-base">
                        <FontAwesomeIcon icon={faCheck} className="text-[var(--primary-green)] mr-2 sm:mr-3 text-xs sm:text-sm flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`${plan.featured ? 'btn-primary' : 'btn-secondary'} w-full text-sm sm:text-base`}>
                    {language === 'es' ? 'Comenzar' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-6 sm:mt-8 text-xs sm:text-sm px-4">
            {language === 'es' 
              ? 'Todos los planes incluyen prueba gratuita de 7 días | Sin compromisos | Cancela en cualquier momento'
              : 'All plans include 7-day free trial | No commitments | Cancel anytime'
            }
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              🏆 {language === 'es' ? 'Confiado por Miles de Usuarios Felices' : 'Trusted by Thousands of Happy Users'}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--primary-green)]">10,000+</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">{language === 'es' ? 'Usuarios Activos' : 'Active Users'}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--primary-green)]">95%</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">{language === 'es' ? 'Satisfacción del Usuario' : 'User Satisfaction'}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--primary-green)]">$50,000+</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">{language === 'es' ? 'Ahorrado Mensualmente' : 'Saved Monthly'}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--primary-green)]">125 Tons</div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base">{language === 'es' ? 'CO2 Reducido' : 'CO2 Reduced'}</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 reveal-on-scroll hover:shadow-lg transition-shadow">
                <div className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-[var(--primary-green)] font-medium text-sm sm:text-base">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-[var(--primary-green)] text-white">
        <div className="container-responsive max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            {language === 'es' ? '¿Listo para Transformar tu Cocina?' : 'Ready to Transform Your Kitchen?'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-4">
            {language === 'es' 
              ? 'Únete a miles de familias que ya están ahorrando dinero y protegiendo el medio ambiente con ZeroWasteAI.'
              : 'Join thousands of families already saving money and protecting the environment with ZeroWasteAI.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-[var(--primary-green)] hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base">
              <FontAwesomeIcon icon={faAppleBrand} className="mr-2" />
              {currentContent.hero.downloadIOS}
            </button>
            <button className="bg-white text-[var(--primary-green)] hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base">
              <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
              {currentContent.hero.downloadAndroid}
            </button>
          </div>
          
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm opacity-75 px-4">
            {language === 'es' 
              ? 'Comienza tu prueba gratuita de 7 días hoy. No se requiere tarjeta de crédito.'
              : 'Start your 7-day free trial today. No credit card required.'
            }
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-[var(--primary-green)] mb-3 sm:mb-4">
                ZeroWasteAI
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                {language === 'es' 
                  ? 'Reducción de desperdicio alimentario impulsada por IA para un futuro sostenible.'
                  : 'AI-powered food waste reduction for a sustainable future.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{language === 'es' ? 'Producto' : 'Product'}</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#features" className="hover:text-white transition-colors">{currentContent.nav.features}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{currentContent.nav.pricing}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'es' ? 'Descargar' : 'Download'}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{language === 'es' ? 'Soporte' : 'Support'}</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a 
                    href="/help" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span>{language === 'es' ? 'Centro de Ayuda' : 'Help Center'}</span>
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span>{language === 'es' ? 'Contáctanos' : 'Contact Us'}</span>
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{language === 'es' ? 'Legal' : 'Legal'}</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a 
                    href="/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span>{language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}</span>
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span>{language === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}</span>
                    <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{language === 'es' ? 'Conectar' : 'Connect'}</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <FontAwesomeIcon icon={faInstagram} className="mr-2 text-sm" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <FontAwesomeIcon icon={faTwitter} className="mr-2 text-sm" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-sm" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">&copy; 2025 ZeroWasteAI. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}