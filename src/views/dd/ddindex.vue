<!--  -->
<template>
  <div class="index">

    <div class="baiduMap" v-if="true">
      <baiduMap></baiduMap>
    </div>

    <!-- <div class="last">
      1111111111111 <img src="../../assets/imgs/git.gif" alt="">
    </div> -->
  </div>
</template>

<script>
  import baiduMap from "./baiduMap"
  export default {
    components: {
      baiduMap,
    },
    data() {
      return {
      }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {},
    methods: {
      jump() {
        this.$router.push({
          path: "/liveplayer",
          query: {}
        })
      },
      AIEquipment( data ) {

      }
    }
  }
</script>
<style lang='less' scoped>
    .baiduMap {
      position: absolute;
      top: 0; // top: 1rem;
      // left: 50%;
      // transform: translateX(-50%);
      height: 8.5rem;
      width: 14.1rem;
      z-index: 1; //   background-color: red;
    }
</style>