<template>
  <div class="acDC-center">
    <div class="acDC-title">
      <span>数字管理-指标管理</span>
    </div>
    <div class="vs-row1">
      <div
        class="indicators"
        :style="{ minHeight: targetListArray.length > 0 ? '800px' : '400px' }"
      >
        <div class="timeBar">
          <div class="timeItem">
            指标
          </div>
          <div class="timeItem" style="width: 20%;">
            {{ new Date().getFullYear() }}年度
          </div>
          <div class="timeItem" style="width: 20%;">
            1~{{ new Date().getMonth() + 1 }}月累计
          </div>
          <div class="timeItem" style="width: 20%;">
            本月
          </div>
          <div class="timeItem" style="width: 30%;">
            图表
          </div>
        </div>
        <div class="content">
          <div class="targetContent">
            <template v-for="(item, index) in targetListArray">
              <div :class="`quota${index}`" style="width:100%;" :key="index">
                <quota :target="item"></quota>
              </div>
            </template>
          </div>
          <div class="chartContent" v-show="targetListArray.length > 0">
            <div class="chart">
              <p>关键指标折线图</p>
              <div id="chart1" ref="chart1" style="width:100%;height:280px;"></div>
            </div>

            <div class="chart">
              <p>管理运营支撑指标</p>
              <div id="chart3" ref="chart3"  style="width:100%;height:280px;"></div>
            </div>

            <div class="chart">
              <p>业务运营支撑指标</p>
              <div id="chart2"  ref="chart2"  style="width:100%;height:280px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import quota from './quota'
