<!-- ---       --- ---       --- -- ---       --- ---    实时数据监测地图页面   --- ---       --- ---       --- -- ---       --- ---       --- -->
<template>
  <div
    class="mapbox"
    style=" margin-left:0px;background-color:#fff;padding-top:20px; "
    :style="{ 'height': (((120-113)/2)-20) + 'px' }"
  >
    <div class="title">CAD地图</div>
    <baidu-map
      :center="center"
      :zoom="17"
      style="height:500px;width:95%;margin:10px auto 0;"
    >
      <bm-marker
        :position="{lng: 120.165694, lat: 30.190863}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url: require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 120.17231, lat: 30.194634}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url: require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 120.165627, lat: 30.192277}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url: require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      ></bm-marker>
      <bm-marker
        :position="{lng: 120.165412, lat: 30.195133}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url: require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      ></bm-marker>
      <bm-marker
        :position="{lng: 120.169292, lat: 30.194228}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url:require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      ></bm-marker>
      <bm-marker
        :position="{lng: 120.170963, lat: 30.190139}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url:require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      ></bm-marker>
      <bm-marker
        :position="{lng:120.165268, lat: 30.18839}"
        :dragging="false"
        @click="infoWindowOpen"
        :icon="{url:require('../../assets/demo/j.png'), size: {width: 43, height: 40}}"
      ></bm-marker>
      <bm-polyline :path="polylinePath" stroke-color="red" :stroke-opacity="1" :stroke-weight="2" :editing="false" ></bm-polyline>
      <bm-polyline :path="polylinePath1" stroke-color="red" :stroke-opacity="1" :stroke-weight="2" :editing="false" ></bm-polyline>
      <bm-polyline :path="polylinePath2" stroke-color="red" :stroke-opacity="1" :stroke-weight="2" :editing="false" ></bm-polyline>
      <bm-polyline :path="polylinePath3" stroke-color="red" :stroke-opacity="1" :stroke-weight="2" :editing="false" ></bm-polyline>
      <bm-polyline :path="polylinePath4" stroke-color="red" :stroke-opacity="1" :stroke-weight="2" :editing="false" ></bm-polyline>
    </baidu-map>
  </div>
</template>
<script>
export default {
  name: "mapbox",
  data() {
    return {
      center: { lng: 120.166241, lat: 30.190863 },
      zoom: 12,
      show: false,
      isShow: false,
      //左边第二个横线
      polylinePath: [
        {lng: 120.1535,lat:30.193182},
        {lng: 120.157111,lat:30.190904},
        {lng: 120.161333,lat:30.18875},
        {lng: 120.165268, lat: 30.18839},
        {lng:120.170963, lat:30.190139},
        {lng: 120.184887, lat: 30.195867}

      ],
      //左边第一个竖线
      polylinePath1: [
        {lng: 120.165627, lat: 30.192277},
        {lng: 120.165694, lat: 30.190863},
        {lng:120.165735,lat:30.184161}
      ],
      //左边第二个竖线
      polylinePath2: [
        {lng: 120.174413, lat: 30.186954},
        {lng: 120.17231, lat: 30.194634},
        {lng: 120.171179, lat: 30.198957}
      ],
      //左边第一个横线
      polylinePath3: [

        {lng: 120.182731, lat: 30.199207},
        {lng: 120.17231, lat: 30.194634},
        {lng: 120.162645, lat: 30.193135},
        {lng:120.156231,lat: 30.194837}
      ],
      polylinePath4: [
        {lng: 120.165412, lat: 30.195133},
        {lng: 120.165627, lat: 30.192277},

        {lng:120.165232,lat:30.197833}
      ],
    };
  },
  methods: {
    infoWindowOpen() {
      // window.location.href = '/demo/demo';
      this.$router.push({ name: '电缆井孔' })
    },
  }
};
</script>
<style  scoped>
.title {
  font-size: large;
  font-weight: bolder;
  margin: 0 0 0 30px;
}
</style>
