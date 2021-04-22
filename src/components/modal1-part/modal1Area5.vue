<!-- 组件说明 -->
<template>
  <div class="modal1-area4">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal1-img" src="../../pic/dbg6.png" />
    <div class="title">中医科能耗分析</div>
    <div class="part1">
      <div class="part1-title">年各办公室用能分析</div>
      <div class="part1-echarts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">年办公室异常使用分析</div>
      <div class="part2-echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="part3-title">实时电量</div>
      <!---<div class="part3-des">
        <span>类别:</span>
        <a-select
          style="margin-left:5px;width:20%;z-index:999;"
          default-value="126231467413dww"
          @change="handleChange"
          size="small"
        >
          <a-select-option :value="item.id" v-for="(item, index) in officeList">
            {{ item.name }}
          </a-select-option> </a-select
        ><br />
      </div>-->
      <div class="part3-echarts" ref="part3Echarts"></div>
    </div>
    <div class="part4">
      <div class="part4-title">年各设备开启时长</div>
      <div class="part4-echarts" ref="part4Echarts"></div>
    </div>
    <div class="part5">
      <div class="part5-title">科室年总用能分析</div>
      <div class="part5-des">
        <span>合计成本</span> <span style="margin-left:5%;">23664元</span>
      </div>
      <div class="part5-echarts" ref="part5Echarts"></div>
    </div>
    <div class="part6">
      <div class="part6-title">年各办公室节能分析</div>
      <div class="part6-des">
        <span>年累计节约成本</span> <span style="margin-left:5%;">5664元</span>
      </div>
      <div class="part6-echarts" ref="part6Echarts"></div>
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
            data: [
              "201",
              "202",
              "203",
              "204",
              "205",
              "206",
              "207",
              "208",
              "209",
              "210",
              "211",
              "212",
            ],
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
            data: [47, 81, 74, 78, 89, 76, 52, 42, 45, 56, 81, 56],
          },
        ],
      },
      part2Echarts: null,
      option2: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          left: "left",
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
              { value: 7.12, name: "201" },
              { value: 7.02, name: "202" },
              { value: 9.66, name: "203" },
              { value: 14.75, name: "204" },
              { value: 18.72, name: "205" },
              { value: 5.09, name: "206" },
              { value: 18.72, name: "207" },
              { value: 21.36, name: "208" },
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
      part3Echarts: null,
      option3: {
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
        tooltip: {
          trigger: "axis",
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
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260, 159, 321, 118, 320, 322],
            type: "line",
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
            data: ["空调", "照明", "插座"],
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
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          left: "left",
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
              { value: 7.12, name: "201" },
              { value: 7.02, name: "202" },
              { value: 9.66, name: "203" },
              { value: 14.75, name: "204" },
              { value: 18.72, name: "205" },
              { value: 5.09, name: "206" },
              { value: 18.72, name: "207" },
              { value: 21.36, name: "208" },
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
      part5Echarts: null,
      option5: {
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
      part6Echarts: null,
      option6: {
        legend: {
          top: "85%",
          left: "left",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        tooltip: {
          trigger: "item",
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
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 28.59, name: "201" },
              { value: 20.72, name: "202" },
              { value: 26.28, name: "203" },
              { value: 10.6, name: "204" },
              { value: 13.8, name: "205" },
            ],
          },
        ],
      },
      officeList: [], //科室列表
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
    getData() {
      this.$axios({
        //科室列表
        url: "/bgapi/vqdisplay/energy/office/getOfficeList",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.officeList = res.data.body.list;
        }
      });
    },
    handleChange(value) {
      this.getPowerTrend(value);
      this.getYearUseTime(value);
    },
    getPowerTrend(id) {
      this.$axios({
        //实时负荷趋势
        url: "/bgapi/vqdisplay/energy/office/getPowerTrend",
        method: "get",
        params: {
          officeId: id,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.option3.xAxis.data = res.data.body.map.xAxis;
          this.option3.series[0].data = res.data.body.map.series[0].data;
          this.drawEcharts3();
        }
      });
    },
    getYearUseTime(id) {
      this.$axios({
        //设备开启时长
        url: "/bgapi/vqdisplay/energy/office/getYearUseTime",
        method: "get",
        params: {
          officeId: id,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.option4.xAxis.data = res.data.body.map.xAxis;
          this.option4.series[0].data = res.data.body.map.series[0].data;
          this.drawEcharts4();
        }
      });
    },
  },
  mounted() {
    this.getData();
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
      this.getPowerTrend("126231467413dww");
      // this.getYearUseTime("126231467413dww");
      this.drawEcharts4();
      this.drawEcharts5();
      this.drawEcharts6();
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
    left: 47%;
    color: rgb(87, 236, 243);
    font-size: 1vw;
    font-weight: bold;
    position: absolute;
  }
  .part1 {
    position: absolute;
    width: 14.27%;
    height: 31.76%;
    top: 18.87%;
    left: 20.99%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part1-echarts {
      margin-top: -18%;
      width: 100%;
      height: 100%;
    }
  }
  .part2 {
    position: absolute;
    width: 14.27%;
    height: 32.76%;
    top: 50.9%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 20.99%;
    .part2-echarts {
      margin-top: -15%;
      width: 100%;
      height: 95%;
    }
  }
  .part3 {
    position: absolute;
    width: 28.85%;
    height: 42.99%;
    left: 35.57%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 18.87%;
    .part3-des {
      margin-top: 5%;
      display: flex;
      .des1 {
        width: 30%;
        margin-left: 3%;
      }
      .des2 {
        width: 30%;
        margin-left: 3%;
      }
      .des3 {
        width: 30%;
        margin-left: 3%;
      }
    }
    .part3-echarts {
      margin-top: -5%;
      width: 100%;
      height: 80%;
    }
  }
  .part4 {
    position: absolute;
    width: 29.06%;
    height: 21.13%;
    left: 35.57%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 62.78%;
    .part4-echarts {
      margin-left: 10%;
      margin-top: -5%;
      width: 80%;
      height: 100%;
    }
  }
  .part5 {
    position: absolute;
    width: 14.27%;
    height: 31.76%;
    left: 64.74%;
    top: 18.99%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part5-des {
      margin-top: 5%;
      display: flex;
      .des1 {
        width: 40%;
        margin-left: 5%;
        text-align: center;
        border: 1px solid #ffffff;
      }
      .des2 {
        width: 40%;
        margin-left: 5%;
        text-align: center;
        border: 1px solid #ffffff;
      }
    }
    .part5-echarts {
      margin-top: -10%;
      width: 100%;
      height: 90%;
    }
  }
  .part6 {
    position: absolute;
    width: 14.27%;
    height: 32.76%;
    top: 50.9%;
    left: 64.74%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part6-des {
      margin-top: 5%;
    }
    .part6-echarts {
      margin-top: -15%;
      width: 100%;
      height: 90%;
    }
  }
}
</style>
