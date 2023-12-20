import axios from 'axios'

const baseURL = 'https://gist.githubusercontent.com/Miserlou/'

// axios 實例
const instance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// 請求攔截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 回應攔截器
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 404) return errorAlert('404 not found! 查無此資料')
    if (error.response.status === 500) return errorAlert('伺服器異常!!!')
    return Promise.reject(error)
  }
)

// 取得數據
export const getData = () => {
  return instance.get(
    'c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  )
}
