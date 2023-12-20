import xss from 'xss'

/**
 * 白名單
 * @returns 白名單
 */
const whiteList = () => {
  const whiteListMap = { ...(xss as any).whiteList }
  Object.keys(whiteListMap).forEach((keyName) => {
    // 把全部的標籤 attr 變成只剩下 style 可用
    whiteListMap[keyName] = ['style']
  })
  return whiteListMap
}

/**
 * XSS設定值
 * @param {string} content - 輸入內容
 * @returns XSS攔截方法
 */
const xssParse = (content: string) => {
  return xss(content, {
    whiteList: whiteList(),
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script'] // script 全面禁止
  })
}

export const filterXss = (content: string) => xssParse(content)
