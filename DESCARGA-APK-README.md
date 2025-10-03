# Descarga Automática de APK - Instrucciones

## Ruta Creada: `/app-android`

### ¿Qué hace?
- Cuando un usuario visita `/app-android`, automáticamente se inicia la descarga del APK de Zer0 Waste AI
- Proporciona una interfaz amigable con opción de descarga manual como respaldo
- Incluye un botón para volver al inicio

### Archivos Creados:

1. **`src/app/app-android/page.tsx`** - Página principal de descarga
2. **`src/app/api/download-apk/route.ts`** - API endpoint que sirve el archivo APK
3. **`public/apk/zer0waste-ai.apk`** - Ubicación donde debe estar tu APK

### Instrucciones de Uso:

1. **Reemplazar el APK de prueba:**
   - Elimina el archivo temporal en `public/apk/zer0waste-ai.apk`
   - Coloca tu APK real con el nombre `zer0waste-ai.apk` en la carpeta `public/apk/`

2. **Probar la funcionalidad:**
   ```bash
   npm run dev
   ```
   Luego visita: http://localhost:3000/app-android

3. **Personalizar (opcional):**
   - Puedes cambiar el nombre del archivo APK editando ambos archivos
   - Modifica el diseño en `page.tsx` si necesitas cambios visuales
   - Ajusta los headers de descarga en la API route si es necesario

### Características:

✅ Descarga automática al visitar la ruta
✅ Botón de descarga manual como respaldo  
✅ Interfaz responsive y atractiva
✅ Validación de existencia del archivo
✅ Manejo de errores apropiado
✅ Headers correctos para archivos APK
✅ Botón para volver al inicio

### Uso en Producción:

Simplemente comparte el link: `tu-dominio.com/app-android`

Los usuarios serán dirigidos a una página donde automáticamente se descargará tu APK.