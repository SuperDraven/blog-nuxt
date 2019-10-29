/**
 * 用于浏览器端ajax请求
 */

import Axios from 'axios'
import { Message } from 'iview'
import qs from 'qs'

// 环境变量
const env = process.env.NODE_ENV || 'development'

let baseUrl = {
  development: 'http://localhost:8086',
  test: 'https://test.domain.com',
  production: 'http://blog.houlahoula.com:8086'
}

let options = {
  baseURL: baseUrl[env],
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'

    }
  }
}
// 创建实例
let axios = Axios.create(options)

// 拦截

axios.interceptors.request.use(function (config) {

  config.data = qs.stringify(config.data)
  console.log(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(
  res => {
    if (res.status && res.status === 200 && res.data.status === 'error') {
      return
    }
    return res
  },
  err => {
    if (err.response.status !== 200) {
      if (process.client) {
        Message.error(err.response.data.data || '')
      }
    }
    return Promise.resolve(err.response)
  }
)
export default axios
