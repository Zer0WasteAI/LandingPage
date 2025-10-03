'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: 'Descargar App - Zer0 Waste AI',
  description: 'Descarga la aplicación móvil de Zer0 Waste AI para Android',
};

export default function AppAndroidPage() {
  const router = useRouter();

  useEffect(() => {
    // Iniciar descarga automática del APK
    const downloadAPK = () => {
      // Crear un enlace temporal para descargar el APK
      const link = document.createElement('a');
      link.href = '/api/download-apk';
      link.download = 'zer0waste-ai.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Esperar un momento antes de iniciar la descarga
    const timer = setTimeout(() => {
      downloadAPK();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualDownload = () => {
    const link = document.createElement('a');
    link.href = '/api/download-apk';
    link.download = 'zer0waste-ai.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Descarga Zer0 Waste AI
          </h1>
          <p className="text-gray-600">
            Tu descarga comenzará automáticamente en unos segundos
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          </div>
          <p className="text-sm text-gray-500">
            Preparando descarga...
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleManualDownload}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Descargar Manualmente
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Volver al Inicio
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Compatible con Android 5.0 o superior
          </p>
        </div>
      </div>
    </div>
  );
}