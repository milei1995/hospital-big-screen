<!--
 * @Author: your name
 * @Date: 2020-08-27 19:40:55
 * @LastEditTime: 2021-04-20 19:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\area8.vue
-->
<!-- 组件说明 -->
<template>
  <div class="area8-content">
    <div class="part1">
      <div v-for="item in part1List" class="part1-des">
        <span class="des1" style="margin-left:7%;margin-top:2%;"
          >{{ item.name }}(%)</span
        >
        <div class="des2" style="width:30%;margin-left:8%;">
          <span style="display:flex;width:100%;">
            <span style="display:inline-block;width:30%;text-align:center;">{{ item.num1 }}/{{ item.num2 }}</span>
            <span style="margin-left:40%;">{{ parseInt(item.num1*100/item.num2) }}%</span>
          </span>
          <a-progress
            :showInfo="false"
            strokeColor="rgb(118,243,180)"
            :percent="parseInt((item.num1 * 100) / item.num2)"
          />
        </div>
        <div class="des3" style="width:30%;margin-left:3%;">
          <span style="display:flex;width:100%;"
            >
            <span style="display:inline-block;width:30%;text-align:center;">{{ item.num3 }}/{{ item.num4 }}</span>
            <span style="margin-left:40%;">{{parseInt(item.num3*100/item.num4)}}%</span>
          </span>
          <a-progress
            :showInfo="false"
            strokeColor="rgb(118,243,180)"
            :percent="parseInt((item.num3 * 100) / item.num4)"
          />
        </div>
      </div>
    </div>
    <div class="part2" ref="chart" style="margin-top:-8%;"></div>
  </div>
</template>

<script>
import { targetData } from "../mixins/targetData.js";
//import x from ''
export default {
  components: {},
  data() {
    return {
      part1List: [
        {
          name: "能耗达标率",
          num1: 88,
          num2: 100,
          num3: 85,
          num4: 100,
        },
        {
          name: "安全达标率",
          num1: 100,
          num2: 100,
          num3: 100,
          num4: 100,
        },
        {
          name: "服务达标率",
          num1: 93,
          num2: 95,
          num3: 90,
          num4: 95,
        },
        {
          name: "运营达标率",
          num1: 85,
          num2: 90,
          num3: 87,
          num4: 90,
        },
      ],
      chart: null,
      option: {
        color: ["#8A4FCD", "#2DA7AC", "#FD1549", "#FF9148"],
        title: {},
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["能耗达标率", "安全达标率", "服务达标率", "运营达标率"],
          bottom: "-3%",
          left: "center",
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 10,
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "5%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: { show: false },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["11月", "12月", "1月", "2月", "3月", "4月"],
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          min: 80,
          interval: 5,
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            },
          },
           splitLine: {
              show: false, //不显示分隔线
            },
        },
        series: [
          {
            name: "能耗达标率",
            type: "line",

            data: [95, 90, 86, 93, 88, 85],
          },
          {
            name: "安全达标率",
            type: "line",

            data: [100, 100, 100, 100, 100, 100],
          },
          {
            name: "服务达标率",
            type: "line",

            data: [88, 93, 95, 92, 90, 94],
          },
          {
            name: "运营达标率",
            type: "line",

            data: [85, 88, 93, 90, 95, 96],
          },
        ],
      },
    };
  },
  computed: {},
  methods: {
    drawCharts() {
      this.chart = this.$echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
      window.onresize = function() {
        this.chart.resize();
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawCharts();
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" src="">
.area8-content {
  width: 100%;
  height: 100%;
  color: #fafbfc;
  position: relative;
  .part1 {
    position: absolute;
    width: 95%;
    height: 40%;
    top: 9%;
    left: 0%;
    .part1-des {
      width: 100%;
      height: 25%;
      display: flex;
      /deep/ .ant-progress-text {
        color: #fafbfc;
      }
    }
  }
  .part2 {
    position: absolute;
    top: 50.6%;
    width: 95%;
    height: 60%;
    z-index: 9;
  }
}
</style>
