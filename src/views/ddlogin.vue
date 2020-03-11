<!--  -->
<template>
  <div class="login-box">
    <div class="login-left"></div>
    <div class="login-container">
      <div class="login-header">
        <p>用户登录</p>
      </div>
      <el-form :model="form" label-width="80px" id="FORM" style="margin-top:0.15rem">
        <el-form-item label="用户名" hide-required-asterisk>
          <el-input v-model="form.username" clearable placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" clearable placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.captcha" style="width:1.5rem" clearable placeholder="请输入验证码"></el-input>
          <img
            style="width:1rem;heigth:.3rem !important;margin-left:.15rem"
            alt="验证码"
            :src="srcyzm"
            id="code"
            @click="showImageCode"
          />
        </el-form-item>
        <el-button type="primary" class="btn" @click="login">立即登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { getUUID } from '@/utils/util'
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: 'Abcd=1234'
      },
      srcyzm: '',
      code: ''
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log(1)
    this.showImageCode()
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    showImageCode() {
      this.form.uuid = getUUID()
      // 显示验证码
      this.srcyzm = '/apiUrl/captcha.jpg?uuid=' + this.form.uuid
    },
    //登录
    login() {
      let loginParams = {}
      loginParams.username = this.form.username
      // Base64.encode(values.password);
      loginParams.password = this.form.password
      loginParams.captcha = this.form.captcha
      loginParams.uuid = this.form.uuid
      loginParams.isMobile = false
      var alarmdatefrom = new Date() //
      var year = alarmdatefrom.getFullYear() //获取完整的年份(4位,1970-????)
      var month = alarmdatefrom.getMonth() + 1 //获取当前月份(1-12)
      var day = alarmdatefrom.getDate()
      loginParams.realDay = year + '' + month + '' + day

      this.$axios
        .post('/apiUrl/emgy/sys/login', loginParams)
        .then(resData => {
          // console.log(resData)
          if (resData.data.code == 0) {
            this.$message({
              showClose: true,
              message: '登录成功',
              type: 'success' //error success
            })
            // sessionStorage.setItem("token",resData.data.switch_monitor_token)
            this.$router.push({
              path: '/ddindex',
              query: {}
            })
          } else {
            this.$message({
              showClose: true,
              message: resData.data.msg,
              type: 'warning' //error success
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
#video1 {
  width: 8rem; // height: 3rem;
  outline: none;
}
html,
body {
  padding: 0;
  margin-top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-box {
  width: 100%;
  height: 100%;
  background: url('../assets/imgs/background.png') no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  .login-left {
    width: 12.62rem;
    height: 9.44rem;
    background: url('../assets/imgs/login_center.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .login-container {
    width: 5rem;
    height: 8rem;
    float: right;
    margin-top: 0.9rem;
    margin-right: 0.5rem;
    padding-right: 0.45rem;
    padding-top: 0.32rem;
    padding-left: 0.32rem;
    box-sizing: border-box;
    background: url('../assets/imgs/login_form.png') no-repeat;
    .login-header {
      width: 100%;
      height: 0.68rem;
      padding-top: 15px;
      margin-bottom: 0.45rem;
      p {
        display: block;
        text-align: center;
        margin: 0 auto;
        font-size: 0.25rem;
        color: #fff;
        width: 1.6rem;
        height: 0.53rem;
        border-bottom: 0.01rem solid #1890ff;
        padding-top: 0.1rem;
        box-sizing: border-box;
      }
    }
  }
}
.btn {
  border: none;
  height: 0.5rem;
  width: 3.3927rem;
  font-size: 0.16rem;
  background-color: #1890ff;
  color: #fff;
  border-radius: 5px;
  float: right;
  margin-right: 0.02rem;
}
/deep/ .el-form-item__label {
  font-size: 0.2rem;
  color: #fff;
}
/deep/ .el-form-item {
  margin-bottom: 0.5rem;
}
</style>
