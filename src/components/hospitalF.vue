<template>
  <div class="acDC-center">
    <div class="acDC-title">
      <span>水冷机组节能分析</span>
    </div>
    <div >
      <div class="vs-row1">
        <div class="vs-form">
          <div>
            <input type="date" value="2020-09-16" />
            <span>标准模型</span>
          </div>
          <div class="vs-text">VS</div>
          <div>
            <span>实际日模型</span>
            <input type="date" value="2020-09-17" />
          </div>
        </div>
        <div class="vs-line"></div>
        <div class="vs-t">
          <span><strong>8527.2</strong> kWh</span>
          <div>
            <div class="vs-t-data">
              <div>
                <p><strong>2519</strong>kwh</p>
                <p>节能量</p>
              </div>
              <div>
                <p><strong>29.5%</strong></p>
                <p>节能率</p>
              </div>
            </div>
          </div>
          <span><strong>6008.3</strong> kWh</span>
        </div>
        <div class="vs-row1-body">
          <div class="vs-row1-chart1" id="chart1" ref="chart1"></div>
          <div>
            <p><strong>4316</strong>kWh</p>
            <p><strong>1201</strong>kWh</p>
            <p><strong>1157.9</strong>kWh</p>
            <p><strong>500.1</strong>kWh</p>
            <p><strong>9.2</strong>kWh</p>
            <p><strong>1343</strong>kWh</p>
          </div>
          <div>
            <div class="vs-row1-chart2" id="chart2" ref="chart2"></div>
          </div>
          <div class="vs-row1-center-data">
            <p><strong>主机</strong><span> ↓32.54%</span></p>
            <p><strong>冷冻水泵</strong><span> ↓40.58%</span></p>
            <p><strong>冷却水泵</strong><span> ↓17.55%</span></p>
            <p><strong>冷却塔</strong><span> ↓41.35%</span></p>
            <p><strong>补水泵</strong><span> ↓13.04%</span></p>
            <p><strong>末端</strong><span> ↓16.08%</span></p>
          </div>
          <div>
            <div class="vs-row1-chart2" id="chart3" ref="chart3"></div>
          </div>
          <div>
            <p><strong>2911.6</strong>kWh</p>
            <p><strong>713.6</strong>kWh</p>
            <p><strong>954.7</strong>kWh</p>
            <p><strong>293.3</strong>kWh</p>
            <p><strong>8</strong>kWh</p>
            <p><strong>1127.1</strong>kWh</p>
          </div>
          <div class="vs-row1-chart1" id="chart4" ref="chart4"></div>
        </div>
      </div>
      
      <div class="vs-row3">
        <div class="vs-row3-chart">
          <p>水冷机组运行趋势</p>
          <span class="acDC-button-group">
            <button class="acDC-select-button">主机</button
            ><button>冷冻水泵</button><button>冷却水泵</button
            ><button>冷却塔</button>
          </span>
          <div id="chart7" ref="chart7"></div>
        </div>
        <div class="vs-row3-data">
          <p>环境因素</p>
          <div>
            <div>
              <p>(28~38℃)32.2℃</p>
              <p>62%</p>
              <p>1021pa</p>
            </div>
            <div>
              <p><span style="width:104px"></span></p>
              <p><span style="width:93px"></span></p>
              <p><span></span></p>
            </div>
            <div>
              <p><span>室外平均温度</span></p>
              <p><span>室外平均相对湿度</span></p>
              <p><span>室外平均大气压力</span></p>
            </div>
            <div>
              <p><span style="width:106px"></span></p>
              <p><span style="width:72px"></span></p>
              <p><span></span></p>
            </div>
            <div>
              <p>32.3℃(28~38℃)</p>
              <p>48%</p>
              <p>1028pa</p>
            </div>
          </div>
        </div>
        <div class="vs-row3-chart">
          <p>水冷机组运行趋势</p>
          <span class="acDC-button-group">
            <button class="acDC-select-button">主机</button
            ><button>冷冻水泵</button><button>冷却水泵</button
            ><button>冷却塔</button>
          </span>
          <div id="chart8" ref="chart8"></div>
        </div>
      </div>

      <div class="vs-row2">
        <div class="vs-row2-chart">
          <div id="chart5" ref="chart5"></div>
        </div>
        <div class="vs-row2-chart">
          <div id="chart6" ref="chart6"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import BScroll from "better-scroll";
