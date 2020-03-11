import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('NumberFormat', function (value) {
  if (!value) {
    return '0'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat
})

Vue.filter('dayjs', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('AIEquipment', function (data) {
  if( data == 0) {
    return "正常"
  }else if( data > 0) {
    return "异常"
  }
    console.log(data)
})
Vue.filter('formatterTims', function (data) {
  function formatTime(number,format) {  
  
    var formateArr  = ['Y','M','D','h','m','s'];  
    var returnArr   = [];  
    
    var date = new Date(number * 1000);  
    returnArr.push(date.getFullYear());  
    returnArr.push(formatNumber(date.getMonth() + 1));  
    returnArr.push(formatNumber(date.getDate()));  
    
    returnArr.push(formatNumber(date.getHours()));  
    returnArr.push(formatNumber(date.getMinutes()));  
    returnArr.push(formatNumber(date.getSeconds()));  
    
    for (var i in returnArr)  
    {  
      format = format.replace(formateArr[i], returnArr[i]);  
    }  
    return format;  
  } 
  
  //数据转化  
  function formatNumber(n) {  
    n = n.toString()  
    return n[1] ? n : '0' + n  
  }
    return formatTime(data,'Y/M/D h:m:s')
})

Vue.filter('status', function (data) {
    if( data == "1") {
      return "正常"
    }else{
      return "异常"
    }
})
Vue.filter('statusFn', function (data) {
    if( data == "1") {
      return "正常"
    }else{
      return "异常"
    }
})
