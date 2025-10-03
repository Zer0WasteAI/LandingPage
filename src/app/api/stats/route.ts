import { NextRequest, NextResponse } from 'next/server';
import { kpisLast30Days, wasteReductionSeries } from '@/lib/queries';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    // Ejecutar queries en paralelo
    const [kpis, series] = await Promise.all([
      kpisLast30Days(),
      wasteReductionSeries(),
    ]);

    return NextResponse.json(
      {
        ok: true,
        kpis,
        series,
      },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching stats:', error);

    return NextResponse.json(
      {
        ok: false,
        error: 'Failed to fetch statistics',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  }
}
