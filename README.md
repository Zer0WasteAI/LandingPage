# 🌱 ZeroWasteAI Landing Page

Una landing page moderna y responsiva para ZeroWasteAI, la aplicación de gestión de alimentos impulsada por IA que ayuda a reducir el desperdicio alimentario hasta un 40%.

## 🚀 Características Principales

### 💻 Tecnología y Stack
- **Framework**: Next.js 15.4.2 con React 19
- **Estilos**: TailwindCSS + CSS personalizado con variables CSS
- **Iconos**: FontAwesome (SVG optimizado)
- **Email**: EmailJS para formulario de contacto
- **TypeScript**: Completamente tipado
- **Responsive**: Mobile-first design

### 🎨 Diseño y UX
- **Diseño responsive**: Optimizado desde 320px hasta desktop
- **Tema personalizado**: Paleta de colores eco-friendly
- **Animaciones**: Efectos de scroll reveal y hover sutiles
- **Tipografía**: Inter font con jerarquía clara
- **Accesibilidad**: Contraste adecuado y navegación por teclado

### 🌐 Internacionalización
- **Idiomas soportados**: Español e Inglés
- **Switching dinámico**: Cambio de idioma sin recargar página
- **Contenido localizado**: Textos, imágenes y CTAs adaptados

## 📱 Páginas y Secciones

### 🏠 Página Principal (`/`)
#### Hero Section
- **CTA principal**: "Descarga gratis y reduce tu desperdicio de alimentos"
- **App preview**: Screenshot principal con elementos flotantes animados
- **Estadísticas**: Reducción de desperdicio, usuarios activos
- **Social proof**: Badges de app stores

#### Sección de Problema
- **Pain points**: 5 problemas principales del desperdicio alimentario
- **Estadísticas**: Datos de impacto ambiental y económico
- **Validación**: Por qué ZeroWasteAI es la solución

#### Características Principales
- **Escaneo inteligente**: Reconocimiento de alimentos con IA
- **Gestión de inventario**: Control de fechas de caducidad
- **Impacto ambiental**: Dashboard de contribución ecológica
- **Screenshots reales**: Capturas de pantalla de la app

#### Cómo Funciona
- **3 pasos simples**: Proceso de configuración
- **Onboarding visual**: Screenshots del proceso paso a paso
- **Beneficios**: Tiempo de configuración < 2 minutos

#### Galería de Funciones
- **Grid responsivo**: 4 funciones adicionales
- **Efectos hover**: Escalado sutil sin superposición de texto
- **Categorías**: Reconocimiento, Dietas, Alergias, Perfil

#### Precios
- **3 planes**: Freemium, Pro, Premium
- **Características destacadas**: Plan Pro marcado como "Más Popular"
- **CTAs claros**: Botones de descarga y upgrade

### 📞 Página de Contacto (`/contact`)
#### Formulario Inteligente
- **Categorización**: 4 tipos de consulta con iconos representativos
- **Validación en tiempo real**: Email, longitud de campos
- **Responsive**: Optimizado para móviles pequeños
- **Fallback**: Apertura de cliente de email si falla EmailJS

#### Información de Contacto
- **Email directo**: zerowasteai4@gmail.com
- **Tiempo de respuesta**: < 24 horas
- **Centro de ayuda**: Links a FAQ rápido

#### Quick Links FAQ
- **4 categorías**: Primeros pasos, Escaneo, Inventario, Cuenta
- **Navegación rápida**: Links directos a /help

### ❓ Página de Ayuda (`/help`)
- **FAQ completo**: Preguntas frecuentes categorizadas
- **Troubleshooting**: Solución de problemas comunes
- **Tutoriales**: Guías paso a paso

### 📄 Páginas Legales
#### Términos y Condiciones (`/terms`)
- **Uso de la app**: Condiciones de servicio
- **Privacidad**: Manejo de datos
- **Restricciones**: Políticas de uso

