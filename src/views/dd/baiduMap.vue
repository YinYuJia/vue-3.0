<template>
    <div id="map" style="width:19.20rem;height:10.8rem;">
    </div>
</template>

<script>
    import styleJson from "../../../public/custom_map_config-1"
    export default {
        data() {
            return {
                map: null,
                mapPoint: [],
                points: []
            }
        },
        created() {
            this.getStation()
        },
        mounted() {
            // 百度地图API功能
        },
        methods: {
            creatBaiDuMap() {
                this.map = new BMap.Map("map", {
                    enableMapClick: true
                }); // 创建Map实例
                this.points[0].lng
                this.map.centerAndZoom(new BMap.Point(this.points[0].lng, this.points[0].lat), 15); // 初始化地图,设置中心点坐标和地图级别
                //添加地图类型控件
                this.map.setCurrentCity("大连"); // 设置地图显示的城市 此项是必须设置的
                this.map.enableScrollWheelZoom(true);
                console.log("-----", this.points)
                let _that = this
                this.addMarker(this.points)
                this.map.setMapStyleV2({
                    styleJson: styleJson
                });
            },
            getStation() { //330206
                this.$axios.get(`/apiUrl/sw/bl/allList?area=330206`, {}).then((response) => {
                    console.log("response----百度地图", response.data)
                    if (response.data.code == 0) {
                        this.points = response.data.list
                        // console.log("1234543", this.points)
                        // 请求点成功后 返回百度地图
                        this.creatBaiDuMap()
                    } else {
                        this.$message({
                            showClose: true,
                            message: response.data.msg,
                            type: 'warning' //error success
                        });
                    }
                })
            },
            markerFun(points) {
                var markers = new BMap.Marker(points);
                this.map.addOverlay(markers);
            },
            showInfo(thisMaker, point) {
                let txt = `<span style="color:white;font-size: .17rem ;">${point.name}</span>
                                <span style="color:#fff;font-size: .17rem ;" >总量:[${point.count}]</span>
                                <span style="color:#F9AF00;font-size: .16rem ;">离线:[${point.unlineCount}]</span>
                                <span style="color:#F90F14;font-size: .16rem ;">告警:[${point.expCount}]</span>
                                `
                var label = new BMap.Label(txt, {
                    offset: new BMap.Size(-20, -45)
                });
                label.setStyle({
                    opacity: "0.9",
                    backgroundColor: "rgba(249,15,20,.35)",
                    height: ".4rem",
                    minWidth: "2.8rem",
                    paddingLeft: ".18rem",
                    paddingRight: ".18rem",
                    lineHeight: ".4rem",
                    border: "1px solid rgba(249,15,20,.8)",
                    borderRadius: ".03rem"
                })
                // label.setStyle({
                //   whiteSpace : "nowrap",
                //   color : "#ffffff"
                // });
                // label.setStyle({display:"block"});
                //         label.setStyle({whiteSpace:"normal",
                // height:"auto"});
                thisMaker.setLabel(label)
            },
            addMarker(points) { // 创建图标对象
                let that = this
                // 创建标注对象并添加到地图
                for (var i = 0, pointsLen = points.length; i < pointsLen; i++) {
                    var point = new BMap.Point(points[i].lng, points[i].lat);
                    if (points[i].id > 49) {
                        var myIcon = new BMap.Icon(require("../../assets/imgs/static.png"), new BMap.Size(30, 30), {
                            // 指定定位位置。
                            // 当标注显示在地图上时，其所指向的地理位置距离图标左上
                            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
                            // 图标中央下端的尖角位置。
                            anchor: new BMap.Size(10, 25),
                            // 设置图片偏移。
                            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
                            // 需要指定大图的偏移位置，此做法与css sprites技术类似。
                            // imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
                        });
                    } else {
                        var myIcon = new BMap.Icon(require("../../assets/imgs/waringIcom.png"), new BMap.Size(30, 30), {
                            // 指定定位位置。
                            // 当标注显示在地图上时，其所指向的地理位置距离图标左上
                            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
                            // 图标中央下端的尖角位置。
                            anchor: new BMap.Size(10, 25),
                            // 设置图片偏移。
                            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
                            // 需要指定大图的偏移位置，此做法与css sprites技术类似。
                            // imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
                        });
                    }
                    // 创建标注对象并添加到地图
                    var marker = new BMap.Marker(point, {
                        icon: myIcon
                    });
                    that.map.addOverlay(marker);
                    //给标注点添加点击事件。使用立即执行函数和闭包
                    (function() {
                        var thePoint = points[i];
                        marker.addEventListener("mouseover", function() {
                            that.showInfo(this, thePoint);
                        });
                        marker.addEventListener("click", () => {
                            console.log("---点击---", thePoint)
                        });
                        marker.addEventListener("mouseout", function(e) {
                            var label = this.getLabel()
                            //     label.setStyle({whiteSpace:"nowrap",
                            // height:"20px"});
                            label.setContent(""); //设置标签内容为空
                            label.setStyle({
                                display: "none"
                            });
                        });
                    })();
                }
            }
        }
    }
</script>

<style lang="less" scoped>