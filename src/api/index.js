import axios from 'axios'
import qs from 'qs'
// import { Toast, Indicator } from 'mint-ui'

import URL from './interfaceAddress'

axios.interceptors.request.use(config => {
  let type = config.type
  delete config.type
  // loading
  switch (type) {
    case 1:
      // Indicator.open('加载中')
      return config
    case 2:
      // Indicator.open('正在提交')
      return config
    default:
      return config
  }
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  // Indicator.close()
  let message = ''
  let messagecode = ''
  if (res) {
    switch (res.status) {
      case 200:
        messagecode = 200
        message = '请求成功'
        break
      case 400:
        messagecode = 400
        message = '请求错误'
        break
      case 401:
        messagecode = 401
        message = '未授权，请登录'
        break
      case 403:
        messagecode = 403
        message = '拒绝访问'
        break
      case 404:
        messagecode = 404
        message = `请求地址出错: ${res.config.url}`
        break
      case 408:
        messagecode = 408
        message = '请求超时'
        break
      case 500:
        messagecode = 500
        message = '服务器内部错误'
        break
      case 501:
        messagecode = 501
        message = '服务未实现'
        break
      case 502:
        messagecode = 502
        message = '网关错误'
        break
      case 503:
        messagecode = 503
        message = '服务不可用'
        break
      case 504:
        messagecode = 504
        message = '网关超时'
        break
      case 505:
        messagecode = 505
        message = 'HTTP版本不受支持'
        break
      default:
        break
    }
    res.data.message = message
    res.data.messagecode = messagecode
    // Toast(message || `${res.status}问题`)
    return res.data
  }
  return {messagecode: 250, message: '未知错误'}
}, error => {
  console.log(JSON.stringify(error))
  // Toast('网络异常')
  // return Promise.resolve(error.response)
})
const Api = {
  post (baseURL, url, data, head= {}, type = 0) {
    if (Object.prototype.toString.call(baseURL) === '[object Object]') {
      head = url || {}
      data = baseURL
      baseURL = URL.HOST_NAME
      url = URL.PATH_NAME.USER_LOGIN
    } else if (Object.prototype.toString.call(url) === '[object Object]') {
      head = data || {}
      data = url
      url = URL.PATH_NAME.USER_LOGIN
    }
    return axios({
      method: 'post',
      baseURL,
      url,
      type,
      data: qs.stringify(data),
      // timeout: 10000,
      headers: {
        ...head,
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Language': 'charset=utf-8'
      }
    })
  },
  get (baseURL, url, params, type = 0) {
    return axios({
      method: 'get',
      baseURL,
      url,
      type,
      params// get 请求时带的参数
      // timeout: 10000,
    })
  },
  upload (baseURL, url, data, type = 0) {
    return axios({
      method: 'post',
      baseURL,
      url,
      type,
      data,
      // timeout: 10000,
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
export { URL, Api }
