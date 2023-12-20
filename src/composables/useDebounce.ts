export const useDebounce = () => {
  const timer = ref<ReturnType<typeof setTimeout>>()
  /**
   * 防抖函數
   * @param fn 要執行的函數
   * @param delay 延遲時間
   */
  const debounce = (fn: Function, delay = 500) => {
    clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      fn()
    }, delay)
  }
  return { debounce }
}
