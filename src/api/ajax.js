/* 
能发送ajax的函数(axios), 函数的返回值是promise
1. 处理post请求的请求休参数: 转换为urlencode格式(默认用的json格式): 请求拦截器
2. 让成功的结果不是response, 而是response.data : 响应拦截器的成功回调
3. 统一处理请求错误: 响应拦截器的失败回调
*/
import axios from 'axios'
import qs from 'qs'

// axios.defaults.baseURL = 'http://localhost:4000'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  const {
    method,
    data
  } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 2. 让成功的结果不是response, 而是response.data : 响应拦截器的成功回调
  return response.data
  // 3. 统一处理请求错误: 响应拦截器的失败回调
}, error => {
  alert('请求异步: ' + error.message)
  // 中断promise链
  return new Promise(() => {})
})

export default axios