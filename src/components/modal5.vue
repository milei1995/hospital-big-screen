<!-- 组件说明 -->
<template>
  <div class="modal5-content">
    <img class="cancel5" @click="handleClick5" src="../pic/cancel.png" />
    <img class="modal5-img" src="../pic/dbg7.png" />
    <div class="title">安全指标情况</div>
    <div class="part1">
      <div class="title1">配电安全</div>
      <div class="content1">
        <div class="item1" v-for="(item, index) in list1" :key="index">
          <div class="item1-1">{{ item.name }}</div>
          <div class="item1-2">{{ item.num }}</div>
        </div>
      </div>
      <div class="bottom1">当前待处理告警通知84</div>
    </div>
    <div class="part2">
      <div class="title2">消防安全</div>
      <div class="content2">
        <div class="item2" v-for="(item, index) in list2" :key="index">
          <div class="item2-1">
            <img :src="item.imgUrl" class="item2-1-1" />
            <div class="item2-1-2">
              <div>总数</div>
              <div>{{ item.total }}</div>
            </div>
            <div class="item2-1-3">{{ item.name }}</div>
          </div>
          <div class="item2-2">
            <div class="item2-2-1">
              <img src="../images/yes.svg" class="item2-2-1-1" />
              <div class="item2-2-1-2">{{ item.normal }}</div>
            </div>
            <div class="item2-2-2">
              <img src="../images/no.svg" class="item2-2-2-1" />
              <div class="item2-2-2-2">{{ item.error }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom2" style="text-align:center;">
        设备检测合格率:98%
      </div>
    </div>
    <div class="part3">
      <div class="title3">安全指标总览</div>
      <div class="content3">
        <div class="content3-1">
          <div>年累计巡查次数:30次</div>
          <div>年累计安全活动次数:12次</div>
        </div>
        <div class="content3-2">
          <div>
            累计发现隐患数:<span
              style="color:red;font-size:0.8vw;font-weight:bold;margin-left:1vw;"
              >10</span
            >处
          </div>
          <div>
            累计处理隐患数:<span
              style="color:#3388FF;font-size:0.8vw;font-weight:bold;margin-left:1vw;"
              >9</span
            >处
          </div>
        </div>
      </div>
      <div class="part3-other">
        <div style="font-size:0.9vw;">安全事项计划</div>
        <div>
          <a-button-group>
            <a-button >
              周
            </a-button>
            <a-button >
              月
            </a-button>
            <a-button >
              年
            </a-button>
          </a-button-group>
        </div>
      </div>
      <div class="part3-echarts" id="part3Echarts" ref="part3Echarts"></div>
    </div>
    <div class="part4">
      <div class="title4">应急预案</div>
      <div class="part4-echarts" ref="part4Echarts" id="part4Echarts"></div>
    </div>
    <div class="part5">
      <div class="title5">安全应急小组架构</div>
      <div class="part5-content">
        <div class="content5-1">
          <div class="item5">张师傅</div>
        </div>
        <div class="content5-2">
          <div class="item5">李师傅</div>
          <div class="item5">李师傅</div>
        </div>
        <div class="content5-3">
          <div class="item5">李师傅</div>
          <div class="item5">李师傅</div>
          <div class="item5">李师傅</div>
        </div>
      </div>
    </div>
    <div class="part6">
      <div class="title6">特种设备安全</div>
      <div class="content6">
        <div class="item6" v-for="(item, index) in list6" :key="index">
          <div class="item6-1">{{ item.name }}</div>
          <div class="item6-2">{{ item.num }}</div>
        </div>
      </div>
      <div class="bottom6">认证率：100%</div>
    </div>
    <div class="part7">
      <div class="title7">安防设施</div>
      <div class="content7">
        <div class="item7" v-for="(item, index) in list3" :key="index">
          <div class="item7-1">
            <img :src="item.imgUrl" class="item7-1-1" />
            <div class="item7-1-2">
              <div>总数</div>
              <div>{{ item.total }}</div>
            </div>
            <div class="item7-1-3">{{ item.name }}</div>
          </div>
          <div class="item7-2">
            <div class="item7-2-1">
              <img src="../images/yes.svg" class="item7-2-1-1" />
              <div class="item7-2-1-2">{{ item.normal }}</div>
            </div>
            <div class="item7-2-2">
              <img src="../images/no.svg" class="item7-2-2-1" />
              <div class="item7-2-2-2">{{ item.error }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom7" style="text-align:center;">
        设备检测合格率:98%
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      list1: [
        {
          name: "在线配电房数",
          num: "79",
        },
        {
          name: "离线配电房数",
          num: "0",
        },
        {
          name: "正常配电房数",
          num: "79",
        },
        {
          name: "异常配电房数",
          num: "0",
        },
        {
          name: "按时保养数",
          num: "79",
        },
        {
          name: "未按时保养数",
          num: "0",
        },
      ],
      list2: [
        {
          name: "消防电梯",
          total: 100,
          normal: 99,
          error: 1,
          imgUrl: require("../images/xfdt.svg"),
        },
        {
          name: "消防水箱",
          total: 2,
          normal: 2,
          error: 0,
          imgUrl: require("../images/xfsx.svg"),
        },
        {
          name: "消防电源",
          total: 400,
          normal: 399,
          error: 1,
          imgUrl: require("../images/xfdy.svg"),
        },
        {
          name: "消防水泵",
          total: 4,
          normal: 4,
          error: 0,
          imgUrl: require("../images/xfsb.svg"),
        },
      ],
      list3:[
          {
          name: "摄像头",
          total: 100,
          normal: 99,
          error: 1,
          imgUrl: require("../images/xfdt.svg"),
        },
        {
          name: "门禁",
          total: 2,
          normal: 2,
          error: 0,
          imgUrl: require("../images/xfsx.svg"),
        },
        {
          name: "报警器",
          total: 400,
          normal: 399,
          error: 1,
          imgUrl: require("../images/xfdy.svg"),
        },
        {
          name: "电视强",
          total: 4,
          normal: 4,
          error: 0,
          imgUrl: require("../images/xfsb.svg"),
        },
      ],
      list6: [
        {
          name: "锅炉数量",
          num: "4台",
        },
        {
          name: "正常锅炉数",
          num: "4台",
        },
        {
          name: "电梯数量",
          num: "20部",
        },
        {
          name: "正常电梯数",
          num: "19部",
        },
        {
          name: "气瓶数量",
          num: "15只",
        },
        {
          name: "正常气瓶数",
          num: "14只",
        },
        {
          name: "氧舱数量",
          num: "2只",
        },
        {
          name: "正常氧舱数",
          num: "2只",
        },
      ],
      part3Echarts: null,
      part4Echarts: null,
      option1: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        grid: {
          top: "top",
          left: "-3",
          right: "0",
          bottom: "0",
        },
        color: [
          "#c2c1bd",
          "#00a1e5",
          "#23c768",
          "#e5ce10",
          "#ff7e00",
          "#fe0000",
        ],

        series: [
          {
            name: "类别",
            type: "funnel",
            left: "center",
            width: "90%",
            sort: "ascending",
            label: {
              normal: {
                formatter: "{b}",
              },
            },
            labelLine: {
              normal: {
                show: true,
                length: 30,
              },
            },
            itemStyle: {
              normal: {
                opacity: 0.3,
              },
            },
            tooltip: {
              show: false,
            },

            data: [
              {
                value: 10,
                name: "治安类",
              },
              {
                value: 20,
                name: "用电安全类",
              },
              {
                value: 40,
                name: "消防安全类",
              },
              {
                value: 60,
                name: "特种设备安全类",
              },
              {
                value: 80,
                name: "蒸汽安全类",
              },
              {
                value: 100,
                name: "其他",
              },
            ],
          },

          {
            name: "类别",
            type: "funnel",
            left: "center",
            width: "80%",
            maxSize: "80%",
            sort: "ascending",
            label: {
              normal: {
                position: "inside",
                formatter: "{c}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                },
              },
              emphasis: {
                position: "inside",
                formatter: "{b}: {c}%",
              },
            },
            itemStyle: {
              normal: {
                opacity: 0.8,
                borderColor: "rgba(12, 13, 43, .9)",
                borderWidth: 3,
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                shadowColor: "rgba(0, 0, 0, .6)",
              },
            },

            data: [
              {
                value: 2,
                name: "治安类",
              },
              {
                value: 5,
                name: "用电安全类",
              },
              {
                value: 12,
                name: "消防安全类",
              },
              {
                value: 18,
                name: "特种设备安全类",
              },
              {
                value: 25,
                name: "蒸汽安全类",
              },
              {
                value: 40,
                name: "其他类",
              },
            ],
          },
        ],
      },
      option2: {
        color: ["#4fa1fd"],
        tooltip: {
          show: true,
          axisPointer: {
            type: "shadow",
          },
          formatter: function() {
            return { b } + " : " + { c };
          },
        },
        grid: {
          top: "0",
          left: "15%",
          right: "0",
          bottom: "0",
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
                console.log(date);
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
      },
    };
  },
  computed: {},
  methods: {
    handleClick5() {
      this.$emit("cancelClick");
    },
    drawEcharts1() {
      this.part4Echarts = this.$echarts.init(
        document.getElementById("part4Echarts")
      );
      console.log(this.part4Echarts);
      this.part4Echarts.setOption(this.option1);
      window.onresize = function() {
        this.part4Echarts.resize();
      };
    },
    drawEcharts2() {
      this.part3Echarts = this.$echarts.init(
        document.getElementById("part3Echarts")
      );
      console.log(this.part3Echarts);
      this.part3Echarts.setOption(this.option2);
      window.onresize = function() {
        this.part3Echarts.resize();
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
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
.modal5-content {
  background: rgba(0, 0, 0, 0.66);
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  color: #ffffff;
  top: 0px;
  left: 0px;
  .modal5-img {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .cancel5 {
    position: absolute;
    top: 13%;
    left: 78.5%;
    z-index: 1;
    cursor: pointer;
  }
  .title {
    position: absolute;
    top: 13.7%;
    left: 46%;
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
    .content1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item1 {
        width: 49%;
        margin-top: 0.8vw;
        font-size: 0.7vw;
        text-align: center;
        .item1-1 {
          width: 100%;
        }
        .item1-2 {
          margin-top: 0.4vw;
          width: 100%;
          background-color: rgb(28, 54, 128);
        }
      }
    }
    .bottom1 {
      width: 100%;
      margin-top: 1vw;
      background: rgb(25, 81, 193);
      line-height: 2.3;
      text-align: center;
      font-weight: bold;
      border-radius: 3%;
      color: rgb(255, 99, 106);
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
    .content2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item2 {
        width: 49%;
        height: 4vw;
        margin-top: 0.4vw;
        border-radius: 3%;
        border: 1px solid rgb(137, 187, 222);
        display: flex;
        .item2-1 {
          width: 60%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          .item2-1-1 {
            width: 50%;
            height: 50%;
          }
          .item2-1-2 {
            width: 50%;
            height: 50%;
            text-align: center;
          }
          .item2-1-3 {
            width: 100%;
            text-align: center;
          }
        }
        .item2-2 {
          width: 40%;
          height: 100%;
          .item2-2-1 {
            width: 100%;
            height: 50%;
            display: flex;
            background: rgb(64, 117, 162);
            .item2-2-1-1 {
              width: 50%;
              height: 100%;
            }
            .item2-2-1-2 {
              width: 50%;
              height: 100%;
              line-height: 2.5;
              color: rgb(120, 209, 255);
              text-align: center;
            }
          }
          .item2-2-2 {
            width: 100%;
            height: 50%;
            background: rgb(240, 248, 255);
            display: flex;
            .item2-2-2-1 {
              width: 50%;
              height: 100%;
            }
            .item2-2-2-2 {
              width: 50%;
              height: 100%;
              line-height: 2.5;
              color: rgb(120, 209, 255);
              text-align: center;
            }
          }
        }
      }
    }
    .bottom2 {
      width: 100%;
      margin-top: 0.4vw;
      font-size: 0.8vw;
      text-align: center;
      color: #ffffff;
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
    .content3 {
      width: 100%;
      display: flex;
      margin-top: 0.5vw;
      justify-content: space-between;
      .content3-1,
      .content3-2 {
        width: 49%;
        height: 4vw;
        border: 1px solid white;
        border-radius: 2px;
        text-align: center;
        line-height: 2.5;
      }
    }
    .part3-other{
      display:flex;
      margin-top:1vw;
      width:100%;
      justify-content:space-around;
    }
    .part3-echarts {
      margin-top: 1vw;
      width: 100%;
      height: 50%;
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
    .part4-echarts {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 12vw;
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
    .part5-content {
      width: 100%;
      height: 80%;
      .content5-1,
      .content5-2,
      .content5-3 {
        width: 100%;
        height: 20%;
        margin-top: 1vw;
        display: flex;
        justify-content: space-around;
        .item5 {
          width: 20%;
          height: 100%;
          line-height:2;
          text-align: center;
          font-size:0.7vw;
          background-color: brown;
        }
      }
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
    .content6 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item6 {
        width: 49%;
        margin-top: 0.3vw;
        font-size: 0.7vw;
        text-align: center;
        .item6-1 {
          width: 100%;
        }
        .item6-2 {
          margin-top: 0.4vw;
          width: 100%;
          background-color: rgb(28, 54, 128);
        }
      }
    }
    .bottom6 {
      width: 100%;
      margin-top: 0.3vw;
      background: rgb(25, 81, 193);
      line-height: 2.3;
      text-align: center;
      font-weight: bold;
      border-radius: 3%;
      color: #ffffff;
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
    .content7 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item7 {
        width: 49%;
        height: 4vw;
        margin-top: 0.4vw;
        border-radius: 3%;
        border: 1px solid rgb(137, 187, 222);
        display: flex;
        .item7-1 {
          width: 60%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          .item7-1-1 {
            width: 50%;
            height: 50%;
          }
          .item7-1-2 {
            width: 50%;
            height: 50%;
            text-align: center;
          }
          .item7-1-3 {
            width: 100%;
            text-align: center;
          }
        }
        .item7-2 {
          width: 40%;
          height: 100%;
          .item7-2-1 {
            width: 100%;
            height: 50%;
            display: flex;
            background: rgb(64, 117, 162);
            .item7-2-1-1 {
              width: 50%;
              height: 100%;
            }
            .item7-2-1-2 {
              width: 50%;
              height: 100%;
              line-height: 2.5;
              color: rgb(120, 209, 255);
              text-align: center;
            }
          }
          .item7-2-2 {
            width: 100%;
            height: 50%;
            background: rgb(240, 248, 255);
            display: flex;
            .item7-2-2-1 {
              width: 50%;
              height: 100%;
            }
            .item7-2-2-2 {
              width: 50%;
              height: 100%;
              line-height: 2.5;
              color: rgb(120, 209, 255);
              text-align: center;
            }
          }
        }
      }
    }
    .bottom7 {
      width: 100%;
      margin-top: 0.4vw;
      font-size: 0.8vw;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>
