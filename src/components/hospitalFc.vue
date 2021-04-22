<!--
 * @Author: your name
 * @Date: 2021-04-06 10:16:20
 * @LastEditTime: 2021-04-21 13:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\hospitalFc.vue
-->
<template>
  <div class="acDC-center">
    <div class="acDC-title">
      <span>数字管理-项目管理</span>
    </div>
    <div class="vs-row1">
      <div class="indicators">
        <div class="content">
          <div class="targetContent">
            <div class="part1">
              <div class="part1-item"  style="cursor:pointer;" @click="init(item.numClick)" v-for="(item, index) in part1List">
                <div class="des1">{{ item.name }}</div>
                <div class="des2">
                  <span>{{ item.num1 }}</span
                  ><span style="font-size:10px;">个</span>
                </div>
                <div class="des3"></div>
                <div class="des4">
                  <span>{{ item.num2 }}</span
                  ><span style="font-size:10px;">万</span>
                </div>
              </div>
            </div>
            <div class="part2">
              <div class="part2-item">
                <div class="des" style="width:18%;">项目名称</div>
                <div class="des" style="width:18%;">负责人</div>
                <div class="des" style="width:18%;">立项时间</div>
                <div class="des" style="width:18%;">当前阶段</div>
                <div class="des" style="width:28%;">当前进度</div>
              </div>
              <div class="part2-item" v-for="item in part2List">
                <div class="des des-name" style="width:18%;cursor:pointer;" @click="transToXl(item.code)">{{ item.name }}</div>
                <div class="des" style="width:18%;">{{ item.member_name }}</div>
                <div class="des" style="width:18%;">{{ item.create_time }}</div>
                <div class="des" style="width:18%;">{{ item.proj_stages_name }}</div>
                <div class="des" style="width:25%;"><a-progress :percent="item.schedule" /></div>
              </div>
            </div>
          </div>
          <div class="chartContent">
            <div class="chart">
              <p>项目状态分布图</p>
              <div
                id="chart1"
                ref="chart1"
                style="width:100%;height:350px;margin-top:-15%;"
              ></div>
            </div>
            <div class="chart" style="margin-top:15%;">
              <p>项目人员分布图</p>
              <div
                id="chart2"
                ref="chart2"
                style="width:100%;height:350px;margin-top:-15%;"
              ></div>
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
      chart1: null,
      chart2: null,
      chart3: null,
      part1List: [
        {
          name: "项目总数",
          num: 50,
          num2: 9000,
          numClick:'selectAll'
        },
        {
          name: "备案中",
          num1: 32,
          num2: 5000,
          numClick:0
        },
        {
          name: "立项中",
          num1: 12,
          num2: 3000,
          numClick:1
        },
        {
          name: "推进中",
          num1: 0,
          num2: 0,
          numClick:2
        },
        {
          name: "已结项",
          num1: 0,
          num2: 0,
          numClick:3
        },
        {
          name: "已挂起",
          num1: 0,
          num2: 0,
          numClick:4
        },
        {
          name: "已作废",
          num1: 0,
          num2: 0,
          numClick:5
        },
      ],
      part2List: [
      ],
      option1: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
          "#975FE5"
        ],
        legend: {
          left: "center",
          top: "bottom",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "设备运行情况",
            type: "pie",
            radius: "50%",
            data: [
             { value: 31.18, name: "备案" },
              { value: 46.48, name: "立项" },
              { value: 7.72, name: "推进" },
              { value: 14.62, name: "结项" },
              { value:20.56, name:"挂起" },
              { value:35.21 ,name:"作废"}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}:{d}%",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      },
      option2: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          left: "center",
          top: "bottom",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "设备运行情况",
            type: "pie",
            radius: "50%",
            data: [
              { value: 50.18, name: "李丰" },
              { value: 18.48, name: "毛建勋" },
              { value: 7.72, name: "徐海帆" },
              { value: 14.62, name: "梁方明" },
              { value:20.56, name:"沈人怡" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} :{d}%",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      },
    };
  },
  mounted: function() {
    this.init('selectAll')
    this.getStatic()
    this.$nextTick(() => {
      this.drawEcharts1();
    });
  },
  beforeMounted:function(){
    
  },
  computed: {},
  methods: {
    drawEcharts1() {
      this.chart1 = this.$echarts.init(this.$refs.chart1);
      this.chart1.setOption(this.option1);
      this.chart2 = this.$echarts.init(this.$refs.chart2);
      this.chart2.setOption(this.option2);
      window.onresize = function() {
        this.chart1.resize();
        this.chart2.resize();
        this.chart3.resize();
      };
    },
     init(type){
       const params={
         type:type,
         authCode:'6v7be19pwman2fird04gqu53'
       }
       this.$axios({
         url:'/xlapi/project/project',
         method:'post',
         data:params
       }).then(res=>{
         if(res.data.code==200){
           this.part2List=res.data.data.list
         }
       })
     },
     getStatic(){
       const params1={
          member_code:'268yb5ut3fz1owejnxpv49gk',
          authCode:'6v7be19pwman2fird04gqu53'
       }
       const params2={}
       this.$axios({
        url:'/xlapi/project/project/taskStautsCount',
        method:'post',
        data:params1
       }).then(res=>{
          if(res.data.code==200){
              let allMoney = 0,allNum = 0;
            res.data.data.forEach(item=>{
               if(item.proj_stages == 0){//备案
              this.part1List[1].num1 = item.num;
              this.part1List[1].num2 = item.sumMoney_ba;
            }else if(item.proj_stages == 1 || item.proj_stages == 2 || item.proj_stages == 3){//立项||推进||挂起
              this.part1List[item.proj_stages+1].num1 = item.num;
              this.part1List[item.proj_stages+1].num2 = item.sumMoney_lx;
            }else if(item.proj_stages == 4){//结项
              this.part1List[5].num1 = item.num;
              this.part1List[5].num2 = item.sumMoney_jx;
            }else if(item.proj_stages == 5){//作废
              this.part1List[6].num1 = item.num;
              this.part1List[6].num2 = item.sumMoney_jx;
            }
            allNum += item.num;
            allMoney += item.sumMoney_ba;
            })
            this.part1List[0].num1 = allNum;
          this.part1List[0].num2 = allMoney;
          }
       })
     },
     transToXl(code){
       let url='http://127.0.0.1:8045/#/member/login?redirect=%2Fproject%2Fspace%2Ftask%2F'+code+'&loginState=1'
       let url2='http://vpomplus.vkie.cn:9900/#/member/login?redirect=%2Fproject%2Fspace%2Ftask%2F'+code+'&loginState=1'
       window.open(url2)
      
     }
  },
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
    .content {
      width: 100%;
      min-width: 1400px;
      height: auto;
      display: flex;
      .targetContent {
        width: 70%;
        height: 100%;
        .part1 {
          width: 94%;
          margin: 5% 3%;
          height: 100px;
          display: flex;
          border: 1px solid aqua;
          .part1-item {
            width: 14.2%;
            height: 100%;
            position: relative;
            .des1,
            .des2,
            .des3 {
              margin-top: 5%;
            }
          }
        }
        .part2 {
          width: 94%;
          margin: 5% 3%;
          height: 450px;
          border: 1px solid aqua;
          .part2-item {
            width: 100%;
            display: flex;
            height: 9%;
               /deep/ .ant-progress-text{
                color:#ffffff;
              }
            .des {
              display: block;
              height: 100%;
              line-height: 45px;
              text-align: center;
            }
            .des-name:hover{
               color:rgb(0,122,204)
            }
          }
        }
      }
      .chartContent {
        width: 30%;
        height: auto;
        position: relative;
        .chart {
          width: 95%;
          margin-left: 3.5%;
          height: 27.6%;
          min-height: 240px;
          margin-top: 30px;
          right: 1.3%;
          p {
            margin-bottom: 0;
            margin-top: 4%;
            color: #1890ff;
          }
        }
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
