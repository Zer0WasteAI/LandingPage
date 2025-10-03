'use client';

import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, Timestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { startOfDay } from 'date-fns';
import KpiCard from '@/components/KpiCard';
import ChartShell from '@/components/ChartShell';
import RecentRecognitions from '@/components/RecentRecognitions';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface KPIData {
  since: string;
  recognitionsCompleted: number;
  kgSaved: number;
  co2: number;
  water: number;
  land: number;
  aprovechamiento: number;
}

interface WasteReductionPoint {
  date: string;
  kgSaved: number;
}

interface StatsResponse {
  ok: boolean;
  kpis: KPIData;
  series: WasteReductionPoint[];
}

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [kpis, setKpis] = useState<KPIData | null>(null);
  const [series, setSeries] = useState<WasteReductionPoint[]>([]);
  const [liveRecognitionsCount, setLiveRecognitionsCount] = useState(0);

  // Fetch stats from API
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/stats', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }

        const data: StatsResponse = await response.json();

        if (data.ok) {
          setKpis(data.kpis);
          setSeries(data.series);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  // Live subscription to recognition_results since today 00:00
  useEffect(() => {
    // Solo suscribirse si Firebase está configurado
    if (!isFirebaseConfigured || !db) {
      console.warn('Firebase client not configured. Live updates disabled.');
      return;
    }

    try {
      const startOfToday = startOfDay(new Date());
      const startOfTodayTimestamp = Timestamp.fromDate(startOfToday);

      const q = query(
        collection(db, 'recognition_results'),
        where('created_at', '>=', startOfTodayTimestamp)
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          setLiveRecognitionsCount(snapshot.size);
        },
        (error) => {
          console.error('Error listening to recognition_results:', error);
        }
      );

      return () => unsubscribe();
    } catch (error) {
      console.error('Failed to setup live subscription:', error);
    }
  }, []);

  // Skeleton loader
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="h-8 w-64 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-32 animate-pulse rounded-lg bg-gray-200"
              ></div>
            ))}
          </div>
          <div className="mt-8 h-80 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    );
  }

  // Use live count if available and greater than static count
  const displayRecognitions =
    liveRecognitionsCount > 0 && kpis
      ? Math.max(liveRecognitionsCount, kpis.recognitionsCompleted)
      : kpis?.recognitionsCompleted ?? 0;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Dashboard de Impacto
        </h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Reconocimientos"
            value={displayRecognitions}
            hint="Últimos 30 días"
          />
          <KpiCard
            label="Kg Salvados"
            value={`${kpis?.kgSaved ?? 0} kg`}
            hint="Productos consumidos"
          />
          <KpiCard
            label="CO₂ Evitado"
            value={`${kpis?.co2 ?? 0} kg`}
            hint="Impacto ambiental"
          />
          <KpiCard
            label="Aprovechamiento"
            value={`${kpis?.aprovechamiento ?? 0}%`}
            hint="Consumido vs. expirado"
          />
        </div>

        {/* Waste Reduction Chart */}
        <div className="mt-8">
          <ChartShell title="Reducción de Desperdicio (30 días)">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={series}>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getMonth() + 1}/${date.getDate()}`;
                  }}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  labelFormatter={(value) => `Fecha: ${value}`}
                  formatter={(value: number) => [`${value} kg`, 'Kg Salvados']}
                />
                <Line
                  type="monotone"
                  dataKey="kgSaved"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartShell>
        </div>

        {/* Recent Recognitions */}
        <div className="mt-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Reconocimientos Recientes
            </h3>
            <RecentRecognitions />
          </div>
        </div>
      </div>
    </div>
  );
}