import { targetData ,sumData} from '../mixins/targetData.js'
import { numTransToChinese } from '../mixins/utils.js'
export default {
  name: "hospitalFb",
  components:{
    quota
  },
  data() {
    return {
       targetListArray: [],
       list:[],
       targetData,
       sumTargetData:sumData,
       targetLevelColorList: [
        "#1890ff",
        "#2fc25b",
        "#facc13",
        "#8543e0",
        "#13c2c2",
        "#ff7600",
      ], //指标等级颜色
      chart1:null,
      chart2:null,
      chart3:null,
       option1: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        grid: {
          top: "13%",
          bottom: "25%",
        },
         textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        legend: {
          data: ["能耗达标率", "安全达标率","服务达标率","运营达标率"],
          bottom: "3%",
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },

        xAxis: {
          type: "category",
          data: [
            "11月",
            "12月",
            "1月",
            "2月",
            "3月",
            "4月",
          ],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgb(11,134,175)",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          min: 0,
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["rgb(9,65,115)"],
              type: "dashed",
            },
          },
        },
        series: [
          {
            barWidth: "19%",
            name: "能耗达标率",
            type: "line",
            barGap: 0,
            data: [55, 32, 42, 34, 91, 95],
            color: "#38a0ff",
          },
          {
            barWidth: "19%",
            name: "安全达标率",
            type: "line",
            barGap: 0,
            data: [71, 82, 91, 64, 90, 70, 80],
            color: "#4ecb73",
          },
          {
            barWidth: "19%",
            name: "服务达标率",
            type: "line",
            barGap: 0,
            data: [80, 82, 81, 74, 61, 75, 65],
            color: "#fbd437",
          },
          {
            barWidth: "19%",
            name: "运营达标率",
            type: "line",
            barGap: 0,
            data: [61, 61, 71, 72, 75, 82, 99],
            color: "#9966cc",
          }
        ],
      },
        option2: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        grid: {
          top: "13%",
          bottom: "25%",
        },
         textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        legend: {
          data: ["节能改造", "设备优化","报修服务","巡检服务","保养服务"],
          bottom: "3%",
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },

        xAxis: {
          type: "category",
          data: [
            "11月",
            "12月",
            "1月",
            "2月",
            "3月",
            "4月",
          ],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgb(11,134,175)",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          min: 0,
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["rgb(9,65,115)"],
              type: "dashed",
            },
          },
        },
        series: [
          {
            barWidth: "19%",
            name: "节能改造",
            type: "bar",
            barGap: 0,
            data: [85, 86, 84, 89, 90, 92],
            color: "#38a0ff",
          },
          {
            barWidth: "19%",
            name: "设备优化",
            type: "bar",
            barGap: 0,
            data: [83, 87, 81,81, 80, 95],
            color: "#4ecb73",
          },
          {
            barWidth: "19%",
            name: "报修服务",
            type: "bar",
            barGap: 0,
            data: [81, 82, 83, 85, 97, 82],
            color: "#fbd437",
          },
          {
            barWidth: "19%",
            name: "巡检服务",
            type: "bar",
            barGap: 0,
            data: [75, 67, 74, 79, 70, 78],
            color: "#9966cc",
          },
            {
            barWidth: "19%",
            name: "保养服务",
            type: "bar",
            barGap: 0,
            data: [89, 76, 74, 89, 90, 94],
            color: "#435188",
          },
          
        ],
      },
        option3: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        grid: {
          top: "13%",
          bottom: "25%",
        },
         textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        legend: {
          data: ["计划运营", "项目运营","执行运营"],
          bottom: "3%",
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },

        xAxis: {
          type: "category",
          data: [
            "11月",
            "12月",
            "1月",
            "2月",
            "3月",
            "4月",
          ],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgb(11,134,175)",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          max: 120,
          min: 0,
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["rgb(9,65,115)"],
              type: "dashed",
            },
          },
        },
        series: [
          {
            barWidth: "19%",
            name: "项目运营",
            type: "bar",
            barGap: 0,
            data: [87, 89, 85, 89, 83, 82,],
            color: "#38a0ff",
          },
          {
            barWidth: "19%",
            name: "计划运营",
            type: "bar",
            barGap: 0,
            data: [83, 89, 95, 89, 93, 92,],
            color: "#4ecb73",
          },
          {
            barWidth: "19%",
            name: "执行运营",
            type: "bar",
            barGap: 0,
            data: [80, 79, 85, 89, 83, 91,],
            color: "#fbd437",
          },
        ],
      },
    };
  },
  mounted: function() {  
        this.createTargetList(targetData)
        this.$nextTick(()=>{
            this.drawEcharts1()
        })
      
  },

  computed: {},
  methods: {
    drawEcharts1() {
       this.chart1=this.$echarts.init(this.$refs.chart1)
       this.chart1.setOption(this.option1)
        this.chart2=this.$echarts.init(this.$refs.chart2)
       this.chart2.setOption(this.option2)
        this.chart3=this.$echarts.init(this.$refs.chart3)
       this.chart3.setOption(this.option3)
       window.onresize = function() {
        this.chart1.resize();
         this.chart2.resize();
          this.chart3.resize();
      };
    },
    drawEcharts2() {
      
    },
    drawEcharts3() {
      
    },
    createTargetList(list) {
      //处理指标数据
      var targetList = [];
      var pieList=[]; //图表三所需数据
      var pieNameList=[]
      if (list && list.length > 0) {
        list.forEach((item1) => {
          var obj1 = {
            targetLevel: `${numTransToChinese(item1.type_name)}级指标`,
            color: this.targetLevelColorList[item1.type_name - 1],
            targetTypeList: [],
          };
          if (item1.children && item1.children.length > 0) {
            item1.children.forEach((item2) => {
              var obj2 = {
                typeName: item2.type_name,
                targetList: [],
              };
              pieNameList.push(item2.type_name)
              if (item2.children && item2.children.length > 0) {
                item2.children.forEach((item3) => {
                  var obj3 = {
                    targetName: item3.type_name,
                    targetDataList: [],
                  };
                  if (this.sumTargetData.hasOwnProperty(item3.type_code)) {
                    var countObj3Value = () => {
                      if (
                        !this.sumTargetData[item3.type_code].month_plan_status
                      ) {
                        return `${
                          this.sumTargetData[item3.type_code].msum_result
                            ? this.sumTargetData[item3.type_code].msum_result
                            : 0
                        }`;
                      } else {
                        if (
                          this.sumTargetData[item3.type_code]
                            .month_plan_status < 6
                        ) {
                          return `${
                            this.sumTargetData[item3.type_code].msum_result
                              ? this.sumTargetData[item3.type_code].msum_result
                              : 0
                          }`;
                        }
                        if (
                          (this.sumTargetData[
                            item3.type_code
                          ].month_plan_status = 6)
                        ) {
                          return `${
                            this.sumTargetData[item3.type_code].month_result
                              ? this.sumTargetData[item3.type_code].month_result
                              : 0
                          }`;
                        }
                      }
                    };

                    var countObj1 = {
                      done: this.sumTargetData[item3.type_code].year_result
                        ? this.sumTargetData[item3.type_code].year_result
                        : this.sumTargetData[item3.type_code].sum_result
                        ? this.sumTargetData[item3.type_code].sum_result
                        : 0,
                      total: this.sumTargetData[item3.type_code].year_value
                        ? this.sumTargetData[item3.type_code].year_value
                        : null,
                    };
                    var countObj2 = {
                      done: this.sumTargetData[item3.type_code].sum_result
                        ? this.sumTargetData[item3.type_code].sum_result/this.sumTargetData[item3.type_code].count_type
                        : 0,
                      total: this.sumTargetData[item3.type_code].sum_value
                        ? this.sumTargetData[item3.type_code].sum_value/this.sumTargetData[item3.type_code].count_type
                        : null,
                    };
                    var countObj3 = {
                      done: countObj3Value(),
                      total: this.sumTargetData[item3.type_code].month_value
                        ? this.sumTargetData[item3.type_code].month_value
                        : null,
                    };
                    obj3.targetDataList.push(countObj1, countObj2, countObj3);
                  }
                  obj2.targetList.push(obj3);
                });
              }
              obj1.targetTypeList.push(obj2);
            });
          }
          targetList.push(obj1);
        });
      }
      console.log(targetList);
      this.targetListArray=targetList
    },
  },
};
</script>
<style  lang="scss"  scoped>
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
    background:transparent;
    .content {
      width: 100%;
      min-width: 1400px;
      height: auto;
      display: flex;
      .targetContent {
        width: 70%;
        height: 100%;
        .quota0/deep/.title1 {
          border-left: 4px solid #1890ff;
        }
        .quota0/deep/.title2 {
          border-left: 2px solid #1890ff;
        }
        .quota1/deep/.title1 {
          border-left: 4px solid #2fc25b;
        }
        .quota1/deep/.title2 {
          border-left: 2px solid #2fc25b;
        }
        .quota2/deep/.title1 {
          border-left: 4px solid #facc13;
        }
        .quota2/deep/.title2 {
          border-left: 2px solid #facc13;
        }
        .quota3/deep/.title1 {
          border-left: 4px solid #8543e0;
        }
        .quota3/deep/.title2 {
          border-left: 2px solid #8543e0;
        }
        .quota4/deep/.title1 {
          border-left: 4px solid #13c2c2;
        }
        .quota4/deep/.title2 {
          border-left: 2px solid #13c2c2;
        }
        .quota5/deep/.title1 {
          border-left: 4px solid #ff7600;
        }
        .quota5/deep/.title2 {
          border-left: 2px solid #ff7600;
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

    .head {
      width: 100%;
      height: 5.8%;
      .title {
        font-size: 16px;
        margin: 1% 1%;
        padding-top: 10px;
        padding-left: 10px;
      }
      .select {
        position: absolute;
        right: 2%;
        top: 1%;
      }
    }
    .timeBar {
      width: 98.2%;
      height: 4%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding-left: 1.5%;
      margin-top: 1.6%;
      .timeItem {
        width: 10%;
        height: 37px;
        text-align: center;
        font-size: 15px;
        line-height: 2.5;
        background: #002140;
        color: aliceblue;
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
