import axios, { AxiosRequestConfig } from 'axios'
import { useJwtStore } from '../store/jwt.ts'

export const createService = (createConfig: AxiosRequestConfig | undefined) => {
  // axios instance
  const service = axios.create(createConfig)

  // request interceptor
  service.interceptors.request.use(
    config => {
      const {jwt} = useJwtStore()
      if (jwt) config.headers['Authorization'] = `Bearer ${jwt}`
      return config
    },
    error => {
      // if (process.env.VUE_APP_MODE === 'serve') {
      //   console.log(error) // for debug
      // }
      return Promise.reject(error)
    }
  )

  // response interceptor
  service.interceptors.response.use(
    response => {
      const res = response.data      
      return res
    },
    error => Promise.reject((error.response && error.response.data) ? error.response.data : null)
  )

  return service
}

// export const createService = axios.create({
//   baseURL: process.env.VUE_APP_SEARCH_API_URL, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   // timeout: 5000 // request timeout
// })

// export function getBrandKeyword({brandToken}: {brandToken: String}) {
//   return service({
//     url: '/dis/api/socialListening',
//     method: 'post',
//     data: {
//       keyword_sno: brandToken
//     }
//   }).then(d => d).catch((d: any) => d)
// }
