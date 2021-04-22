<!--
 * @Author: your name
 * @Date: 2021-04-06 10:16:20
 * @LastEditTime: 2021-04-22 09:54:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\hospitalFc.vue
-->
<template>
  <div class="acDC-center">
    <div class="acDC-title">
      <span>配电房监控</span>
    </div>
    <div class="vs-row1">
      <div class="indicators">
        <div class="content1">
          <div class="pd-bg1">
            <img style="width:100%;height:100%;"  src="../pic/pd1.png" /> 
          </div>
          <div class="pd-bg2">
            <img style="width:100%;height:100%;" src="../pic/pd1.png" />
          </div>
          <div class="sub2-chart">
            <p class="chart-title">
              <span>一次侧模拟</span>
            </p>
            <div class="by-box">
              <div class="by">
                <p>10kv#1进线</p>
                <p>1#</p>
                <div id="pip1"></div>
                <!-- <div class="by-data-box2">
                            <p id="Uab0">Uab:</p>
                            <p id="Ubc0">Ubc:</p>
                            <p id="Uca0">Uca:</p>
                        </div> -->
              </div>
              <div class="by">
                <p>10kv#2进线</p>
                <p>2#</p>
                <div id="pip2"></div>
                <!-- <div class="by-data-box2 by-data-box3">
                            <p id="Uab1">Uab:</p>
                            <p id="Ubc1">Ubc:</p>
                            <p id="Uca1">Uca:</p>
                        </div> -->
              </div>
            </div>

            <div class="zx-pip-h">
              <div class="zx-h-zd" id="mbzd0"></div>
              <div class="zx-h-box zx">
                <div></div>
                <p>母联柜</p>
                <ul>
                  <li><span>Ia:</span> <span id="mbUab0">1.3 A</span></li>
                  <li><span>Ib:</span> <span id="mbUbc0">1.3 A</span></li>
                  <li><span>Ic:</span> <span id="mbUca0">1.3 A</span></li>
                </ul>
              </div>
            </div>

            <div class="zx-box" id="trans">
              <div class="zx">
                <div class="zx-pip"></div>
                <p>1#变压器</p>
                <ul>
                  <li><span>IA:</span> <span>1.3 A</span></li>
                  <li><span>IB:</span> <span>1.3 A</span></li>
                  <li><span>IC:</span> <span>1.3 A</span></li>
                  <li><span>P:</span> <span>1.3 kW</span></li>
                  <li><span>负载率:</span> <span>25%</span></li>
                </ul>
              </div>
              <div class="zx">
                <div class="zx-pip"></div>
                <p>2#变压器</p>
                <ul>
                  <li><span>IA:</span> <span>1.3 A</span></li>
                  <li><span>IB:</span> <span>1.3 A</span></li>
                  <li><span>IC:</span> <span>1.3 A</span></li>
                  <li><span>P:</span> <span>1.3 kW</span></li>
                  <li><span>负载率:</span> <span>25%</span></li>
                </ul>
              </div>
              <div class="zx">
                <div class="zx-pip"></div>
                <p>3#变压器</p>
                <ul>
                  <li><span>IA:</span> <span>1.3 A</span></li>
                  <li><span>IB:</span> <span>1.3 A</span></li>
                  <li><span>IC:</span> <span>1.3 A</span></li>
                  <li><span>P:</span> <span>1.3 kW</span></li>
                  <li><span>负载率:</span> <span>25%</span></li>
                </ul>
              </div>
              <div class="zx">
                <div class="zx-pip"></div>
                <p>4#变压器</p>
                <ul>
                  <li><span>IA:</span> <span>1.3 A</span></li>
                  <li><span>IB:</span> <span>1.3 A</span></li>
                  <li><span>IC:</span> <span>1.3 A</span></li>
                  <li><span>P:</span> <span>1.3 kW</span></li>
                  <li><span>负载率:</span> <span>25%</span></li>
                </ul>
              </div>
              <div class="zx">
                <div class="zx-pip"></div>
                <p>5#变压器</p>
                <ul>
                  <li><span>IA:</span> <span>1.3 A</span></li>
                  <li><span>IB:</span> <span>1.3 A</span></li>
                  <li><span>IC:</span> <span>1.3 A</span></li>
                  <li><span>P:</span> <span>1.3 kW</span></li>
                  <li><span>负载率:</span> <span>25%</span></li>
                </ul>
              </div>
              <div class="zx">
                <div class="zx-pip"></div>
                <p>6#变压器</p>
                <ul>
                  <li><span>IA:</span> <span>1.3 A</span></li>
                  <li><span>IB:</span> <span>1.3 A</span></li>
                  <li><span>IC:</span> <span>1.3 A</span></li>
                  <li><span>P:</span> <span>1.3 kW</span></li>
                  <li><span>负载率:</span> <span>25%</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content2">
          <div class="overview">
            <p>运行总览</p>
            <div class="item1">
              <div class="colorDiv"></div>
              <div style="position: absolute;top: 1%;left: 10%;">
                <span
                  style="font-size: 16px;margin-right: 50px;color: rgb(14, 155, 234);"
                  >安全运行天数</span
                >
                <span class="font">{{ rightInfo.runday.data || "901" }}</span>
                <span class="font" style="font-size: 9px;margin-left: 50px;"
                  >天</span
                >
              </div>
              <div
                style="position: absolute;bottom: 13%;left: 10%;color: rgb(14, 155, 234);;"
              >
                最后巡检时间:&nbsp;&nbsp;{{
                  rightInfo.runday.time || "暂无数据"
                }}
              </div>
            </div>
            <div class="item1">
              <div class="colorDiv">
                <span class="dutyPeople">值班人员</span>
                <img
                  src="../pic/flat.png"
                  style="top:14%;left:1292%;"
               
                  class="imgStyle"
                />
                <img
                  src="../pic/flat.png"
                  style="top:14%;left:1892%;"
              
                  class="imgStyle"
                />
                <img
                  src="../pic/flat.png"
                  style="top:14%;left:2492%;"
               
                  class="imgStyle"
                />
              </div>
            </div>
            <div class="monitorContent">
              <div class="border1"></div>
              <div class="border2"></div>
              <div class="border3"></div>
              <div class="border4"></div>
              <div
                class="monitorItem"
                style="top:0;left:-2%"
           
              >
                <img src="../static/svg/temperature.svg" />
                <div class="des1">温度(℃)</div>
                <div class="des2">{{ temperature }}</div>
              </div>
              <div
                class="monitorItem"
                style="top:0;left:33%"
            
              >
                <img src="../static/svg/humidity.svg" />
                <div class="des1">湿度(%)</div>
                <div class="des2">{{ humidity }}</div>
              </div>
              <div
                class="monitorItem"
                style="top:0;right:6%"
             
              >
                <img src="../static/svg/smokeSensation.svg" />
                <div class="des1">烟感</div>
                <div class="des2">{{ smokeStatus }}</div>
              </div>
              <div class="monitorItem" style="bottom:0;left:-2%">
                <img src="../static/svg/accessControl.svg" />
                <div class="des1">门禁</div>
                <div class="des2">{{ doorStatus }}</div>
              </div>
              <div
                class="monitorItem"
                style="bottom:0;left:33%"
            
              >
                <img src="../static/svg/monitor.svg" />
                <div class="des1">监控(台)</div>
                <div class="des2">{{ monitorStatus }}</div>
              </div>
              <div
                class="monitorItem"
                style="bottom:0;right:6%"
              
              >
                <img src="../static/svg/waterImmersion.svg" />
                <div class="des1">水浸</div>
                <div class="des2">{{ waterStatus }}</div>
              </div>
            </div>
            <div
              class="right-table"
              style="top:49%;width:100%"
            >
              <h4>
                <span>警告信息</span>
              </h4>
              <div class="more" v-if="rightInfo.alarms.length > 0">
                更多信息
              </div>
              <div class="more" v-if="rightInfo.alarms.length == 0">
                暂无告警
              </div>
              <table class="desk-table">
                <thead>
                  <tr>
                    <th>监测目标</th>
                    <th>当前状态</th>
                    <th>监测时间</th>
                  </tr>
                </thead>
              </table>
              <div class="desk-table2">
                <table class="desk-table">
                  <thead>
                    <tr v-for="item in rightInfo.alarms">
                      <td style="text-align:center;">{{ item.location }}</td>
                      <td style="text-align:center;">{{ item.content }}</td>
                      <td style="text-align:center;">{{ item.alarmTime }}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "hospitalFc",
  components: {},
  data() {
    return {
      list: [],
      rightInfo: {
        //右边信息
        runday: {
          data: null,
          time: null,
        },
        monitor: [], //监控
        th: [], //温湿度
        door: [], //门禁
        smoke: [], //烟感
        water: [], //水浸
        alarms: [],
      },
    };
  },
  computed:{
    temperature: function () {
					let comm = false, value = 0, count = 0;
					if (!this.rightInfo.th.length)
						return "未装备";
					for (let item of this.rightInfo.th) {
						comm = (true == item.comstatus) || comm;
						if (item.comstatus) {
							count++;
							value += parseFloat(item.tem);
						}
					}
					if (!comm)
						return "通讯异常";
					return (value / count).toFixed(1);
				},
				humidity: function () {
					let comm = false, value = 0, count = 0;
					if (!this.rightInfo.th.length)
						return "未装备";
					for (let item of this.rightInfo.th) {
						comm = (true == item.comstatus) || comm;
						if (item.comstatus) {
							count++;
							value += parseFloat(item.hum);
						}
					}
					if (!comm)
						return "通讯异常";
					return (value / count).toFixed(1);
				},
				doorStatus: function () {
					let comm = false;
					if (!this.rightInfo.door.length)
						return "未装备";
					for (let item of this.rightInfo.door) {
						comm = (true == item.comstatus) || comm;
					}
					if (comm)
						return "正常";
					else return "通讯异常";
				},
				smokeStatus: function () {
					let comm = false, sm = 0, count = 0;
					if (!this.rightInfo.smoke.length)
						return "未装备";
					for (let item of this.rightInfo.smoke) {
						comm = (true == item.comstatus) || comm;
						if (item.comstatus) {
							sm += parseFloat(item.sm);
							count++;
						}
					}
					if (!comm)
						return "通讯异常";
					return (sm / count).toFixed(1);
				},
				waterStatus: function () {
					let comm = false, status = false;
					if (!this.rightInfo.water.length)
						return "未装备";
					for (let item of this.rightInfo.water) {
						comm = (true == item.comstatus) || comm;
						if (item.comstatus)
							status = (true == item.sostatus) || status;
					}
					if (!comm)
						return "通讯异常";
					if (status)
						return "水浸";
					else return "正常";
				},
				monitorStatus: function () {
					if (!this.rightInfo.monitor.length)
						return "未装备";
					return this.rightInfo.monitor.length;
				},
  },
  mounted: function() {
    this.$nextTick(() => {});
  },

  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
