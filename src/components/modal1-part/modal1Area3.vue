<!-- 组件说明 -->
<template>
  <div class="modal1-area3">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal1-img" src="../../pic/dbg6.png" />
    <div class="title">能耗数字化管理</div>
    <div class="part1">
      <div class="part1-title">能耗分类节能分析</div>
      <div class="part1-des">
        <div>
          <span>本年累计节能</span
          ><span style="margin-left:5%;">48.9吨标煤</span>
        </div>
        <div><span>节能率</span><span style="margin-left:6%;">13.8%</span></div>
        <div>
          <span>本年度累计节约费用</span
          ><span style="margin-left:5%;">20.6万元</span>
        </div>
      </div>
      <div class="part1-echarts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">月能耗节能分析</div>
      <div class="part2-echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="part3-title">当年成本能耗</div>
      <div class="part3-des">
        <div class="des1">本年度累计能耗<br />305.6吨标煤</div>
        <div class="des2">本年度累计成本<br />124.1万元</div>
      </div>
      <div class="part3-echarts" ref="part3Echarts"></div>
    </div>
    <div class="part4">
      <div class="part4-title">昨日设备用能分析</div>
      <div class="part4-content">
        <!--<div class="part4-des">
          <a-button style="width:50%;margin-top:5%;">昨日</a-button><br />
          <a-button style="width:50%;margin-top:5%;">上月</a-button><br />
          <a-button style="width:50%;margin-top:5%;">去年</a-button>
        </div>-->
        <div class="part4-echarts" ref="part4Echarts"></div>
      </div>
    </div>
    <div class="part5">
      <div class="part5-title">昨日能耗</div>
      <div class="part5-des">
        <div class="des1">昨日总能耗成本<br />6124元</div>
        <div class="des2">昨日节约费用<br />490元</div>
      </div>
      <div class="part5-echarts" ref="part5Echarts"></div>
    </div>
    <div class="part6">
      <div class="part6-title">昨日区域用能量分析</div>
      <!--<div class="part6-des">
        <a-button style="width:30%;margin-left:3%;">昨日</a-button>
        <a-button style="width:30%;margin-left:3%;">上月</a-button>
        <a-button style="width:30%;margin-left:3%;">去年</a-button>
      </div>-->
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
        color: ["#36c8c8"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["节约费用", "节约能耗"],
          textStyle: {
            fontSize: 15, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
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
            data: ["水", "电", "气"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 2, //这里是为了突出显示加上的
              },
            },
          },
        ],
        yAxis: [
          {
            name: "吨标煤",
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
            name: "节约能耗",
            type: "bar",
            barWidth: "60%",
            data: [0.2, 29.0, 19.7],
          },
          {
            name: "节约费用",
            type: "line",
            data: [1.1, 15.8, 4.7],
          },
        ],
      },
      part2Echarts: null,
      option2: {
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
            data: ["1月", "2月", "3月"],
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
            name: "吨标煤",
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
            data: [24.9, 14.2, 9.8],
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
          data: ["总能耗", "成本"],
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
            name: "能耗(吨标煤)",
            min: 0,
            max: 50,
            interval: 5,
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
            name: "成本(万元)",
            min: 0,
            max: 60,
            interval: 10,
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
        ],
        series: [
          {
            name: "总能耗",
            type: "bar",
            data: [54.0, 35.1, 35.0],
          },
          {
            name: "成本",
            type: "line",
            yAxisIndex: 1,
            data: [24, 18, 15],
          },
        ],
      },
      part4Echarts: null,
      option4: {
        // legend: {
        //   top: "bottom",
        //   left: "left",
        //   textStyle: {
        //     fontSize: 12, //字体大小
        //     color: "#ffffff", //字体颜色
        //   },
        // },
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        tooltip: {
          trigger: "item",
        },
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
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}:{d}%",
                },
                labelLine: { show: true },
              },
            },
            data: [
              { value: 28.59, name: "空调" },
              { value: 20.72, name: "照明" },
              { value: 26.28, name: "动力" },
              { value: 10.6, name: "特殊" },
              { value: 13.8, name: "综合" },
            ],
          },
        ],
      },
      part5Echarts: null,
      option5: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
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
            max: 15000,
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
             itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}:{d}%",
                },
                labelLine: { show: true },
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
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        // legend: {
        //   left: "left",
        //   top: "bottom",
        //   textStyle: {
        //     fontSize: 10, //字体大小
        //     color: "#ffffff", //字体颜色
        //   },
        // },
        tooltip: {
          trigger: "item",
        },
         grid: {
          left: "13%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
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
             itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}{d}%",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      },
      area3Data: {
        totalCoal: "",
        totalFree: "",
        free: "",
        save: "",
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
        //设备用能分析
        url: "/bgapi/vqdisplay/energy/main/getDeviceEnergy",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option4.series[0].data = res.data.body.map.series;
          this.drawEcharts4();
        }
      });
      this.$axios({
        //月能耗节能分析
        url: "/bgapi/vqdisplay/energy/main/getMonthEnergySave",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          // this.option2.xAxis[0].data = res.data.body.map.xAxis;
          this.option2.series[0].data = res.data.body.map.series[0].data;
          this.drawEcharts2();
        }
      });
      this.$axios({
        //年能耗成本
        url: "/bgapi/vqdisplay/energy/main/getYearEnergyPrice",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.area3Data.totalCoal = res.data.body.totalCoal;
          this.area3Data.totalFree = res.data.body.totalFree;
          this.option3.xAxis[0].data = res.data.body.map.xAxis;
          this.option3.series = res.data.body.map.series;
          this.option3.legend.data = res.data.body.map.legend;
          this.drawEcharts3();
        }
      });
      this.$axios({
        //能耗分类节能分析
        url: "/bgapi/vqdisplay/energy/main/getYearEnergyTypeSave",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option1.xAxis[0].data = res.data.body.map.xAxis;
          this.option1.series = res.data.body.map.series;
          this.option1.legend.data = res.data.body.map.legend;
          this.drawEcharts1();
        }
      });
      this.$axios({
        //昨日区域用能分析
        url: "/bgapi/vqdisplay/energy/main/getYesterdayAreaEnergy",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option6.series[0].data = res.data.body.map.series;
          this.drawEcharts6();
        }
      });
      this.$axios({
        //设备昨日能耗
        url: "/bgapi/vqdisplay/energy/main/getYesterdayEnergy",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.area3Data.free = res.data.body.free;
          this.area3Data.save = res.data.body.save;
          this.option5.series[0].data = res.data.body.map.series;
          this.drawEcharts5();
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getData();
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
.modal1-area3 {
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
      width: 100%;
      height: 70%;
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
      display: flex;
      .des1 {
        width: 20%;
        margin-left: 20%;
        text-align: center;
        border: 1px solid #ffffff;
      }
      .des2 {
        width: 20%;
        margin-left: 20%;
        text-align: center;
        border: 1px solid #ffffff;
      }
    }
    .part3-echarts {
      margin-top: 5%;
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
    .part4-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .part4-des {
        width: 30%;
      }
      .part4-echarts {
        margin-top: -8%;
        width: 65%;
        height: 110%;
      }
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
      margin-top: -5%;
      width: 100%;
      height: 80%;
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