#### Política de Privacidad (`/privacy`)
- **GDPR compliance**: Cumplimiento de normativas
- **Datos recopilados**: Transparencia total
- **Derechos del usuario**: Acceso, modificación, eliminación

## 🎨 Sistema de Diseño

### 🎨 Paleta de Colores
```css
:root {
  /* Primary Colors */
  --primary-green: #00B894;
  --primary-green-dark: #00A085;
  --primary-green-light: #E8F8F5;
  
  /* Secondary Colors */
  --accent-orange: #F07548;
  --accent-yellow: #FFE066;
  --accent-blue: #4A90E2;
  
  /* Neutral Colors */
  --background-cream: #FAF9F6;
  --card-white: #FFFFFF;
  --text-dark: #3A3A3A;
  --text-medium: #666666;
  --text-light: #999999;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #00B894 0%, #00A085 100%);
  --gradient-hero: linear-gradient(135deg, #00B894 0%, #4A90E2 100%);
  --gradient-card: linear-gradient(145deg, #FFFFFF 0%, #F8F9FA 100%);
}
```

### 📱 Breakpoints Responsivos
```css
/* Extra Small */
@media (min-width: 475px) { /* xs */ }

/* Small */
@media (min-width: 640px) { /* sm */ }

/* Medium */
@media (min-width: 768px) { /* md */ }

/* Large */
@media (min-width: 1024px) { /* lg */ }

/* Extra Large */
@media (min-width: 1280px) { /* xl */ }
```

### 🎭 Componentes Reutilizables

#### Botones
```css
.btn-primary {
  background: var(--gradient-primary);
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 184, 148, 0.3);
  transition: all 0.3s ease;
}

.btn-secondary {
  background: transparent;
  color: var(--primary-green);
  border: 2px solid var(--primary-green);
  border-radius: 12px;
  padding: 14px 30px;
}
```

#### Cards
```css
.feature-card {
  background: var(--gradient-card);
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 40px 32px;
  border: 3px solid transparent;
}
```

## ⚙️ Funcionalidades Técnicas

### 📧 Sistema de Email
- **Proveedor**: EmailJS
- **Templates**: HTML personalizado para auto-respuesta
- **Validación**: Regex para email, longitud de campos
- **Fallback**: mailto: si falla el servicio
- **Categorización**: Mensajes clasificados por tipo

### 🎯 Optimizaciones de Rendimiento
- **Lazy loading**: Imágenes cargadas bajo demanda
- **FontAwesome**: SVG optimizado, no webfonts
- **CSS**: Variables nativas, no preprocessor
- **Images**: WebP cuando sea posible
- **Bundle**: Next.js optimizado automáticamente

### 🌐 SEO y Metadatos
```tsx
export const metadata: Metadata = {
  title: "Zer0 Waste AI",
  description: "AI-powered zero waste solution",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};
```

