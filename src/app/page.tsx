'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('en');
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
          { icon: '📸', title: 'Scan', description: 'Point your camera at ingredients - our AI instantly recognizes them' },
          { icon: '📋', title: 'Track', description: 'Digital inventory automatically tracks expiration dates and quantities' },
          { icon: '🍳', title: 'Cook', description: 'Get personalized recipes using ingredients you already have' },
          { icon: '🌱', title: 'Impact', description: 'Monitor your environmental savings and celebrate achievements' }
        ]
      },
      features: [
        {
          icon: '🔍',
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
          icon: '📦',
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
          icon: '🍳',
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
          icon: '🌱',
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
            price: '$9.99/month',
            yearlyPrice: '$99.99/year (Save 17%)',
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
          },
          {
            name: 'Household',
            price: '$16.99/month',
            yearlyPrice: '$179.99/year (Save 12%)',
            features: [
              'Everything in Chef Plus:',
              'Up to 8 family members',
              'Shared shopping lists',
              'Household impact dashboard',
              'Bulk recipe planning',
              'Advanced meal coordination'
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
          { icon: '📸', title: 'Escanear', description: 'Apunta tu cámara a los ingredientes - nuestra IA los reconoce instantáneamente' },
          { icon: '📋', title: 'Rastrear', description: 'El inventario digital rastrea automáticamente fechas de vencimiento y cantidades' },
          { icon: '🍳', title: 'Cocinar', description: 'Obtén recetas personalizadas usando ingredientes que ya tienes' },
          { icon: '🌱', title: 'Impacto', description: 'Monitorea tus ahorros ambientales y celebra logros' }
        ]
      },
      // Translated features, pricing, and testimonials would be here
      features: [
        {
          icon: '🔍',
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
          icon: '📦',
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
          icon: '🍳',
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
          icon: '🌱',
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
            price: '$9.99/mes',
            yearlyPrice: '$99.99/año (Ahorra 17%)',
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
          },
          {
            name: 'Hogar',
            price: '$16.99/mes',
            yearlyPrice: '$179.99/año (Ahorra 12%)',
            features: [
              'Todo en Chef Más:',
              'Hasta 8 miembros de la familia',
              'Listas de compras compartidas',
              'Panel de impacto del hogar',
              'Planificación de recetas en lote',
              'Coordinación avanzada de comidas'
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
              <div className="text-2xl font-bold text-[var(--primary-green)]">
                ZeroWasteAI
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
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
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="text-gray-700 hover:text-[var(--primary-green)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
                </button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <button className="btn-primary">
                {currentContent.nav.download}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green-light)] via-white to-[var(--accent-blue)]/10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-[fadeInUp_0.8s_ease-out]">
              {currentContent.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--primary-green)] font-semibold mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {currentContent.hero.subtitle}
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              {currentContent.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <button className="btn-primary text-lg px-8 py-4">
                📱 {currentContent.hero.downloadIOS}
              </button>
              <button className="btn-primary text-lg px-8 py-4">
                🤖 {currentContent.hero.downloadAndroid}
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                ▶️ {currentContent.hero.watchDemo}
              </button>
            </div>
            
            <p className="text-sm text-gray-500 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              {currentContent.hero.trustedBy}
            </p>
          </div>
          
          <div className="mt-16 relative">
            <div className="flex justify-center">
              <div className="relative">
                {/* TODO: add image of smartphone mockup showing the app interface with food scanning feature */}
                <div className="w-64 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl flex items-center justify-center animate-[float_3s_ease-in-out_infinite] border border-gray-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <span className="text-gray-600 text-sm">App Screenshot</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-8 w-16 h-16 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center text-2xl animate-[float_2s_ease-in-out_infinite_0.5s] shadow-lg">
                  🥕
                </div>
                <div className="absolute -top-8 -right-4 w-12 h-12 bg-[var(--accent-orange)] rounded-full flex items-center justify-center text-xl animate-[float_2.5s_ease-in-out_infinite_1s] shadow-lg">
                  🍅
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-xl animate-[float_2.2s_ease-in-out_infinite_1.5s] shadow-lg">
                  🥬
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center text-lg animate-[float_1.8s_ease-in-out_infinite_2s] shadow-lg">
                  🍎
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.problem.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              {currentContent.problem.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.problem.painPoints.map((point, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">
                    {['🗑️', '⏰', '🤔', '📱', '🌍'][index]}
                  </div>
                  <p className="text-red-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-16 px-4 bg-[var(--primary-green-light)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.solution.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              {currentContent.solution.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.solution.steps.map((step, index) => (
                <div key={index} className="text-center reveal-on-scroll">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'Powerful Features for Smart Cooking' : 'Características Poderosas para Cocina Inteligente'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Discover how our AI-powered features work together to eliminate food waste and enhance your culinary experience.'
                : 'Descubre cómo nuestras características impulsadas por IA trabajan juntas para eliminar el desperdicio de alimentos y mejorar tu experiencia culinaria.'
              }
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="feature-card reveal-on-scroll">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[var(--primary-green)] rounded-full flex items-center justify-center text-2xl text-white mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.pricing.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.pricing.plans.map((plan, index) => (
              <div key={index} className={`pricing-card reveal-on-scroll ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--primary-green)] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {language === 'en' ? 'Most Popular' : 'Más Popular'}
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.yearlyPrice && (
                      <p className="text-sm text-gray-500 mt-2">{plan.yearlyPrice}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                    {language === 'en' ? 'Get Started' : 'Comenzar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            {language === 'en' 
              ? 'All plans include 7-day free trial | No commitments | Cancel anytime'
              : 'Todos los planes incluyen prueba gratuita de 7 días | Sin compromisos | Cancela en cualquier momento'
            }
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🏆 {language === 'en' ? 'Trusted by Thousands of Happy Users' : 'Confiado por Miles de Usuarios Felices'}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-green)]">10,000+</div>
                <div className="text-gray-600">{language === 'en' ? 'Active Users' : 'Usuarios Activos'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-green)]">95%</div>
                <div className="text-gray-600">{language === 'en' ? 'User Satisfaction' : 'Satisfacción del Usuario'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-green)]">$50,000+</div>
                <div className="text-gray-600">{language === 'en' ? 'Saved Monthly' : 'Ahorrado Mensualmente'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary-green)]">125 Tons</div>
                <div className="text-gray-600">{language === 'en' ? 'CO2 Reduced' : 'CO2 Reducido'}</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 reveal-on-scroll hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-[var(--primary-green)] font-medium">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[var(--primary-green)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready to Transform Your Kitchen?' : '¿Listo para Transformar tu Cocina?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en' 
              ? 'Join thousands of families already saving money and protecting the environment with ZeroWasteAI.'
              : 'Únete a miles de familias que ya están ahorrando dinero y protegiendo el medio ambiente con ZeroWasteAI.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--primary-green)] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors">
              📱 {currentContent.hero.downloadIOS}
            </button>
            <button className="bg-white text-[var(--primary-green)] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors">
              🤖 {currentContent.hero.downloadAndroid}
            </button>
          </div>
          
          <p className="mt-6 text-sm opacity-75">
            {language === 'en' 
              ? 'Start your 7-day free trial today. No credit card required.'
              : 'Comienza tu prueba gratuita de 7 días hoy. No se requiere tarjeta de crédito.'
            }
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[var(--primary-green)] mb-4">
                ZeroWasteAI
              </div>
              <p className="text-gray-400">
                {language === 'en' 
                  ? 'AI-powered food waste reduction for a sustainable future.'
                  : 'Reducción de desperdicio alimentario impulsada por IA para un futuro sostenible.'
                }
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Product' : 'Producto'}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">{currentContent.nav.features}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{currentContent.nav.pricing}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Download' : 'Descargar'}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Support' : 'Soporte'}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Help Center' : 'Centro de Ayuda'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Contact Us' : 'Contáctanos'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{language === 'en' ? 'Connect' : 'Conectar'}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">📷 Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🐦 Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">💼 LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZeroWasteAI. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}