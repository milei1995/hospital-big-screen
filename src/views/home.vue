<!-- 组件说明 -->
<template>
  <div class="home" id="home">
       <div id="particles-js" style="display: flex;align-items: center;justify-content: center;z-index:1;">
		<canvas class="particles-js-canvas-el" style="width: 100%; height: 100%;" width="472" height="625"></canvas>
	</div>
     <img src="../pic/bg.png" />
     <div class="content">
        <div class="btn1" @click="showModal(1)"></div> <!---按钮1-->
        <div class="btn2" @click="showModal(2)"></div> <!---按钮2-->
        <div class="btn3" @click="showModal(3)" ></div><!--按钮3-->
        <div class="btn4" @click="showModal(4)"></div><!--按钮4-->
        <div class="btn7" @click="showModal(7)"></div><!--按钮7-->
        <div class="btn8" @click="showModal(8)"></div><!--按钮8-->
        <div class="btn9" @click="showModal(9)"></div><!--按钮9-->
        <div class="middle-area">
          <middle-area />
        </div>
        <div class="area1">
           <area1 />
        </div> <!--区块1-->
        <div class="area2">
           <area2  :ErrorDataFromSocket="socketData"/>
        </div><!--区块2-->
        <div class="area3">
          <area3 />
        </div><!--区块3-->
        <div class="area4">
          <area4 :ErrorDataFromSocket="socketData"/>
        </div><!--区块4-->
        <div class="area7">
           <area7 />
        </div><!--区块7-->
        <div class="area8">
           <area8 />
        </div><!--区块8-->
        <div class="area9">
           <area9 />
        </div><!--区块9-->
     </div> 
     <div class="modal1" ref="modal1" v-if="modal1Visible">
         <modal1   @cancelClick="cancelClick(1)" />
     </div><!--弹窗区域1-->
     <div class="modal2" ref="modal2" v-if="modal2Visible">
         <modal2   @cancelClick="cancelClick(2)" />
     </div><!--弹窗区域2-->
       <div class="modal3" ref="modal3" v-if="modal3Visible">
         <modal3   @cancelClick="cancelClick(3)" />
     </div><!--弹窗区域3-->
     <div class="modal4" ref="modal4" v-if="modal4Visible">
         <modal4  @cancelClick="cancelClick(4)"/>
     </div><!--弹窗区域4-->
      <div class="modal5" ref="modal5" v-if="modal5Visible">
         <modal5  @cancelClick="cancelClick(5)"/>
     </div><!--弹窗区域5-->
      <div class="modal6" ref="modal6" v-if="modal6Visible">
         <modal6  @cancelClick="cancelClick(6)"/>
     </div><!--弹窗区域6-->
      <div class="modal7" ref="modal7" v-if="modal7Visible">
         <modal7  @cancelClick="cancelClick(7)"/>
     </div><!--弹窗区域7-->
      <div class="modal8" ref="modal8" v-if="modal8Visible">
         <modal8  @cancelClick="cancelClick(8)"/>
     </div><!--弹窗区域8-->
     <div class="modal9" ref="modal9" v-if="modal9Visible">
         <modal9  @cancelClick="cancelClick(9)"/>
     </div><!--弹窗区域9-->
  </div>
</template>

<script>
import Area1 from '../components/area1'
import Area2 from '../components/area2'
import Area3 from '../components/area3'
import Area4 from '../components/area4'