### 🎨 Animaciones y Micro-interacciones
#### Scroll Reveal
```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

#### Hover Effects
- **Escalado sutil**: `hover:scale-102` en lugar de `hover:scale-105`
- **Z-index controlado**: Texto siempre visible con `z-10`
- **Transiciones suaves**: 300ms para todas las animaciones

## 📂 Estructura del Proyecto

```
landing-page-zer0wasteai/
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx          # Formulario de contacto
│   │   ├── help/
│   │   │   └── page.tsx          # Centro de ayuda
│   │   ├── privacy/
│   │   │   └── page.tsx          # Política de privacidad
│   │   ├── terms/
│   │   │   └── page.tsx          # Términos y condiciones
│   │   ├── globals.css           # Estilos globales y variables
│   │   ├── layout.tsx            # Layout principal
│   │   └── page.tsx              # Página principal
│   └── lib/
│       ├── emailClient.ts        # Cliente EmailJS
│       └── emailService.ts       # Servicio de email
├── public/
│   ├── app-screenshots/          # 25+ capturas de la app
│   └── *.svg                     # Iconos y logos
├── utils/
│   ├── EMAIL_SETUP.md           # Configuración de EmailJS
│   ├── email-templates/         # Templates HTML
│   └── *.md                     # Documentación adicional
└── README.md                    # Este archivo
```

## 🚀 Instalación y Desarrollo

### Prerequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]
cd landing-page-zer0wasteai

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
open http://localhost:3000
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 📱 Responsive Design

### 📏 Optimizaciones Móviles Implementadas

#### 🎯 Dispositivos Objetivo
- **iPhone SE**: 375px (mínimo)
- **Galaxy S8**: 360px
- **iPhone 12/13/14**: 390px
- **Tablets**: 768px+
- **Desktop**: 1024px+

#### 🔧 Ajustes Específicos por Sección

##### Header y Navegación
- **Mobile menu**: Hamburguesa con iconos representativos
- **Logo responsivo**: Tamaño adaptativo
- **CTAs**: Texto abreviado en móvil ("Volver" vs "Volver al inicio")

##### Hero Section
- **Layout**: Stacked en móvil, side-by-side en desktop
- **Imágenes**: Tamaños responsivos con `srcset`
- **Texto**: Jerarquía tipográfica adaptativa

##### Formulario de Contacto
- **Layout**: Sidebar abajo en móvil, lateral en desktop
- **Campos**: Padding y font-size optimizado
- **Categorías**: Grid 1→2→4 columnas según breakpoint
- **Validación**: Mensajes adaptados al espacio

##### Galería de App
- **Hover effects**: Reducidos en móvil para evitar superposición
- **Spacing**: Z-index y márgenes controlados
- **Grid**: Responsive desde 1 hasta 4 columnas

## 🎨 Mejoras de UX Implementadas

### 🎯 Problemas Solucionados

#### ❌ Problema: Superposición de texto en hover
- **Causa**: `hover:scale-105` muy agresivo
- **Solución**: Reducido a `hover:scale-102` + `z-index` controlado
- **Resultado**: Texto siempre legible, animación suave

#### ❌ Problema: Spacing inconsistente
- **Causa**: Márgenes variables entre imagen y texto
- **Solución**: Contenedores separados con `pt-2` y `mb-6`
- **Resultado**: Espaciado uniforme en todas las secciones

#### ❌ Problema: Iconos no representativos en menú
- **Antes**: 🔍 Características, 🍴 Cómo Funciona, 🌐 Precios
- **Después**: 🚀 Características, ⚙️ Cómo Funciona, 💲 Precios
- **Resultado**: Iconos intuitivos y representativos

#### ❌ Problema: Formulario no móvil-friendly
- **Soluciones**:
  - Labels más pequeños en móvil
  - Padding adaptativo en inputs
  - Grid responsivo para categorías
  - Botones con tamaño optimal para touch

#### ❌ Problema: Error de hidratación en Next.js
- **Causa**: CSS inline con `dangerouslySetInnerHTML` en layout
- **Solución**: Movido CSS a `globals.css` 
- **Resultado**: No más errores de hidratación

## 📊 Métricas de Rendimiento

### ⚡ Core Web Vitals Estimados
- **LCP**: < 2.5s (imágenes optimizadas)
- **FID**: < 100ms (JavaScript mínimo)
- **CLS**: < 0.1 (layouts estables)

### 📱 Compatibility
- **iOS Safari**: 12+
- **Chrome Mobile**: 90+
- **Firefox Mobile**: 90+
- **Samsung Internet**: 14+

## 🚀 Próximas Mejoras

### 🎯 Roadmap
- [ ] **PWA**: Service worker para caching
- [ ] **Analytics**: Google Analytics 4 integration
- [ ] **A/B Testing**: Múltiples variaciones de CTAs
- [ ] **Chatbot**: Asistente virtual con IA
- [ ] **Blog**: Sección de contenido SEO
- [ ] **Testimonials**: Reseñas de usuarios reales

### 🎨 Mejoras de UX
- [ ] **Dark mode**: Tema oscuro opcional
- [ ] **Micro-animaciones**: Loading states más sofisticados
- [ ] **Paralax**: Efectos de profundidad en hero
- [ ] **Video backgrounds**: Hero con video de la app

### 🔧 Optimizaciones Técnicas
- [ ] **Image optimization**: Next.js Image component
- [ ] **Font optimization**: Preload crítico
- [ ] **Bundle splitting**: Lazy loading por rutas
- [ ] **CDN**: Cloudflare para assets estáticos

## 📊 Dashboard QA

### 🧪 Guía de Pruebas del Dashboard en Tiempo Real

El dashboard (`/dashboard`) implementa actualizaciones en tiempo real usando Firebase Firestore y muestra métricas de impacto de los últimos 30 días.

#### Prerequisitos
1. **Configurar variables de entorno** en `.env.local`:
   ```env
   # Firebase Client (NEXT_PUBLIC_*)
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

   # Firebase Admin SDK
   FIREBASE_ADMIN_PROJECT_ID=your-project-id
   FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk@your-project.iam.gserviceaccount.com
   FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```

2. **Desplegar índices de Firestore**:
   ```bash
   firebase deploy --only firestore:indexes
   ```

3. **Instalar dependencias** (si no lo has hecho):
   ```bash
   npm install
   ```

#### 🚀 Paso 1: Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```

