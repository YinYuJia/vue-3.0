<!--  -->
  <template>
    <div class="video-container" >
        <div  class="videoPlay">
          <live-player
            class="video"
            ref="player"
            :videoUrl="videoUrl"
            v-loading="loading"
            fluent
            autoplay
            live
            stretch></live-player>
        </div>
        <div class="videoControl" id="video_dialog">
            <div class="video_button">
                <el-button type="primary" @click="play(players)" >播放</el-button>
                <el-button type="primary" @click="stop()">暂停</el-button>
            </div>
            <div class="video_button" >
                <el-button  type="primary" @click="ptzControl('zoomin')">放大</el-button>
                <el-button  type="primary" @click="ptzControl('zoomout')">缩小</el-button>
            </div>
            <div class="video_button" >
                <el-button type="primary"  @click="ptzControl('left')"> 左</el-button>
                <el-button type="primary"  @click="ptzControl('up')">上</el-button>
                <el-button type="primary"  @click="ptzControl('right')"> 右</el-button>
                <el-button type="primary"  @click="ptzControl('down')">下</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import LivePlayer from '@liveqing/liveplayer'
//需要用到的接口
import {Login,getChannelList,streamStart,controlPtz,streamStop} from '../../utils/util'
export default {
    data() {
        return {
            camidList: [],
            players: [],
            token: '',
            code: '',
            serial: '',
            command: '',
            streamID: '',
            videoUrl: '',
            loading: false
        }
    },
    components: {
        LivePlayer
    },
    mounted() {
        this.getChannels()
    },
    methods: {
        getChannels() {
            // 接口需要token  调用登录接口获取token
            this.loading = true
            const parmas = {
                'username': "admin",
                'password': "413b483076832cb36e29c6a8de54ae1e"
            }
            Login(parmas.username,parmas.password).then(res => {
                this.token = res.data.URLToken
                 getChannelList(this.token,'true').then(res => {
                    this.players = res.data.ChannelList
                    console.log("this.players",this.players)
                    this.shuld(this.players[4])
                })
            })
        },
        shuld(data) {
            this.serial = data.DeviceID
            this.code = data.ID
            this.play()
        },
        play() {
            this.loading = true
            streamStart(this.serial,this.code,this.token).then(res => {
                console.log("streamstart",res)
                    var indexnum = res.data.FLV.indexOf('10000');
                    var fivurl = res.data.FLV.substr(indexnum + 5);
                    this.videoUrl = fivurl || ''
                    this.streamID = res.data.StreamID
                    this.loading = false
            })
        },
        ptzControl(command) {
           controlPtz(this.serial,this.code,command,this.token).then(res => {
                console.log(res)
                window.setTimeout(() => {
                    this.ptzStop()
                 }, 100)
            }  )
        },
        ptzStop() {
            controlPtz(this.serial,this.code,'stop',this.token).then(res => {
                console.log(res)
            })
        },
        stop() {
            streamStop(this.serial,this.code,this.token).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style>
    .video-container {
        display: flex;
        flex-flow: row nowrap;
    }
    .video {
        width: 100%;
    }
    .videoControl {
        width: 30%;
    }
    .video_button {
        margin-top: 20px;
        margin-left: 30px;
    }
    .videoPlay {
        width: 1000px;
        height: 500px;
    }
</style>