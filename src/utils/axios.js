import axios from 'axios'
import Vue from "vue"
import { Loading,Message } from 'element-ui';
import router from '../router/index'
import merge from 'lodash/merge'
// import {  } from "element-ui"
// 创建实例
const service = axios.create({

});


var loadingInstance;
// axios拦截器
axios.interceptors.request.use(request => {

    loadingInstance = Loading.service({
        'background':"rgba(0,0,0,0)"
    });
    request.headers['Content-Type'] = 'application/json';
    // let token = sessionStorage.getItem("token")
    // if( token) {
    //     request.headers['switch_monitor_token'] = token
    // }
    // request.baseURL = process.env.baseURL
    return request;

});



// 拦截响应
axios.interceptors.response.use((response) => {
    loadingInstance.close();
    // token 已过期，重定向到登录页面
    // if(response.data.code == 401 ){
    //     // 系统异常
    //     Message({
    //         message: response.data.msg,
    //         type: 'warning'
    //       });
    //       setTimeout(()=>{
    //         router.push({
    //            path:"/ddlogin",
    //            query:{}
    //         })
    //       },2000)
    //     return;
    // }

    // else if (newRes.code == 1 ) {
    //     // 业务异常
    //     if ( newRes.data.enCode !== 1000 ) {
    //         console.log(newRes.data.msg);
    //         // this.$router.push("/")
    //     }
    //     return;
    // }else if (newRes.code == 0 ) {
    //     // 成功   1000
    //     if (newRes.data.enCode !== 1000 ) {
    //     // 失败  1001
    //         console.log(newRes.data.msg);
    //         return;
    //     }
    // }
    return response
}, 

axios.adornParams = (params = {}, openDefultParams = true) => {
    var defaults = {
      't': new Date().getTime()
    }
    return openDefultParams ? merge(defaults, params) : params
  },
  axios.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    var defaults = {
      't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
  },
error => {
    return Promise.reject(error.message);   // 返回接口返回的错误信息
});

export default service;