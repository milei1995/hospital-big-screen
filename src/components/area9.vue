<!--
 * @Author: your name
 * @Date: 2020-08-27 20:21:52
 * @LastEditTime: 2021-04-21 09:25:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\area9.vue
-->
<!-- 组件说明 -->
<template>
  <div class="area9-content">
    <div class="part1">
      <span>建议数</span><br />
      <span style="font-size:20px;font-weight:bold;">18</span><span>条</span>
    </div>
    <div class="part2">
      <span>采纳数</span><br />
      <span style="font-size:20px;font-weight:bold;">16</span><span>条</span>
    </div>
    <div class="part3">
      <span>完成数</span><br />
      <span style="font-size:20px;font-weight:bold;">13</span><span>个</span>
    </div>
    <div class="part4">
      <span>未完成数</span><br />
      <span style="font-size:20px;font-weight:bold;">3</span><span>个</span>
    </div>
    <div class="part5">
      <span>完成率</span><br />
      <span style="color:rgb(255,145,72);font-size:26px;margin-left:15%;">81.3%</span>
    </div>
    <div class="part6" ref="chart" style="margin-top:-10%;"></div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      chart: null,
      option: {
        color: ["#1E5F8F"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        textStyle: {
          fontSize: 10,
          color: "#fff",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["11月", "12月", "1月", "2月", "3月", "4月"],
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min:80,
            max:100,
            interval: 5,
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
             splitLine: {
              show: false, //不显示分隔线
            },
          },
        ],
        series: [
          {
            name: "",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [85, 90,  85, 92, 94, 96],
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
.area9-content {
  width: 100%;
  height: 100%;
  color: #fafbfc;
  position: relative;
  .part1 {
    position: absolute;
    width: 22%;
    height: 20%;
    top: 6%;
    left: 5%;
    font-size: 16px;
    text-align: center;
  }
  .part2 {
    position: absolute;
    width: 22%;
    height: 20%;
    top: 6%;
    left: 28%;
    font-size: 16px;
    text-align: center;
  }
  .part3 {
    position: absolute;
    width: 22%;
    height: 20%;
    top: 6%;
    left: 50%;
    font-size: 16px;
    text-align: center;
  }
  .part4 {
    position: absolute;
    width: 22%;
    height: 20%;
    top: 6%;
    left: 72%;
    font-size: 16px;
    text-align: center;
  }
  .part5 {
    position: absolute;
    width: 20%;
    height: 20%;
    top: 47%;
    left: 4%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .part6 {
    position: absolute;
    width: 60%;
    height: 75%;
    top: 41%;
    left: 30%;
    z-index: 9;
  }
}
</style>
