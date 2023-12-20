/**
 * 轉換千分位
 * @param data - 原始數據
 * @returns 轉換後的數據
 */
export const thousandthConverter = (data: any) => {
  if (isNaN(data)) return 0
  return new Intl.NumberFormat().format(data)
}
