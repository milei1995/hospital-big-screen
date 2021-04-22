<!-- 组件说明 -->
<template>
  <div class="modal1-area1">
    <img class="cancel1" @click="handleClick1" src="../../pic/cancel.png" />
    <img class="modal1-img" src="../../pic/testbg1-1.png" />
    <!--<div class="title">配电一体化-配电管理</div>
    <div class="part1">
      <h2 class="part1-1" style="color:#ffffff;">高配</h2>
      <div class="part1-des"><span>总用电量</span><span>65000KW</span></div>
      <div class="part1-des"><span>电压等级</span><span>10/0.4KV</span></div>
      <div class="part1-des"><span>总额定容量</span><span>1000KVA</span></div>
      <div class="part1-des"><span>实时负荷</span><span>600KW</span></div>
    </div>
    <div class="part2">
      <h2 class="part2-1" style="color:#ffffff;">低配</h2>
      <div class="part2-des"><span>总用电量</span><span>60000KW</span></div>
      <div class="part2-des"><span>总有功功率</span><span>546.0KW</span></div>
      <div class="part2-des"><span>总无功容量</span><span>25.0KVar</span></div>
      <div class="part2-des"><span>当月最大需量</span><span>870KW</span></div>
    </div>
    <div class="part3">
      <h2 class="part3-1" style="color:#ffffff;">一周发电量曲线</h2>
      <div class="part3-echarts" ref="part3Echarts" id="part3Echarts"></div>
    </div>
    <div class="part4">
       <h2 class="part4-1" style="color:#ffffff;">直流屏</h2>
      <div class="part4-des"><span>输入电压</span><span>380V</span></div>
      <div class="part4-des"><span>输入电流</span><span>5A</span></div>
      <div class="part4-des"><span>输入电压</span><span>110V</span></div>
      <div class="part4-des"><span>输入电流</span><span>20A</span></div>
    </div>
    <div class="part5">
      <h2 class="part5-1" style="color:#ffffff;">一周光伏发电量</h2>
      <div class="part5-echarts" ref="part5Echarts" id="part5Echarts"></div>
    </div>
    <div class="part6">
      <h2 class="part6-1" style="color:#ffffff;">一周储能及用能对比</h2>
      <div class="part6-echarts" ref="part6Echarts" id="part6Echarts"></div>
    </div>-->
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      part5Echarts: null,
      part6Echarts: null,
      part3Echarts: null,
      option1: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
          },
        ],
        series: [
          {
            name: "energy",
            type: "bar",
            barWidth: "60%",
            data: [150, 200, 175, 250, 200, 225, 155],
          },
        ],
      },
      option2: {
        color: ["#3398DB", "#4EC873"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          data: ["chuneng", "yongneng"],
          top: "12%",
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
          },
        ],
        series: [
          {
            name: "chuneng",
            type: "bar",
            barWidth: "20%",
            data: [150, 200, 175, 250, 200, 225, 155],
          },
          {
            name: "yongneng",
            type: "bar",
            barWidth: "20%",
            data: [150, 200, 175, 250, 200, 225, 155],
          },
        ],
      },
      option3: {
         color:["#3398DB", "#4EC873"], 
        title: {
        
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["上月","本月"],
          top:"2%",
           textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 10,
          },

        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {show:false},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
        },
        yAxis: {
          type: "value",
           axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
        },
        series: [
          {
            name: "上月",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "本月",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      },
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  watch: {
    visible: {
      handler(newVisible, oldVisible) {},
      immediate: true,
    },
  },
  computed: {},
  methods: {
    handleClick1() {
      this.$emit("cancelClick");
    },
    drawEcharts1() {
      this.part5ECharts = this.$echarts.init(
        document.getElementById("part5Echarts")
      );
      console.log(this.part5ECharts)
      this.part5ECharts.setOption(this.option1);
      window.onresize = function() {
        this.part5ECharts.resize();
      };
    },
    drawEcharts2() {
      this.part6ECharts = this.$echarts.init(
        document.getElementById("part6Echarts")
      );
      this.part6ECharts.setOption(this.option2);
      window.onresize = function() {
        this.part6ECharts.resize();
      };
    },
    drawEcharts3() {
      this.part3ECharts = this.$echarts.init(
        document.getElementById("part3Echarts")
      );
      this.part3ECharts.setOption(this.option3);
      window.onresize = function() {
        this.part3ECharts.resize();
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
      this.drawEcharts3();
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

<style lang="scss" src="" scoped>
.modal1-area1 {
  width: 100%;
  height: 100%;
  position: relative;
  .modal1-img {
    width: 100%;
    height: 100%;
  }
   .cancel1 {
    position: absolute;
    top: 13.5%;
    left: 87.5%;
    z-index: 1;
    cursor: pointer;
  }
  .title {
    position: absolute;
    font-size: 18px;
    color: rgb(87, 236, 243);
    top: 14%;
    left: 45.5%;
  }
  .part1 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    left: 20.99%;
    top: 18.76%;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    padding: 2% 2% 2% 2%;
    .part1-des {
      display: flex;
      justify-content: space-between;
    }
  }
  .part2 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    top: 51.44%;
    left: 20.99%;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    padding: 2% 2% 2% 2%;
    .part2-des {
      display: flex;
      justify-content: space-between;
    }
  }
  .part3 {
    position: absolute;
    width: 28.75%;
    height: 43.09%;
    left: 35.57%;
    top: 18.76%;
    padding: 2% 2% 2% 2%;
    text-align: center;
    .part3-echarts {
      position: absolute;
      top: 20%;
      left: 0;
      width: 100%;
      height: 70%;
    }
  }
  .part4{
    position:absolute;
    width:28.75%;
    height:21.03%;
    left:35.41%;
    top:62.89%;
    padding: 1% 5% 1% 5%;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
     .part4-des {
      display: flex;
      justify-content: space-between;
    }  
  }
  .part5 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    left: 64.79%;
    top: 18.76%;
    padding-top: 5px;
    text-align: center;
    .part5-echarts {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .part6 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    left: 64.79%;
    top: 51.44%;
    padding-top: 5px;
    text-align: center;
    .part6-echarts {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
