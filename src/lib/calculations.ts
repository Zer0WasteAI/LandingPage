/**
 * Convierte una cantidad de diferentes unidades a kilogramos
 * @param qty - Cantidad a convertir
 * @param unit - Unidad de medida
 * @returns Cantidad en kilogramos
 */
export function convertToKg(
  qty: number,
  unit: 'g' | 'kg' | 'ml' | 'l' | 'unit'
): number {
  switch (unit) {
    case 'g':
      return qty / 1000;
    case 'kg':
      return qty;
    case 'ml':
      return qty / 1000; // Asumiendo densidad del agua (1 ml ≈ 1 g)
    case 'l':
      return qty; // Asumiendo densidad del agua (1 l ≈ 1 kg)
    case 'unit':
      return qty * 0.1; // Peso promedio estimado por unidad: 100g
    default:
      return qty;
  }
}

/**
 * Calcula el porcentaje de aprovechamiento de productos
 * @param consumedCount - Número de productos consumidos
 * @param expiredCount - Número de productos expirados/desperdiciados
 * @returns Porcentaje de aprovechamiento (0-100) con 1 decimal
 */
export function aprovechamiento(
  consumedCount: number,
  expiredCount: number
): number {
  const total = consumedCount + expiredCount;

  if (total === 0) {
    return 0;
  }

  const percentage = (consumedCount / total) * 100;
  return Number(percentage.toFixed(1));
}
