import Vue from 'vue'
import App from './App.vue'
import router from './router'
// mock
// import './mock'
import "./../public/rem" //引入rem
import "../public/base.css"
import '@/utils/filter' // global filter
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui' //element-ui的全部组件
import VueHtml5Plus from 'vue-html5plus'
import BaiduMap from 'vue-baidu-map'
import ECharts from 'vue-echarts'
import echarts from 'echarts'
import 'echarts-gl'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import axios from 'axios'
import "./utils/axios"
// Vue.prototype.echarts = Echarts
// Vue.http.options.credentials = true
// Vue.http.options.xhr = { withCredentials: true }
import VideoPlayer from 'vue-video-player'
// import 'amfe-flexible'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.prototype.$axios = axios;
Vue.prototype.$areaCode = "330206";
axios.defaults.withCredentials=true;
Vue.use(echarts)
// import global from './common'
Vue.use(BaiduMap,{ ak:'wycygWOMkzZt9XB7wDTQwu49VcssxkFG'})
Vue.use(VueHighCharts)
highcharts3d(highcharts)
Vue.prototype.$echarts = echarts
 
class Url {
  /**
   * 传入对象返回url参数
   * @param {Object} data {a:1}
   * @returns {string}
   */
  getParam(data){
      let url = '';
      for(var k in data){
          let value = data[k] !==undefined ? data[k] : '';
          url += `&${k}=${encodeURIComponent(value)}`
      }
      return url ? url.substring(1) : ''
  }

  /**
   * 将url和参数拼接成完整地址
   * @param {string} url url地址
   * @param {Json} data json对象
   * @returns {string}
   */
  getUrl(url, data){
      //看原始url地址中开头是否带?，然后拼接处理好的参数
      return url += (url.indexOf('?') < 0 ? '?' : '') + this.getParam(data)
  }
}

Vue.prototype.$getParmas = new Url();  //get 请求参数序列化  this.$getParmas.getgetUrl(this.$getParmas.getUrl("11111111",{a:1234}))

Vue.config.productionTip = false
// Vue.prototype.COMMON = global //挂载到Vue实例上面
Vue.use(ElementUI) //使用elementUI
Vue.config.productionTip = false
Vue.use(VueHtml5Plus);
// Vue.use(axios, router)
Vue.component('v-chart', ECharts)
console.log("环境变量------",process.env.VUE_APP_SECRET)

new Vue({
  router,
  created () {

  },
  render: h => h(App)
}).$mount('#app')