Visita `http://localhost:3000/dashboard`

**Nota**: Si tu app implementa autenticación, asegúrate de tener una sesión válida (cookie `zwa_session` u otra) o comenta temporalmente el middleware de autenticación en `/middleware.ts`.

#### 🔴 Paso 2: Prueba de Actualización Live - Reconocimientos en Tiempo Real

**Objetivo**: Verificar que el contador de "Reconocimientos" se actualice automáticamente sin recargar la página.

1. **Estado inicial**: Observa el valor actual del KPI "Reconocimientos" en el dashboard
2. **Insertar documento manualmente** en Firestore:
   - Ve a Firebase Console → Firestore Database
   - Colección: `recognition_results`
   - Agregar documento con estos campos:
     ```json
     {
       "created_at": [Timestamp NOW],
       "user_email": "test@example.com",
       "items_detected": 3,
       "confidences": [0.95, 0.88, 0.92]
     }
     ```
3. **Verificación**:
   - ✅ El contador de "Reconocimientos" debe incrementarse automáticamente
   - ✅ El documento aparece en la lista de "Reconocimientos Recientes" al final de la página
   - ✅ Muestra: email, tiempo relativo ("hace X minutos"), cantidad de alimentos, confianza promedio

**Resultado esperado**: Actualización instantánea sin F5 gracias a `onSnapshot`.

#### 🟢 Paso 3: Prueba de Serie Temporal - Reducción de Desperdicio

**Objetivo**: Verificar que los datos históricos se reflejan en el gráfico de líneas.

1. **Crear/modificar batch consumido** en Firestore:
   - Navega a cualquier documento de usuario en `users/{userId}/inventory/{itemId}/batches/{batchId}`
   - O crea manualmente:
     ```json
     {
       "status": "CONSUMED",
       "quantity": 500,
       "unit": "g",
       "updated_at": [Timestamp de ayer]
     }
     ```

2. **Recargar datos**:
   - Presiona F5 en el dashboard o espera el próximo fetch automático
   - O llama directamente a `http://localhost:3000/api/stats` en el navegador

3. **Verificación**:
   - ✅ El KPI "Kg Salvados" debe reflejar la conversión (500g = 0.5kg)
   - ✅ El gráfico de "Reducción de Desperdicio (30 días)" muestra un punto en la fecha del batch
   - ✅ El tooltip del gráfico muestra la fecha correcta y el valor en kg

#### 🟡 Paso 4: Prueba de Aprovechamiento

