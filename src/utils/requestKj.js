import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import dfaultSettings from '@/config/defaultSettings'
import router from '@/router'

const baseURL = process.env.NODE_ENV === 'development' ? dfaultSettings.RMURL.dev : dfaultSettings.baseURL.pro

const notification = Vue.prototype.$notification

// 创建 axios 实例
const service = axios.create({
  // baseURL: baseURL, // api base_url
  timeout: 30000 // 请求超时时间
})
service.defaults.withCredentials=true;
service.withCredentials=true;
const err = (error) => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      notification.error({ message: '没有权限', description: data.message })
    }
    if (error.response.status === 401) {
      notification.error({ message: '未登录', description: '需要登录' })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
    // if (error.response.status === 500) {
    //   notification.error({ message: '超时', description: '重新登录' })
    //   }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {

  const token = sessionStorage.getItem("switch_monitor_token")
  console.log("---",token)
  if (token) {
    config.headers[ 'switch_monitor_token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  // if (response.data && response.data.code === 401) { // 401, token失效
  //   router.push({name: 'dplogin'})
  // }
  return response.data
}, err)


// axios.defaults.headers = {
//   "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
// }
// axios.defaults.transformRequest = [function (data) {
//   var newData = "";
//   for (var k in data) {
//     newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
//   }
//   return newData
// }]


const installer = {
  vm: {},
  install (Vue, router = {}) {
    Vue.use(VueAxios, router, service)
  }
}

export {
  installer as VueAxios,
  service as axiosKj
}
