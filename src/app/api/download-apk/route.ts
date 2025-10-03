import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Ruta al archivo APK en el directorio public
    const apkPath = path.join(process.cwd(), 'public', 'apk', 'zer0waste-ai.apk');
    
    // Verificar si el archivo existe
    try {
      await fs.access(apkPath);
    } catch (error) {
      return new NextResponse('APK file not found', { 
        status: 404,
        statusText: 'APK no encontrado' 
      });
    }

    // Leer el archivo
    const fileBuffer = await fs.readFile(apkPath);
    
    // Configurar headers para la descarga
    const headers = new Headers();
    headers.set('Content-Type', 'application/vnd.android.package-archive');
    headers.set('Content-Disposition', 'attachment; filename="zer0waste-ai.apk"');
    headers.set('Content-Length', fileBuffer.length.toString());
    
    // Opcional: headers adicionales para mejorar la descarga
    headers.set('Cache-Control', 'no-cache');
    headers.set('Accept-Ranges', 'bytes');

    return new NextResponse(fileBuffer.buffer as ArrayBuffer, {
      status: 200,
      headers,
    });
    
  } catch (error) {
    console.error('Error serving APK file:', error);
    return new NextResponse('Error interno del servidor', { 
      status: 500,
      statusText: 'Error al descargar el APK' 
    });
  }
}