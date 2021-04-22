<!-- 组件说明 -->
<template>
  <div class="modal7-area2">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal7-img" src="../../pic/dbg7.png" />
    <div class="title">智慧后勤运维服务管理系统</div>
    <div class="part1">
      <div class="title1">保养项目</div>
      <div class="part1-echarts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="title2">巡检设备</div>
      <div class="part2-echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="title3">今日报修项目</div>
      <div class="part3-content">
        <div class="part3-left">
          <div class="water" style="top:19.3%;left:3.3%">
            <div class="water1" style="left:5%;top:2%">报修数</div>
            <div class="water2" style="right:1%;top:54%">-条</div>
          </div>
          <div class="water" style="top:31.3%;left:3.3%">
            <div class="water1" style="left:5%;top:2%">处理完成数</div>
            <div class="water2" style="right:1%;top:54%">-条</div>
          </div>
          <div class="water" style="top:43.3%;left:3.3%">
            <div class="water1" style="left:5%;top:2%">整体满意度</div>
            <div class="water2" style="right:1%;top:54%">100%</div>
          </div>
        </div>
        <div class="part3-echarts" ref="part3Echarts"></div>
      </div>
    </div>
    <div class="part4">
      <div class="title4">设备生命周期</div>
      <div class="part4-content">
         <div class="item4" v-for="(item,index) in list1" >
             <a-progress type="circle" :percent="item.num" :format="percent => `${percent}%`" :width="60" />
             <div>{{item.name}}</div>
         </div>
       
      </div>
    </div>
    <div class="part5">
      <div class="title5">运维费用</div>
      <div class="part5-echarts" ref="part5Echarts"></div>
    </div>
    <div class="part6">
      <div class="title6">设备报修</div>
      <div class="part6-echarts" ref="part6Echarts"></div>
    </div>
    <div class="part7">
      <div class="title7">服务质量</div>
      <div class="part7-echarts" ref="part7Echarts"></div>
    </div>
  </div>
</template>