**Objetivo**: Validar el cálculo del porcentaje de aprovechamiento.

1. **Crear batches con diferentes estados**:
   - 7 batches con `status: "CONSUMED"`
   - 3 batches con `status: "EXPIRED"`
   - Todos con `updated_at` en los últimos 30 días

2. **Resultado esperado**:
   - Aprovechamiento = (7 / (7+3)) × 100 = **70.0%**

3. **Verificación**:
   - ✅ El KPI "Aprovechamiento" muestra "70.0%"
   - ✅ El hint indica "Consumido vs. expirado"

#### 🔵 Paso 5: Prueba de Colecciones Anidadas (Collection Groups)

**Objetivo**: Verificar que las queries `collectionGroup` funcionan correctamente.

1. **Estructura esperada**:
   ```
   users/{userId}/inventory/{itemId}/batches/{batchId}
   users/{userId}/recipes/{recipeId}
   ```

2. **Datos de prueba para recipes**:
   ```json
   {
     "isCooked": true,
     "createdAt": [Timestamp últimos 30 días],
     "co2Saved": 2.5,
     "waterSaved": 150,
     "landSaved": 0.8
   }
   ```

3. **Verificación**:
   - ✅ El KPI "CO₂ Evitado" suma todos los valores de `co2Saved`
   - ✅ Los valores se actualizan correctamente tras agregar/modificar recipes

#### 🧹 Limpieza de Datos de Prueba

Después de las pruebas, elimina los documentos de prueba:
```bash
# Opción 1: Desde Firebase Console
# Opción 2: Script de limpieza (crear según necesidad)
```

#### ⚠️ Errores Comunes

**Error: "Missing required index"**
- **Solución**: Ejecuta `firebase deploy --only firestore:indexes`
- O crea manualmente desde Firebase Console → Firestore → Indexes

**Error: "Firebase Admin not initialized"**
- **Solución**: Verifica que las variables `FIREBASE_ADMIN_*` estén correctamente configuradas
- Revisa que `FIREBASE_ADMIN_PRIVATE_KEY` incluya los saltos de línea escapados (`\n`)

**Dashboard muestra 0 en todos los KPIs**
- **Causa**: No hay datos en los últimos 30 días o las queries no encuentran documentos
- **Solución**: Verifica que existan documentos con `created_at` o `updated_at` recientes

**Gráfico aparece vacío**
- **Causa**: No hay batches con `status: "CONSUMED"` en los últimos 30 días
- **Solución**: Inserta datos de prueba según Paso 3

#### 📈 Métricas de Performance

- **Tiempo de carga inicial**: < 2 segundos
- **Actualización live**: < 500ms desde inserción en Firestore
- **API `/api/stats`**: < 3 segundos (depende del volumen de datos)

#### 🔄 Testing Continuo

Para desarrollo continuo:
```bash
# Terminal 1: Servidor Next.js
npm run dev

# Terminal 2: Observa logs de Firestore
# (Opcional) Activa debug en navegador para ver queries en tiempo real
```

## 📞 Contacto y Soporte

### 👨‍💻 Desarrollador
- **Email**: zerowasteai4@gmail.com
- **Tiempo de respuesta**: < 24 horas

### 🐛 Reportar Issues
1. Ir a la página de contacto
2. Seleccionar "Reportar Error"
3. Describir el problema detalladamente
4. Incluir screenshots si es posible

### 💡 Sugerir Mejoras
- Usar el formulario de contacto con categoría "Sugerir Función"
- Ser específico sobre la mejora propuesta
- Explicar el beneficio para el usuario

---

## 📄 Licencia

Este proyecto es privado y pertenece a ZeroWasteAI. Todos los derechos reservados.

---

**Última actualización**: Enero 2025
**Versión**: 1.0.0
**Estado**: ✅ Producción Ready

---

*Hecho con 💚 para reducir el desperdicio alimentario y salvar el planeta* 🌍