input[type="date"]::-webkit-inner-spin-button {
  visibility: hidden;
}
input[type="date"]::-webkit-clear-button {
  display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator {
  background-color: transparent;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
.acDC-center {
  font-family: "PingFang SC", "Microsoft YaHei";
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(
    rgb(17, 15, 46),
    rgb(28, 30, 84),
    rgb(15, 15, 45)
  );
  min-height: 100vh;
  padding: 20px;
}
.acDC-title {
  text-align: center;
}
.acDC-title span {
  display: inline-block;
  position: relative;
  width: 400px;
  height: 36px;
  line-height: 32px;
  color: aqua;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 4px;
}
.acDC-title span::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.25);
  transform: scaleY(1.1) perspective(30px) rotateX(3deg);
  transform-origin: bottom;
}
.acDC-button-group {
  display: inline-block;
  /* height: 36px; */
}
.acDC-button-group > button {
  border: 1px solid #d6d6d6;
  border-right: none;
  background-color: transparent;
  color: #fff;
  padding: 0 10px;
  font-weight: 100;
}
.acDC-button-group > button:first-child {
  border-radius: 4px 0 0 4px;
}
.acDC-button-group > button:last-child {
  border-radius: 0 4px 4px 0;
  border-right: 1px solid #d6d6d6;
}
.acDC-select-button {
  border-color: #0299fc !important;
  border-right: 1px solid #0299fc !important;
  color: #0299fc !important;
}
.vs-row1 {
  margin: 10px;
  padding-bottom: 10px;
  border: 1px solid aqua;
  .indicators {
    width: 98%;
    min-width: 1000px;
    height: auto;
    min-height: 800px;
    margin: 0 auto;
    background: transparent;
    display: flex;
    .content1 {
      width: 70%;
      position:relative;
      .pd-bg1{
        position:absolute;
        width:50px;
        left:22.5%;
        top:9%;
        height:80px;
      }
      .pd-bg2{
        position:absolute;
        width:50px;
        height:80px;
        left:72.2%;
        top:9%;
      }
      .chart-title {
        margin: 0;
        background-color: #292c75;
        width: 250px;
        margin: auto;
        text-align: center;
        padding: 5px 0;
        font-weight: 700;
      }

      .chart-title span {
        display: inline-block;
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 bottom,
          from(#aaf8fb),
          to(#439cf9)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .sub2-chart {
        box-sizing: border-box;
        border: 1px solid #292c75;
        box-shadow: 0 0 150px rgba(255, 255, 255, 0.1) inset;
        height: 100%;
        min-height: 500px;
      }

      #sub2_chart1 {
        width: 100%;
        min-height: 250px;
      }

      .by-box {
        display: flex;
        justify-content: space-around;
      }

      .by {
        box-sizing: border-box;
        position: relative;
        width: 100px;
        height: 200px;
        background-size: contain;
        background-position: center;
        text-align: center;
        padding-top: 12px;
        background-repeat: no-repeat;
      }

      .by > p:nth-child(2) {
        position: relative;
        font-size: 18px;
        top: 20px;
      }

      #pip1,
      #pip2 {
        position: relative;
        left: 49px;
        top: 41px;
        height: 50px;
        width: 2px;
        background-color: #3dbeff;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }

      .zx-box {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
      }

      .zx {
        margin-top: 50px;
        position: relative;
        padding: 10px;
        width: 120px;
        border-radius: 10px;
        color: #fff;
        background-color: rgba(135, 142, 205, 0.1);
        box-shadow: 0 0 80px rgba(255, 255, 255, 0.1) inset;
      }

      .zx-pip-h {
        border-top: 2px solid #3dbeff;
        margin: 0 79px;
        height: 0;
        background-color: #3dbeff;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }

      .zx-h-box {
        position: absolute;
        top: 81px;
        left: 495px;
      }

      .zx-pip {
        position: absolute;
        left: 59px;
        top: -50px;
        height: 50px;
        width: 2px;
        background-color: #3dbeff;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
      }

      .zx p {
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        margin: 0 0 10px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #007eff;
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 bottom,
          from(#aaf8fb),
          to(#439cf9)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .zx ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      .zx ul li {
        height: 24px;
        line-height: 24px;
      }

      .zx ul li span:nth-child(1) {
        color: #007eff;
      }

      .zx ul li span:nth-child(2) {
        font-weight: 700;
        padding-left: 2px;
      }
    }
    .content2 {
      width: 30%;
      .overview {
        width: 100%;
        height: 100%;
        border-top:1px solid aqua;
        border-left: 2px solid aqua;
        background: rgb(7, 10, 61);
      }

      .overview > p {
        margin-top:20px;
        text-align: center;
        line-height: 0px;
        color: aqua;
        font-size: 18px;
        font-weight: 700;
      }

      .item1 {
        width: 93%;
        height: 10%;
        margin: 3% auto;
        box-sizing: border-box;
        border: 1px solid #292c75;
        box-shadow: 0 0 50px rgba(255, 255, 255, 0.1) inset;
        padding: 20px 0;
        position: relative;
      }

      .font {
        font-size: 28px;
        font-weight: 700;
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 bottom,
          from(#aaf8fb),
          to(#439cf9)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .colorDiv {
        position: absolute;
        width: 3%;
        height: 69%;
        left: 0px;
        background-color: rgb(0, 255, 255);
        margin-top: -2%;
      }

      .dutyPeople {
        font-size: 16px;
        position: absolute;
        top: 29%;
        left: 338%;
        width: 64px;
        color: rgb(14, 155, 234);
      }

      .dutyPeople > img {
        border-radius: 50%;
      }

      .monitorContent {
        width: 93%;
        height: 22%;
        margin: 3% auto;
        box-sizing: border-box;
        border: 1px solid #292c75;
        box-shadow: 0 0 50px rgba(255, 255, 255, 0.1) inset;
        padding: 20px 0;
        position: relative;
        display:flex;
      }

     
      
    .monitorItem {
			width: 33%;
			height: 48%;
      
			position: absolute;
      img{
        position:absolute;
        left:16px;
        top:8px;
        width:40px;
        height:50px;
      }
      .des1{
        position:absolute;
        left:58px;
        top:16px;
      }
      .des2{
        position:absolute;
        left:25px;
        top:30px;
      }
		} 
    .monitorItem :nth-child(1){
      margin-left:2%;
    } 
    .monitorItem :nth-child(4){
      margin-left:2%;
    }
      

      
      .imgStyle {
        position: absolute;
        border-radius: 50%;
        height: 75%;
        cursor: pointer;
      }
      .more {
        top: 97.3%;
        right: 44%;
        font-size: 8px;
        cursor: pointer;
        color: rgb(6, 119, 241);
      }
      .right-table {
        padding: 20px;
      }

      .right-table h4 {
        padding: 8px 40px;
        background-color: #292c75;
      }

      .right-table h4 span {
        background-image: -webkit-gradient(
          linear,
          0 0,
          0 bottom,
          from(#aaf8fb),
          to(#439cf9)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .desk-table {
        border-collapse: collapse;
        width: 100%;
        color: #fff;
      }

      .desk-table td,
      .desk-table th {
        height: 36px;
        padding: 2px 10px;
      }

      .desk-table td {
        text-align: center;
        height: 30px;
        padding: 2px 10px;
      }

      .desk-table thead tr {
        color: #007eff;
      }

      .desk-table tbody tr td:last-child {
        color: #19c6db;
      }

      .desk-table tbody tr:nth-child(even) {
        background-color: rgba(68, 110, 255, 0.25);
      }

      .desk-table2 {
        border: 4px solid rgba(41, 44, 117, 0.5);
        padding: 10px;
        border-radius: 4px;
      }

      .desk-table th {
        width: 25%;
      }

      .desk-table2 td {
        width: 25%;
      }
    }
  }
}
.vs-form {
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
}
.vs-form input[type="date"] {
  width: 150px;
  font-family: "Microsoft YaHei";
  margin: 0 4px;
  font-size: 16px;
  border: 1px solid aqua;
  background-color: transparent;
  color: aqua;
  padding: 4px;
  border-radius: 2px;
}
.vs-text {
  width: 100px;
  margin: 0 20px;
  font-size: 24px;
  font-weight: 700;
  border-left: 8px solid #ff6507;
  border-right: 8px solid #4fa1fd;
}
.vs-line {
  width: 80%;
  margin: 0 10%;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  background-image: linear-gradient(
    110deg,
    #fd4525,
    #ff6507 66.9%,
    #ff6507 67%,
    #4fa1fd 67.01%,
    #0772ff
  );
}
.vs-t {
  padding-top: 4px;
  width: 80%;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
}
.vs-t > span > strong {
  font-size: 28px;
}
.vs-t > div {
  display: inline-block;
  position: relative;
  z-index: 2;
  width: 250px;
  height: 70px;
  line-height: 32px;
  color: #fff;
}
.vs-t > div::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #05cc99;
  transform: scaleY(2.4) perspective(18px) rotateX(-20deg);
  transform-origin: top;
}
.vs-t-data {
  display: flex;
  justify-content: center;
  height: 50px;
  padding: 8px 0;
}
.vs-t-data p {
  margin: 0;
  width: 120px;
  height: 22px;
}
.vs-t-data strong {
  font-size: 20px;
  font-weight: 700;
}
.vs-t-data > div:nth-child(1) {
  flex-grow: 0;
  text-align: right;
  padding-right: 8px;
  border-right: 1px solid #fff;
}
.vs-t-data > div:nth-child(2) {
  flex-grow: 0;
  padding-left: 8px;
  text-align: left;
  border-left: 1px solid #fff;
}
.vs-row1-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vs-row1-chart1 {
  width: 300px;
  height: 300px;
}
.vs-row1-chart2 {
  width: 250px;
  height: 300px;
}
.vs-row1-center-data {
  width: 160px;
}
.vs-row1-center-data strong {
  font-size: 16px;
}
.vs-row1-center-data span {
  color: #05cc99;
  font-weight: 700;
}
.vs-row2 {
  display: flex;
}
.vs-row2 > div {
  width: 50%;
  height: 260px;
  padding: 10px;
}
.vs-row2-chart > div {
  height: 240px;
  border: 1px solid aqua;
}
.vs-row3 {
  border: 1px solid aqua;
  margin: 10px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vs-row3-data > p {
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0 0 0;
}
.vs-row3-data > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vs-row3-data > div {
  font-size: 16px;
}
.vs-row3-data > div > div:nth-child(1),
.vs-row3-data > div > div:nth-child(2) {
  text-align: right;
}
.vs-row3-data > div > div {
  width: 150px;
}
.vs-row3-data > div > div:nth-child(2) span,
.vs-row3-data > div > div:nth-child(4) span {
  display: inline-block;
  width: 150px;
  height: 12px;
  border-radius: 6px;
  background-color: #ff6507;
}
.vs-row3-data > div > div:nth-child(4) span {
  background-color: #4fa1fd;
}
.vs-row3-data > div > div:nth-child(5),
.vs-row3-data > div > div:nth-child(4) {
  text-align: left;
}
.vs-row3-chart {
  padding: 10px;
  width: calc(50% - 370px);
}
.vs-row3-chart > p {
  margin: 4px;
  font-size: 16px;
}
.vs-row3-chart > div {
  width: 100%;
  height: 180px;
}
</style>
