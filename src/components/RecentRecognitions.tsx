'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface RecognitionItem {
  id: string;
  userEmail?: string;
  createdAt: Date;
  itemsDetected: number;
  avgConfidence?: number;
  summary?: string;
}

export default function RecentRecognitions() {
  const [recognitions, setRecognitions] = useState<RecognitionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Solo suscribirse si Firebase está configurado
    if (!isFirebaseConfigured || !db) {
      console.warn('Firebase client not configured. Recent recognitions disabled.');
      setLoading(false);
      return;
    }

    try {
      const q = query(
        collection(db, 'recognition_results'),
        orderBy('created_at', 'desc'),
        limit(10)
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items: RecognitionItem[] = [];

          snapshot.forEach((doc) => {
            const data = doc.data();

            // Parse items detected and confidence
            const itemsDetected = data.items_detected || data.detected_items?.length || 0;
            const confidences = data.confidences || [];
            const avgConfidence =
              confidences.length > 0
                ? confidences.reduce((a: number, b: number) => a + b, 0) / confidences.length
                : undefined;

            items.push({
              id: doc.id,
              userEmail: data.user_email || data.email || 'Usuario anónimo',
              createdAt: data.created_at?.toDate() || new Date(),
              itemsDetected,
              avgConfidence,
              summary: data.recognition_summary || data.result_data?.recognition_summary,
            });
          });

          setRecognitions(items);
          setLoading(false);
        },
        (error) => {
          console.error('Error fetching recent recognitions:', error);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (error) {
      console.error('Failed to setup recognitions subscription:', error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-20 animate-pulse rounded-lg bg-gray-200"
          ></div>
        ))}
      </div>
    );
  }

  if (recognitions.length === 0) {
    const message = !isFirebaseConfigured || !db
      ? 'Actualizaciones en tiempo real no disponibles (Firebase client no configurado)'
      : 'No hay reconocimientos recientes';

    return (
      <div className="py-12 text-center text-gray-500">
        {message}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {recognitions.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">
                {item.userEmail}
              </span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(item.createdAt, {
                  addSuffix: true,
                  locale: es,
                })}
              </span>
            </div>
            {item.summary && (
              <p className="mt-1 text-xs text-gray-600">{item.summary}</p>
            )}
            <div className="mt-1 flex gap-4 text-xs text-gray-500">
              <span>{item.itemsDetected} alimentos detectados</span>
              {item.avgConfidence && (
                <span>
                  Confianza: {(item.avgConfidence * 100).toFixed(1)}%
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
