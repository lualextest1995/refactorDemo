export const useCached = (fn: Function, max = 20) => {
  const cache = ref<Record<string, any>>({})

  /**
   * 快取函數
   * @param fn 執行的函數
   * @param max 快取上限
   * @returns 函數執行結果
   */
  const cached = (...args: any[]) => {
    const key = JSON.stringify(args)
    if (key in cache.value) {
      console.log('已在快取裡')
      return cache.value[key]
    }
    const value = fn(...args)
    cache.value[key] = value
    console.log('加入快取')
    if (Object.entries(cache.value).length > max) {
      console.log('超過快取上限，刪除最舊的')
      cache.value = Object.fromEntries(
        Object.entries(cache.value).filter((_, index) => index !== 0)
      )
    }
    return value
  }

  return { cache, cached }
}
