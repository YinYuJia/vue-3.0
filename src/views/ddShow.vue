<!--  -->
<template>
  <div class="showIndex">
    <div class="login-header">
      <p>智能电务辅助监测平台</p>
    </div>
    <div class="container">
      <div class="center" @click="indexLogin"></div>
      <div class="right" @click="blockShow"></div>
      <div class="left" @click="block"></div>
    </div>
    <!-- <el-button class="dapingBtn" type="primary" @click="indexLogin">大屏展示</el-button>
    <el-button class="blockBtn" type="primary" @click="block">区块</el-button>
    <el-button class="houtaiBtn" type="primary" @click="set">后台管理</el-button> 
    <el-button class="houtaiBtn" type="primary" @click="blockShow">区块链展示</el-button>-->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isAuthorityControlShow: false
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    indexLogin() {
      // this.$router.push({  //跳转到登录页面
      //   path: '/ddlogin',
      //   query: {}
      // })
      this.$router.push({
        //跳转到首页
        path: '/ddindex',
        query: {}
      })
    },
    set() {
      console.log('系统设置 跳出组件')
      this.isAuthorityControlShow = !this.isAuthorityControlShow
    },
    block() {
      window.open('http://115.236.28.76:58080', '_blank')
    },
    blockShow() {
      this.$router.push({
        path: '/blockShow',
        query: {}
      })
    }
  }
}
</script>
<style lang='less' scoped>
/* @import url(); 引入css类 */
.showIndex {
  width: 100%;
  height: 100%;
  background: url('../assets/img-login/首页-背景.png') no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  .login-header {
    width: 17.84rem;
    height: 0.49rem;
    background: url('../assets/img-login/bg-标题.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0.29rem;
    left: 50%;
    transform: translateX(-50%);

    p {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 3.67rem;
      height: 0.34rem;
      font-size: 0.34rem;
      font-weight: 700;
      text-align: center;
      color: #2c7dff;
      line-height: 0.34rem;
      background: linear-gradient(0deg, rgba(44, 125, 255, 1) 0%, rgba(21, 242, 255, 1) 100%);
      -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
      -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
    }
  }

    .left {
      width: 4.24rem;
      height: 4.28rem;
      background: url('../assets/img-login/-s-no.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 2.08rem;
      left: 2.47rem;
    }

    .left:hover {
      cursor: pointer;
      background: url('../assets/img-login/-s-yes.png') no-repeat;
      background-size: 100% 100%;
    }

    .right {
      width: 4.24rem;
      height: 4.28rem;
      background: url('../assets/img-login/-s-no1.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 2.08rem;
      right: 2.1rem;
    }

    .right:hover {
      cursor: pointer;
      background: url('../assets/img-login/-s-yes1.png') no-repeat;
      background-size: 100% 100%;
    }

    .center {
      width: 4.24rem;
      height: 4.28rem;
      background: url('../assets/img-login/no.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 3.58rem;
      left: 7.48rem;
    }

    .center:hover {
      cursor: pointer;
      background: url('../assets/img-login/yes.png') no-repeat;

      background-size: 100% 100%;
    }
}
</style>