import Area7 from '../components/area7'
import Area8 from '../components/area8'
import Area9 from '../components/area9'
import MiddleArea from '../components/middle-area'
import Modal1 from '../components/modal1'
import Modal2 from '../components/modal2'
import Modal3 from '../components/modal3'
import Modal4 from '../components/modal4'
import Modal5 from '../components/modal5'
import Modal6 from '../components/modal6'
import Modal7 from '../components/modal7'
import Modal8 from '../components/modal8'
import Modal9 from '../components/modal9'
export default {
  components: {
    Area1,
    Area2,
    Area3,
    Area4,

    Area7,
    Area8,
    Area9,
    MiddleArea,
    Modal1,
    Modal2,
    Modal4,
    Modal3,
    Modal5,
    Modal6,
    Modal7,
    Modal8,
    Modal9
  },
  data() {
    return {
       modal1Visible:false,
       modal2Visible:false,
       modal3Visible:false,
       modal4Visible:false,
       modal5Visible:false,
       modal6Visible:false,
       modal7Visible:false,
       modal8Visible:false,
       modal9Visible:false,
       socketData:{}
    };
  },
  computed: {},
  methods: {
   cancelClick(num){
     if(num==1){
        this.modal1Visible=false
     }
     if(num==2){
        this.modal2Visible=false
     }
     if(num==3){
       this.modal3Visible=false
     }
     if(num==4){
       this.modal4Visible=false
     }
     if(num==5){
       this.modal5Visible=false
     }
     if(num==6){
       this.modal6Visible=false
     }
     if(num==7){
       this.modal7Visible=false
     }
     if(num==8){
       this.modal8Visible=false
     }
     if(num==9){
       this.modal9Visible=false
     }
   },
   showModal(num){
     if(num==1){
       this.modal1Visible=true
     }
     if(num==2){
        this.modal2Visible=true
     }
     if(num==3){
       this.modal3Visible=true
     }
     if(num==4){
       this.modal4Visible=true
     }
     if(num==5){
       this.modal5Visible=true
     }
     if(num==6){
       this.modal6Visible=true
     }
     if(num==7){
       this.modal7Visible=true
     }
     if(num==8){
       this.modal8Visible=true
     }
     if(num==9){
       this.modal9Visible=true
     }
   },
    initWebSocket: function() {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket(`ws://192.168.16.204:9001/vqdisplay/repairStatusPush`);
      // 绑定各个方法
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen: function() {
      console.log("WebSocket连接成功");
    },
    websocketonerror: function() {
      console.log("WebSocket连接发生错误");
    },
    websocketonmessage: function(e) {
      console.log(e)
      this.socketData=JSON.parse(e.data)
    },
    websocketclose: function(e) {
      console.log("connection closed (" + e.code + ")");
    }

  },
  watch:{
   socketData:{
     handler(newData,oldData){
     }
   }
  },
  created(){
   this.initWebSocket()
  },
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    this.websocketclose()
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" src="" scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  img{
      position:absolute;
      left:0;
      top:0;
      z-index:-3;
      height:100%;
      width:100%;
      border:0;
  }
  .content{
      width:100%;
      height:100%;
      display:flex;
      .btn1{
        position:absolute;
        width:1.46%;
        height:15.15%;
        top:20.88%;
        left:1.15%;
        cursor:pointer;
        z-index:2;
      }
      .btn2{
        position:absolute;
        width:1.46%;
        height:15.15%;
        left:1.15%;
        top:53.30%;
        cursor:pointer;
        z-index:2;
      
      }
      .btn3{
        position:absolute;
        width:1.46%;
        height:15.15%;
        left:1.15%;
        top:78.23%;
        cursor:pointer;
        z-index:2;
       
      }
      .btn4{
        position:absolute;
        width:10.07%;
        height:3.2%;
        left:45.80%;
        top:62.3%;
        cursor:pointer;
        z-index:2;
     
      }
      .btn5{
        position:absolute;
        width:8.07%;
        height:3.2%;
        left:46.46%;
        top:75.40%;
        cursor:pointer;
        z-index:2;
      }
      .btn6{
        position:absolute;
        width:8.07%;
        height:3.2%;
        left:64.01%;
        top:75.40%;
        cursor:pointer;
        z-index:2;
       
      }
      .btn7{
        position:absolute;
        width:1.46%;
        height:15.15%;
        top:9.88%;
        right:0.8%;
        cursor:pointer;
        z-index:2;
      }
      .btn8{
        position:absolute;
        width:1.46%;
        height:15.15%;
        right:0.8%;
        top:41.30%;
        cursor:pointer;
        z-index:2;
      
      }
      .btn9{
        position:absolute;
        width:1.46%;
        height:15.15%;
        right:0.8%;
        top:76.23%;
        cursor:pointer;
        z-index:2;
      }
      .middle-area{
        position:absolute;
        width:48.10%;
        height:53.71%;
        top:7.79%;
        left:25.84%;
        z-index:2;
      }
      .area1{
        position:absolute;
        width:23.5%;
        height:42.25%;
        top:7.3%;
        left:1.9%;
      }
      .area2{
        position:absolute;
        width:23.5%;
        height:22.25%;
        top:50.14%;
        left:1.9%;
      }
      .area3{
        position:absolute;
        width:23.5%;
        height:24.25%;
        top:73%;
        left:1.9%;
      }
      .area4{
        position:absolute;
        width:48.10%;
        height:34.6%;
        top:62.59%;
        left:25.84%;
      }
      .area5{
        position:absolute;
        width:16.77%;
        height:20.51%;
        top:76.59%;
        left:41.98%;
      }
      .area6{
        position:absolute;
        width:16.77%;
        height:20.51%;
        top:76.59%;
        left:59.37%;
      }
      .area7{
        position:absolute;
        width:24.5%;
        height:20.25%;
        top:7.3%;
        right:1.3%;
      }
      .area8{
        position:absolute;
        width:24.5%;
        height:39.25%;
        top:29.14%;
        right:1.3%;
      }
      .area9{
        position:absolute;
        width:24.5%;
        height:28.25%;
        top:69.07%;
        right:1.3%;
      }
  }
  .modal1,.modal2{
      width:100%;
      height:100%;
  }
}
</style>