<script>
//import x from ''
import echarts from 'echarts'
export default {
  components: {},
  data() {
    return {
      part1Echarts: null,
      part2Echarts: null,
      part3Echarts: null,
      part5Echarts: null,
      part6Echarts: null,
      part7Echarts: null,
      list1:[
          {
              name:"再用设备",
              num:100
          },
          {
              name:"重要设备",
              num:90
          },
          {
              name:"在保设备",
              num:70
          },
          {
              name:"脱保设备",
              num:60
          },
          {
              name:"异常设备",
              num:30
          },
          {
              name:"待修设备",
              num:10
          }
      ],
      option1: {
        color: [
          "rgb(25, 144, 252)",
          "rgb(48, 194, 90)",
          "aqua",
          "rgb(249, 204, 39)",
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["电梯养护", "消防设施养护", "路灯养护", "医院养护"],
          bottom: "3%",
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 8,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "1%",
          bottom: "16%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          max: 30,
          min: 0,
          axisLabel: {
            color: "white",
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
        yAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月"],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "white",
              fontSize: 10,
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
        series: [
          {
            name: "电梯养护",
            type: "bar",
            data: [22, 23, 30, 24, 19, 23],
            label: {
              show: true,
              position: "insideRight",
            },
          },
          {
            name: "消防设施养护",
            type: "bar",
            data: [12, 13, 11, 4, 19],
            label: {
              show: true,
              position: "insideRight",
            },
          },
          {
            name: "路灯养护",
            type: "bar",
            data: [22, 18, 19, 23, 29],
            label: {
              show: true,
              position: "insideRight",
            },
          },
          {
            name: "医院养护",
            type: "bar",
            data: [15, 22, 21, 15, 19],
            label: {
              show: true,
              position: "insideRight",
            },
          },
        ],
      },
      option2: {
        color: [
          "rgb(25, 144, 252)",
          "rgb(48, 194, 90)",
          "aqua",
          "rgb(249, 204, 39)",
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["电梯", "空调", "路灯", "锅炉"],
          bottom: "3%",
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "0%",
          bottom: "13%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
          max: 7,
          min: 0,
          axisLabel: {
            color: "white",
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
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月"],
          axisLabel: {
            interval: 10,
            textStyle: {
              color: "white",
              fontSize: 10,
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
        series: [
          {
            name: "电梯",
            type: "bar",
            data: [2, 3, 4, 5, 3],
          },
          {
            name: "空调",
            type: "bar",
            data: [5, 3, 2, 5, 2],
          },
          {
            name: "路灯",
            type: "bar",
            data: [4, 7, 4, 5, 2],
          },
          {
            name: "锅炉",
            type: "bar",
            data: [6, 4, 3, 5, 6],
          },
        ],
      },
      option3: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        grid: {
          top: "0%",
          bottom: "3%",
        },
        legend: {
          right: "3%",
          bottom: 0,
          data: [
            "电梯故障",
            "空调故障",
            "表计故障",
            "照明故障",
            "排污设施故障",
          ],
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 13,
          },
          icon: "circle",
          itemHeight: 10,
          itemWidth: 10,
        },
        series: [
          {
            name: "评审情况",
            type: "pie",
            radius: ["30%", "40%"],
            center: ["45%", "50%"],
            data: [
              { value: 0, name: "电梯故障" },
              { value: 0, name: "空调故障" },
              { value: 0, name: "表计故障" },
              { value: 0, name: "照明故障" },
              { value: 0, name: "排污设施故障" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            labelLine: {
              normal: {
                length: 10, // 改变标示线的长度
                lineStyle: {
                  color: "white", // 改变标示线的颜色
                },
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: "white", // 改变标示文字的颜色
                },
              },
            },
          },
        ],
      },
      option5: {
        legend: {
          data: ["人工费（万元）", "耗材费（万元）"],
          bottom: "0%",
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        grid: {
          x: 23,
          y: 8,
          x2: 10,
          y2: 46,
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月"],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "white",
              fontSize: 10,
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
          max: 20,
          min: 0,
          axisLabel: {
            color: "white",
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
            name: "人工费（万元）",
            type: "bar",
            barGap: 0,
            data: [6, 6, 9, 14, 18],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(210,49,233)" },
              { offset: 1, color: "rgb(45,58,251)" },
            ]),
          },
          {
            name: "耗材费（万元）",
            type: "bar",
            barGap: 0,
            data: [4, 4, 5.5, 8, 13],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(253,187,65)" },
              { offset: 1, color: "rgb(182,44,63)" },
            ]),
          },
        ],
      },
      option6: {
        legend: {
          data: ["报修数", "处理数"],
          bottom: "0%",
          textStyle: {
            //图例文字的样式
            color: "white",
            fontSize: 10,
          },
          icon: "rectangle",
          itemHeight: 10,
          itemWidth: 10,
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        grid: {
          x: 23,
          y: 8,
          x2: 10,
          y2: 46,
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月"],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "white",
              fontSize: 10,
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
          max: 20,
          min: 0,
          axisLabel: {
            color: "white",
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
            name: "报修数",
            type: "bar",
            barGap: 0,
            data: [6, 6, 9, 14, 18],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(254,118,110)" },
              { offset: 1, color: "rgb(255,147,66)" },
            ]),
          },
          {
            name: "处理数",
            type: "bar",
            barGap: 0,
            data: [4, 4, 5.5, 8, 13],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(9,134,224)" },
              { offset: 1, color: "rgb(42,174,165)" },
            ]),
          },
        ],
      },
      option7: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "black",
              backgroundColor: "aqua",
              borderRadius: 3,
              padding: [3, 5],
              fontSize: "48.6%",
            },
          },
          indicator: [
            { name: "结果满意度", max: 9 },
            { name: "及时率", max: 9 },
            { name: "服务态度", max: 9 },
            { name: "贡献", max: 9 },
            { name: "专业水平", max: 9 },
          ],
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
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [1, 2, 3, 4, 5],
                name: "预算分配（Allocated Budget）",
              },
              {
                value: [6, 5, 4, 3, 2],
                name: "实际开销（Actual Spending）",
              },
              {
                value: [3, 2, 1, 6, 5],
                name: "实际开销1（Actual Spending1）",
              },
            ],
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
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
      this.drawEcharts3();
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
.modal7-area2 {
  width: 100%;
  height: 100%;
  position: relative;
  color: #ffffff;
  .modal7-img {
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
    left: 43.5%;
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
    padding: 0.5vw 1vw 0.5vw 1vw;
    .title1 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part1-echarts {
      width: 100%;
      height: 90%;
    }
  }
  .part2 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    top: 51.96%;
    padding: 0.5vw 0.4vw 0.5vw 0.2vw;
    left: 20.99%;
    .title2 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part2-echarts {
      width: 100%;
      height: 90%;
    }
  }
  .part3 {
    position: absolute;
    width: 28.85%;
    height: 42.99%;
    left: 35.57%;
    padding: 0.5vw 0.4vw 0.5vw 0.2vw;
    top: 18.87%;
    .title3 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part3-content {
      width: 100%;
      height: 100%;
      display: flex;
      .part3-left {
        width: 40%;
        .water{
            width: 20%;
    		height: 10%;
			background-color: rgb(31, 200, 219);
			background-image: linear-gradient(141deg,rgb(146, 54, 238) 0%,rgb(31, 200, 219) 51%,rgb(20, 174, 207) 75%);
			color: rgb(255, 255, 255);
			opacity: 0.95;
			position: absolute;
			border-radius: 2%;
        }
      }
      .part3-echarts {
        width: 60%;
        height: 80%;
      }
    }
  }
  .part4 {
    position: absolute;
    width: 14.06%;
    height: 21.13%;
    padding: 0.5vw 0.4vw 0.5vw 0.2vw;
    left: 35.71%;
    top: 62.78%;
    .title4 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part4-content{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        .item4{
            margin-top:0.2vw;
            width:33%;
            text-align:center;
            /deep/ .ant-progress-text{
                color:#ffffff;
            }

        }
    }
  }
  .part5 {
    position: absolute;
    width: 14.06%;
    height: 21.13%;
    left: 50.15%;
    top: 62.78%;
    padding: 0.5vw 0.4vw 0.5vw 0.2vw;
    .title5 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part5-echarts {
      width: 100%;
      height: 90%;
    }
  }
  .part6 {
    position: absolute;
    width: 14.27%;
    height: 31.75%;
    top: 18.87%;
    left: 64.74%;
    padding: 0.5vw 0.4vw 0.5vw 0.2vw;
    .title6 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part6-echarts {
      width: 100%;
      height: 90%;
    }
  }
  .part7 {
    position: absolute;
    top: 51.96%;
    width: 14.27%;
    height: 31.75%;
    padding: 0.5vw 0.4vw 0.5vw 0.2vw;
    left: 64.74%;
    .title7 {
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
    }
    .part7-echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
