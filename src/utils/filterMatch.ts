import type { IDataItem } from '../types/api'

/**
 * 篩選符合關鍵字的資料
 * @param keywords - 關鍵字
 * @param data - 原始數據
 * @returns 篩選後的數據
 */
export const filterMatch = (keywords: string, data: IDataItem[]) => {
  if (!keywords) return []
  if (data.length === 0) return []
  const keywordsToUpperCase = keywords.toUpperCase()
  return data.filter((item) => {
    return (
      item.city.toUpperCase().includes(keywordsToUpperCase) ||
      item.state.toUpperCase().includes(keywordsToUpperCase)
    )
  })
}
