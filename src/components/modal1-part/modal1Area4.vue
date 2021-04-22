<!-- 组件说明 -->
<template>
  <div class="modal1-area4">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal1-img" src="../../pic/dbg6.png" />
    <div class="title">分户能耗数字化管理</div>
    <div class="part1">
      <div class="part1-title">各科室能耗分析</div>
      <div class="part1-echarts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">年各区域设备开启时长分析</div>
      <div class="part2-echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="part3-title">各区域累计月用量</div>
      <div class="part3-des1">
        <div>本年累计能耗</div>
        <div>305.6吨标煤</div>
      </div>
      <div class="part3-des2">
        <div>本年累计能耗成本</div>
        <div>124.1万元</div>
      </div>
      <div class="part3-echarts" ref="part3Echarts"></div>
    </div>
    <div class="part4">
      <div class="part4-title">各区域人均能耗排名</div>
      <div class="part4-echarts" ref="part4Echarts"></div>
    </div>
    <div class="part5">
      <div class="part5-title">各区域节能分析</div>
      <div class="part5-des">
        <span>年累计节约</span> <span style="margin-left:5%;">20.6万元</span>
      </div>
      <div class="part5-echarts" ref="part5Echarts"></div>
    </div>
    <div class="part6">
      <div class="part6-title">年区域异常使用分析</div>
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
              { value: 7.12, name: "中医" },
              { value: 7.02, name: "儿科" },
              { value: 9.66, name: "骨科" },
              { value: 14.75, name: "妇产科" },
              { value: 18.72, name: "康复科" },
              { value: 5.09, name: "神经内科" },
              { value: 18.72, name: "外科" },
              { value: 21.36, name: "脑外科" },
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
        color: ["#36C8C8", "#4ECB73", "#FE8F44", "#D84C7D"],
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
          data: ["门诊", "住院", "行政", "后勤"],
          top: "bottom",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["空调", "照明", "插座"],
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
            name: "门诊",
            type: "bar",
            data: [11, 21, 31, 41],
          },
          {
            name: "住院",
            type: "bar",
            data: [25, 28, 59.67],
          },
          {
            name: "行政",
            type: "bar",
            data: [35, 23, 48, 61],
          },
          {
            name: "后勤",
            type: "bar",
            data: [50, 68, 79, 81],
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
          data: ["门诊楼", "后勤楼", "住院楼"],
          top: "bottom",
          textStyle: {
            fontSize: 10, //字体大小
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
            name: "能耗(吨)",
            axisLabel: {
              formatter: "{value}",
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
            max: 5,
            interval: 1,
            axisLabel: {
              formatter: "{value}万元",
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
            name: "门诊楼",
            type: "bar",
            data: [54.0, 35.1, 35.0],
          },
          {
            name: "门诊楼",
            type: "line",
            yAxisIndex: 1,
            data: [24, 18, 15],
          },
          {
            name: "后勤楼",
            type: "bar",
            data: [54, 31.1, 39.0],
          },
          {
            name: "后勤楼",
            type: "line",
            yAxisIndex: 1,
            data: [30, 13, 25],
          },
          {
            name: "住院楼",
            type: "bar",
            data: [51.0, 39.1, 42.0],
          },
          {
            name: "住院楼",
            type: "line",
            yAxisIndex: 1,
            data: [55, 65, 18],
          },
        ],
      },
      part4Echarts: null,
      option4: {
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
            min: 50,
            max: 10000,
            minSize: "20%",
            maxSize: "110%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "right",
            },
            legend: "item",
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}",
                },
                labelLine: { show: true },
              },
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 12,
              },
            },
            data: [],
          },
        ],
      },
      part5Echarts: null,
      option5: {
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
            radius: ["40%", "60%"],
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
             itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{d}%",
                },
                labelLine: { show: true },
              },
              borderColor: "#fff",
              borderWidth: 1,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 28.59, name: "门诊" },
              { value: 20.72, name: "后勤" },
              { value: 26.28, name: "住院" },
              { value: 10.6, name: "行政" },
              { value: 13.8, name: "综合" },
            ],
          },
        ],
      },
      part6Echarts: null,
      option6: {
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
              { value: 31.18, name: "门诊" },
              { value: 46.48, name: "住院" },
              { value: 7.72, name: "行政" },
              { value: 14.62, name: "后勤" },
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
        //区域人均能耗
        url: "/bgapi/vqdisplay/energy/department/getAreaPerPeople",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option4.series[0].data = res.data.body.map.series;
          console.log(this.option4);
          this.drawEcharts4();
        }
      });
      this.$axios({
        //各区域累计月用量
        url: "/bgapi/vqdisplay/energy/department/getMonthAreaEnergy",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option3.legend.data = res.data.body.map.legend;
          this.option3.series = res.data.body.map.series;
          this.option3.xAxis[0].data = res.data.body.map.xAxis;
          this.drawEcharts3();
        }
      });
      this.$axios({
        //各区域设备时长
        url: "/bgapi/vqdisplay/energy/department/getYearAreaUseTime",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          // this.option2.legend.data = res.data.body.map.legend;
          // this.option2.series = res.data.body.map.series;
          // this.option2.xAxis[0].data = res.data.body.map.xAxis;
          this.drawEcharts2();
        }
      });
      this.$axios({
        //年科室能耗分析
        url: "/bgapi/vqdisplay/energy/department/getYearDepartmentEnergy",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          //  this.option1.series[0].data=res.data.body.map.series
          this.drawEcharts1();
        }
      });
      this.$axios({
        //年累计节约费用
        url: "/bgapi/vqdisplay/energy/department/getYearPriceSave",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option5.legend.data = res.data.body.map.legend;
          this.option5.series[0].data = res.data.body.map.series;
          this.drawEcharts5();
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getData();
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
      margin-left: 0%;
      width: 110%;
      height: 100%;
    }
  }
  .part3 {
    position: absolute;
    width: 28.85%;
    height: 42.99%;
    left: 35.57%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 18.87%;
    .part3-des1 {
      position: absolute;
      width: 25%;
      height: 15%;
      text-align: center;
      font-size: 18px;
      top: 10%;
      left: 15%;
      border: 1px solid #fafbfc;
    }
    .part3-des2 {
      position: absolute;
      width: 30%;
      height: 15%;
      text-align: center;
      font-size: 18px;
      top: 10%;
      left: 50%;
      border: 1px solid #fafbfc;
    }
    .part3-echarts {
      position: absolute;
      width: 100%;
      height: 80%;
      z-index: 10;
      top: 20%;
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
      margin-left: 0%;
      margin-top: -12%;
      width: 90%;
      height: 150%;
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
      width: 100%;
      height: 80%;
    }
  }
}
</style>
