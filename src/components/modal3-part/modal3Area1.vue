<!-- 组件说明 -->
<template>
  <div class="modal1-area4">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal1-img" src="../../pic/dbg7.png" />
    <div class="title">能源设备数字化管理</div>
    <div class="part1">
      <div class="part1-title">中央空调系统</div>
      <div class="part1-des">
        <span>运行策略:</span><span>节能自控</span
        ><span style="margin-left:5%;">开启量:</span><span>12台</span>
      </div>
      <div class="part1-echarts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">末端系统</div>
      <div class="part2-des">
        <span>运行策略:</span><span>人感自控</span
        ><span style="margin-left:5%;">开启量:</span><span>1503台</span>
      </div>
      <div class="part2-echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="part3-title">当前开启量:1562台</div>
      <div>
        <span>年运行能耗:</span><span>46.8吨标煤</span
        ><span style="margin-left:5%;">总节能率:</span><span>25.1%</span
        ><span style="margin-left:5%;">总节约费用:</span><span>16.5万元</span>
      </div>
      <div class="part3-echarts" ref="part3Echarts"></div>
    </div>
    <div class="part4">
      <div class="part4-title">公共照明系统</div>
      <div class="part4-des">
        <span>运行策略:</span><span>照度自控</span
        ><span style="margin-left:5%;">开启量:</span><span>26台</span>
      </div>
      <div class="part4-echarts" ref="part4Echarts"></div>
    </div>
    <div class="part5">
      <div class="part5-title">景观照明系统</div>
      <div class="part5-des">
        <span>运行策略:</span><span>时间自控</span
        ><span style="margin-left:5%;">开启量:</span><span>4台</span>
      </div>
      <div class="part5-echarts" ref="part5Echarts"></div>
    </div>
    <div class="part6">
      <div class="part6-title">新风空调系统</div>
      <div class="part6-des">
        <span>运行策略:</span><span>温度自控</span
        ><span style="margin-left:5%;">开启量:</span><span>15台</span>
      </div>
      <div class="part6-echarts" ref="part6Echarts"></div>
    </div>
    <div class="part7">
      <div class="part7-title">给排水系统</div>
      <div class="part7-des">
        <span>运行策略:</span><span>流量自控</span
        ><span style="margin-left:5%;">开启量:</span><span>4台</span>
      </div>
      <div class="part7-echarts" ref="part7Echarts"></div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      part1Echarts: null,
      option1: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          left: "left",
          top: "85%",
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
              { value: 11.11, name: "节能自控" },
              { value: 26.67, name: "舒适自控" },
              { value: 62.22, name: "综合自控" },
              { value: 33.55, name: "手动自控" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      part2Echarts: null,
      option2: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "0%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "100%",
            // height: {totalHeight} - y - y2,
            min: 5,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "right",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 12,
              },
            },
            data: [
              { value: 53, name: "用电成本" },
              { value: 28, name: "用水成本" },
              { value: 18, name: "用汽成本" },
            ],
          },
        ],
      },
      part3Echarts: null,
      option3: {
        color: ["#36C8C8", "#4ECB73", "#FE8F44"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#ffff",
            },
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        legend: {
          data: ["总能耗", "节约能耗", "成本"],
          textStyle: {
            fontSize: 15, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月"],
            axisPointer: {
              type: "shadow",
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 1, //这里是为了突出显示加上的
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "能耗",
            min: 0,
            max: 80,
            interval: 10,
            axisLabel: {
              formatter: "{value}吨",
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 1, //这里是为了突出显示加上的
              },
            },
             splitLine: {
              show: false, //不显示分隔线
            },
          },
          {
            type: "value",
            name: "成本",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}元",
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 1, //这里是为了突出显示加上的
              },
            },
             splitLine: {
              show: false, //不显示分隔线
            },
          },
        ],
        series: [
          {
            name: "总能耗",
            type: "bar",
            data: [23.2, 25.6, 76.7],
          },
          {
            name: "节约能耗",
            type: "bar",
            data: [26.4, 28.7, 70.7],
          },
          {
            name: "成本",
            type: "line",
            yAxisIndex: 1,
            data: [23.4, 23.0, 16.5],
          },
        ],
      },
      part4Echarts: null,
      option4: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        color: ["#36c8c8"],
        textStyle: {
          fontSize: 15,
          color: "#fff",
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
            data: ["门诊楼", "住院楼", "后勤楼"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 1, //这里是为了突出显示加上的
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
                width: 1, //这里是为了突出显示加上的
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "60%",
            data: [47, 81, 74],
          },
        ],
      },
      part2Echarts: null,
      option2: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "0%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "100%",
            // height: {totalHeight} - y - y2,
            min: 5,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "right",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 12,
              },
            },
            data: [
              { value: 53, name: "未随手关闭" },
              { value: 28, name: "设定温度超限" },
              { value: 18, name: "24小时运行" },
              { value: 25, name: "能耗超限" },
            ],
          },
        ],
      },
      part5Echarts: null,
      option5: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: ["#36c8c8"],
        textStyle: {
          fontSize: 10,
          color: "#fff",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["泛光照明", "路灯", "广告牌", "室外LED"],
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [100, 200, 300, 350],
          },
        ],
      },
      part6Echarts: null,
      option6: {
        color: ["#3AA1FF"],
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
           splitLine: {
              show: false, //不显示分隔线
            },
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260, 159, 321, 118, 320, 322],
            type: "line",
          },
        ],
      },
      part7Echarts: null,
      option7: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        color: ["#36c8c8"],
        textStyle: {
          fontSize: 15,
          color: "#fff",
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
            data: ["生活热水", "生活冷水", "废水污水"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 1, //这里是为了突出显示加上的
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
                width: 1, //这里是为了突出显示加上的
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "60%",
            data: [47, 81, 74],
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
    handleClick7() {
      this.$emit("cancelClick");
    },
    drawEcharts1() {
      this.part1Echarts = this.$echarts.init(this.$refs.part1Echarts);
      this.part1Echarts.setOption(this.option1);
      window.onresize = function() {
        this.part1Echarts.resize();
      };
    },
    drawEcharts2() {
      this.part2Echarts = this.$echarts.init(this.$refs.part2Echarts);
      this.part2Echarts.setOption(this.option2);
      window.onresize = function() {
        this.part2Echarts.resize();
      };
    },
    drawEcharts3() {
      this.part3Echarts = this.$echarts.init(this.$refs.part3Echarts);
      this.part3Echarts.setOption(this.option3);
      window.onresize = function() {
        this.part3Echarts.resize();
      };
    },
    drawEcharts4() {
      this.part4Echarts = this.$echarts.init(this.$refs.part4Echarts);
      this.part4Echarts.setOption(this.option4);
      window.onresize = function() {
        this.part4Echarts.resize();
      };
    },
    drawEcharts5() {
      this.part5Echarts = this.$echarts.init(this.$refs.part5Echarts);
      this.part5Echarts.setOption(this.option5);
      window.onresize = function() {
        this.part5Echarts.resize();
      };
    },
    drawEcharts6() {
      this.part6Echarts = this.$echarts.init(this.$refs.part6Echarts);
      this.part6Echarts.setOption(this.option6);
      window.onresize = function() {
        this.part6Echarts.resize();
      };
    },
    drawEcharts7() {
      this.part7Echarts = this.$echarts.init(this.$refs.part7Echarts);
      this.part7Echarts.setOption(this.option7);
      window.onresize = function() {
        this.part7Echarts.resize();
      };
    },
    getData() {
      this.$axios({
        url: "/bgapi/vqdisplay/device/main/getDeviceOn",
        method: "get",
      }).then((res) => {});
    },
  },
  mounted() {
    this.getData();
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
      this.drawEcharts3();
      this.drawEcharts4();
      this.drawEcharts5();
      this.drawEcharts6();
      this.drawEcharts7();
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
.modal1-area4 {
  width: 100%;
  height: 100%;
  position: relative;
  color: #ffffff;
  .modal1-img {
    width: 100%;
    height: 100%;
  }
  .cancel7 {
    position: absolute;
    top: 13.5%;
    left: 78.5%;
    z-index: 1;
    cursor: pointer;
  }
  .title {
    position: absolute;
    top: 13.7%;
    left: 45%;
    color: rgb(87, 236, 243);
    font-size: 1vw;
    font-weight: bold;
    position: absolute;
  }
  .part1 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    top: 18.87%;
    left: 20.99%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part1-echarts {
      margin-top: -10%;
      width: 100%;
      height: 90%;
    }
  }
  .part2 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    top: 51.96%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 20.99%;
    .part2-echarts {
      width: 100%;
      height: 80%;
    }
  }
  .part3 {
    position: absolute;
    width: 28.85%;
    height: 42.99%;
    left: 35.57%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 18.87%;
    .part3-echarts {
      margin-top: 5%;
      width: 100%;
      height: 80%;
    }
  }
  .part4 {
    position: absolute;
    width: 14.06%;
    height: 21.13%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 35.71%;
    top: 62.78%;
    .part4-echarts {
      margin-top: -15%;
      width: 100%;
      height: 100%;
    }
  }
  .part5 {
    position: absolute;
    width: 14.06%;
    height: 21.13%;
    left: 50.15%;
    top: 62.78%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part5-echarts {
      margin-top: -20%;
      width: 100%;
      height: 100%;
    }
  }
  .part6 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    top: 18.87%;
    left: 64.74%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part6-echarts {
      margin-top: -15%;
      margin-left: 5%;
      width: 100%;
      height: 100%;
    }
  }
  .part7 {
    position: absolute;
    top: 51.96%;
    width: 14.27%;
    height: 31.75%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 64.74%;
    .part7-echarts {
      margin-top: -15%;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