export default {
  name: "hospitalF",
  data() {
    return {
      aBscroll: null,
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      let scrollDom = this.$refs.scrollContent;
      this.aBscroll = new BScroll(scrollDom, {});
      this.drawEcharts1();
      this.drawEcharts2();
      this.drawEcharts3();
      this.drawEcharts4();
    });
  },

  computed: {},
  methods: {
    getData: function() {
      this.$http("/vqdisplay/maintenance/data").then((response) => {
        if (response.status === 200) {
          let _data = response.data.body;
          console.log(_data);
          this.deviceCount = _data.device_count;
          this.urgentCount =
            JSON.stringify(_data.urgent_count) !== "{}"
              ? _data.urgent_count
              : this.urgentCount;
          this.statusCount = _data.status_count;
          this.workLog = _data.work_log;
          this.workInfo = _data.work_info;
          this.myWorkorder = _data.my_workorder;
          this.deviceRunningInfo = _data.deviceRunningInfo;
          this.measureNum = _data.measureNum;
          this.chart1.legend.data = _data.worktype_pie.legend;
          this.chart1.series[0].data = _data.worktype_pie.series;
        }
      });
    },
    getData2: function() {
      this.$http("/vqdisplay/substation/data").then((response) => {
        if (response.status === 200) {
          let _data = response.data.body;
          this.safeDays = _data.safe_days.days;
          this.allload = _data.allload;
          this.meansureCount = _data.meansure_count;
          this.alarmCount = _data.alarm_count.alarmCount;
          this.environment = _data.environment;
        }
      });
    },
    drawEcharts1() {
      var option_pie = {
        color: [
          "#4fa0fd",
          "#5bcb74",
          "#fad33b",
          "#485488",
          "#07ccff",
          "#ff6507",
        ],
        title: {
          text: "子系统能耗占比情况",
          subtext: "(kWh)",
          x: "center",
          textStyle: {
            color: "#ffffff",
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: ["主机", "冷冻水泵", "冷却水泵", "冷却塔", "补水泵", "末端"],
          textStyle: {
            color: "#ffffff",
          },
        },
        series: [
          {
            type: "pie",
            radius: ["25%", "45%"],
            center: ["50%", "50%"],
            data: [
              { value: 4316, name: "主机" },
              { value: 1201, name: "冷冻水泵" },
              { value: 1157.9, name: "冷却水泵" },
              { value: 500.1, name: "冷却塔" },
              { value: 9.2, name: "补水泵" },
              { value: 1343, name: "末端" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      var chart1 = echarts.init(this.$refs.chart1);
      console.log(chart1);
      chart1.setOption(option_pie);
      window.onresize = function() {
        chart1.resize();
      };
      var chart4 = echarts.init(this.$refs.chart4);
      chart4.setOption(option_pie);
      chart4.setOption({
        series: [
          {
            data: [
              { value: 4316, name: "主机" },
              { value: 1201, name: "冷冻水泵" },
              { value: 1157.9, name: "冷却水泵" },
              { value: 500.1, name: "冷却塔" },
              { value: 9.2, name: "补水泵" },
              { value: 1343, name: "末端" },
            ],
          },
        ],
      });
      window.onresize = function() {
        chart4.resize();
      };
    },
    drawEcharts2() {
      var option_bar1 = {
        color: ["#ff6507"],
        grid: {
          left: "0%",
          right: "0%",
          bottom: "15%",
          top: "16%",
        },
        xAxis: {
          show: false,
          type: "value",
          inverse: true,
          max: 5000,
        },
        yAxis: {
          show: false,
          type: "category",
          data: ["末端", "补水泵", "冷却塔", "冷却水泵", "冷冻水泵", "主机"],
        },
        series: [
          {
            type: "bar",
            barWidth: 14,
            data: [1343, 9.2, 500.1, 1157.9, 1201, 4316],
            itemStyle: {
              barBorderRadius: [7, 7, 7, 7],
            },
          },
        ],
      };
      var chart2 = echarts.init(this.$refs.chart2);
      chart2.setOption(option_bar1);
      window.onresize = function() {
        chart2.resize();
      };

      var chart3 = echarts.init(this.$refs.chart3);
      chart3.setOption(option_bar1);
      chart3.setOption({
        color: ["#4fa1fd"],
        xAxis: {
          inverse: false,
        },
        series: [
          {
            data: [1127.1, 8, 293.3, 954.7, 713.6, 2911.6],
            label: { normal: { position: "right" } },
          },
        ],
      });
      window.onresize = function() {
        chart3.resize();
      };
    },
    drawEcharts3() {
      var option_gan = {
        color: ["#4fa1fd"],
        tooltip: {
          show: true,
          axisPointer: {
            type: "shadow",
          },
          trigger:'axis'
        },
        calculable: true,
        yAxis: [
          {
            type: "category",
            splitLine: { show: false },
            data: ["手动模式1", "手动模式2", "手动模式3"],
            inverse: true,
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.7)",
              },
            },
          },
        ],
        xAxis: [
          {
            position: "top",
            type: "value",
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,.7)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              formatter: function(value) {
                var end_time = 819216000000;
                var start_time = 819151200000;
                var date = new Array();
                var i = 1;
                while (end_time > start_time) {
                  var date_formatter = new Date(start_time);
                  var date_time =
                    date_formatter.getHours() +
                    ":" +
                    (date_formatter.getMinutes() === 0
                      ? "00"
                      : date_formatter.getMinutes());
                  date.push(date_time);
                  start_time = start_time + i * 30 * 60 * 1000;
                }
                return date[value * 1];
              },
            },
          },
        ],
        series: [
          {
            name: "辅助",
            type: "bar",
            stack: "总",
            itemStyle: {
              normal: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
              emphasis: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            data: [0, 10, 22],
          },
          {
            name: "手动模式3",
            type: "bar",
            stack: "总",
            data: [0, 0, 10],
          },
          {
            name: "手动模式2",
            type: "bar",
            stack: "总",
            data: [0, 12, 0],
          },
          {
            name: "手动模式1",
            type: "bar",
            stack: "总",
            data: [10, 0, 0],
          },
        ],
      };
      var chart5 = echarts.init(this.$refs.chart5);
      chart5.setOption(option_gan);
      window.onresize = function() {
        chart5.resize();
      };
      var chart6 = echarts.init(this.$refs.chart6);
      chart6.setOption(option_gan);
      chart6.setOption({
        yAxis: {
          data: ["早间模式", "高峰模式", "午休模式", "普通模式", "夜间模式"],
        },
        series: [
          { name: "辅助", stack: "总", type: "bar", data: [0, 3, 11, 15, 23] },
          { name: "早间模式", stack: "总", type: "bar", data: [3, 0, 0, 0, 0] },
          { name: "高峰模式", stack: "总", type: "bar", data: [0, 8, 0, 0, 0] },
          { name: "午休模式", stack: "总", type: "bar", data: [0, 0, 4, 0, 0] },
          { name: "普通模式", stack: "总", type: "bar", data: [0, 0, 0, 8, 0] },
          { name: "夜间模式", stack: "总", type: "bar", data: [0, 0, 0, 0, 7] },
        ],
      });
      window.onresize = function() {
        chart6.resize();
      };
    },
    drawEcharts4() {
      var option_line = {
        tooltip: {
          trigger: "axis",
        },
        color: ["#41bafd", "#c06ed0", "#30ff98", "#ffe730"],
        legend: {
          data: ["出水温度", "室外温度", "主机负荷"],
          bottom: 0,
          textStyle: {
            color: "rgba(255,255,255,.7)",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "16%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "3:00",
            "6:00",
            "9:00",
            "12:00",
            "15:00",
            "18:00",
            "21:00",
            "22:00",
            "24:00",
          ],
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.7)",
            },
          },
        },
        yAxis: [
          {
            type: "value",
            name: "温度",
            max: 40,
            scale: true,
            axisLabel: {
              formatter: "{value} ℃",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.7)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
          {
            type: "value",
            name: "主机负荷",
            axisLabel: {
              formatter: "{value} kW",
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.7)",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "出水温度",
            data: [16, 17.1, 17, 10.5, 9.2, 8.8, 7, 18, 18.6, 18.6],
            type: "line",
            symbol: "circle",
          },
          {
            data: [28, 29, 30.3, 35.4, 37, 38.1, 33.2, 31.5, 30.4, 30.4],
            name: "室外温度",
            type: "line",
            symbol: "circle",
          },
          {
            data: [0, 0, 0, 460, 392, 412, 420, 350, 0, 0],
            yAxisIndex: 1,
            name: "主机负荷",
            type: "line",
            symbol: "circle",
          },
        ],
      };
      var chart7 = echarts.init(this.$refs.chart7);
      chart7.setOption(option_line);
      window.onresize = function() {
        chart7.resize();
      };
      var chart8 = echarts.init(this.$refs.chart8);
      chart8.setOption(option_line);
      chart8.setOption({
        series: [
          {
            name: "出水温度",
            data: [16, 17.1, 5.5, 8.5, 9.2, 11.8, 12, 13.4, 13.6, 13.6],
            type: "line",
            symbol: "circle",
          },
          {
            data: [28, 29, 30.3, 36.4, 37, 38.1, 33.2, 31.5, 30.4, 29.5],
            name: "室外温度",
            type: "line",
            symbol: "circle",
          },
          {
            data: [0, 0, 0, 410, 372, 311, 270, 210, 0, 0],
            yAxisIndex: 1,
            name: "主机负荷",
            type: "line",
            symbol: "circle",
          },
        ],
      });
      window.onresize = function() {
        chart8.resize();
      };
    },
  },
};
</script>
<style scoped>
.echarts {
  height: 250px;
  width: 100%;
}
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
