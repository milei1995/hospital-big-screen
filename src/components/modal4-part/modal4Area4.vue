<!--
 * @Author: your name
 * @Date: 2021-04-02 10:34:18
 * @LastEditTime: 2021-04-22 10:14:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal4-part\modal4Area4.vue
-->
<!-- 组件说明 -->
<template>
  <div class="modal4-area4">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal4-img" src="../../pic/dbg6.png" />
    <div class="title">运维专业化</div>
    <div class="part1">
      <div class="part1-title">保修管理</div>
      <div class="part1-des">
        <span>年报修量:</span><span>1650条</span><br />
        <span>已修数量:</span><span style="">1626条</span
        ><span style="margin-left:5%;">完成率:</span><span>99.6%</span>
      </div>
      <div class="part1-echarts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">巡检管理</div>
      <div class="part2-des">
        <span>年巡检量:</span><span>2640条</span><br />
        <span>已修数量:</span><span style="">2485条</span
        ><span style="margin-left:5%;">完成率:</span><span>98.3%</span>
      </div>
      <div class="part2-echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="part3-title">指标管理</div>
      <div class="part3-des1">
        <span>年运维工单:</span><span>4298条</span><br />
        <span>年运维费:</span><span style="">27.3万元</span>
      </div>
      <div
        class="part3-des2"
        style="display:flex;justify-content:space-around;"
      >
        <a-progress
          type="circle"
          v-for="(item, index) in part3List"
          :key="index"
          :format="() => `${item.name}` + `${item.num}%`"
          :width="80"
          :percent="item.num"
        />
      </div>
      <div class="part3-echarts" ref="part3Echarts"></div>
    </div>
    <div class="part4">
      <div class="title1"  style="text-align:center;font-size:14px;">预警信息</div>
      <div class="des2">
        <span style="width:15%;">序号</span>
        <span style="width:25%;">时间</span>
        <span style="width:35%;">位置/设备</span>
        <span style="width:25%;">内容</span>
      </div>
      <div class="des2" v-for="item in part4List2">
         <span style="width:15%;">{{ item.order }}</span>
        <span style="width:25%;">{{ item.time }}</span>
        <span style="width:35%;">{{ item.position }}</span>
        <span style="width:25%;">{{ item.content }}</span>
      </div>
       <div class="title2"  style="text-align:center;font-size:14px;">报警信息</div>
      <div class="des2">
        <span style="width:15%;">项目名称</span>
        <span style="width:25%;">负责人</span>
        <span style="width:35%;">立项时间</span>
        <span style="width:25%;">当前阶段</span>
      </div>
      <div class="des2" v-for="item in part4List1">
        <span style="width:15%;">{{ item.order }}</span>
        <span style="width:25%;">{{ item.time }}</span>
        <span style="width:35%;">{{ item.position }}</span>
        <span style="width:25%;">{{ item.content }}</span>
      </div>
    </div>
    <div class="part5">
      <div class="part5-title">保养管理</div>
      <div class="part5-des">
        <span>年保养量:</span><span>8条</span>
        <span style="margin-left:5%;">已保养量:</span><span>8条</span><br />
        <span>完成率:</span><span>100%</span>
      </div>
      <div class="part5-echarts" ref="part5Echarts"></div>
    </div>
    <div class="part6">
      <div class="part6-title">生命周期管理</div>
      <span>设备总数:</span><span>2592台</span><br />
      <span>特种设备:</span><span style="">30台</span
      ><span style="margin-left:5%;">普通设备:</span><span>2562台</span>
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
        color: ["#36C8C8", "#4ECB73", "#FE8F44", "#D84C7D"],
        title: {
          text: "当年每月报修-维修量统计分析",
          padding: [200, 0, 0, 50],
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#ffffff",
            fontSize: 12,
          },
        },
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
          data: ["报修量", "维修量"],
          top: "bottom",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["1", "2", "3", "4"],
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
            name: "报修量",
            type: "bar",
            data: [11, 21, 31, 41],
          },
          {
            name: "维修量",
            type: "bar",
            data: [25, 28, 59.67, 25],
          },
        ],
      },
      part2Echarts: null,
      option2: {
        color: ["#3AA1FF", "#4ECB73"],
        title: {
          text: "当年每月巡检计划量-实际量统计分析",
          padding: [30, 0, 0, 25],
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#ffffff",
            fontSize: 12,
          },
        },
        legend: {
          data: ["总计", "当月"],
          top: "85%",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4"],
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
          splitLine:false,
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        series: [
          {
            name: "总计",
            data: [150, 230, 224, 218, 135, 147, 260, 159, 321, 118, 320, 322],
            type: "line",
          },
          {
            name: "当月",
            data: [110, 220, 245, 218, 135, 147, 260, 159, 321, 118, 320, 322],
            type: "line",
          },
        ],
      },
      part3Echarts: null,
      part3List: [
        { name: "安全", num: 100 },
        { name: "完成率", num: 95.36 },
        { name: "合格率", num: 96.4 },
      ],
      option3: {
        color: ["#36C8C8", "#4ECB73", "#FE8F44", "#D84C7D"],
        title: {
          text: "当年月指标分析",
          padding: [40, 0, 0, 220],
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#ffffff",
            fontSize: 12,
          },
        },
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
          data: ["维修", "保养"],
          top: "86%",
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月"],
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
            name: "维修",
            type: "bar",
            stack: "total",
            data: [11, 21, 31, 41],
          },
          {
            name: "保养",
            type: "bar",
            stack: "total",
            data: [25, 28, 59.67, 25],
          },
        ],
      },
      part4Echarts: null,
      part4List: [
        { name: "年总数", num: 20 },
        { name: "已完成项目数", num: 17 },
        { name: "完成率", num: 85 },
      ],
       part4List1: [
        {
          order:1,
          time:'2021.04.19',
          position:'地下配电房2D7柜二楼照明',
          content:'温度超限'
        },
        {
          order:2,
          time:'2021.04.19',
          position:'门诊一楼东新风机房新风箱',
          content:'失电'
        },
        {
          order:3,
          time:'2021.04.19',
          position:'住院楼五楼照明插座箱',
          content:'三项不平衡'
        },
      ],
      part4List2: [
        {
          order:1,
          time:'2021.04.19',
          position:'地下空调机房分水器',
          content:'水压偏高'
        },
        {
          order:2,
          time:'2021.04.19',
          position:'地下净水机房净水机组',
          content:'到期未保养'
        },
        {
          order:3,
          time:'2021.04.19',
          position:'地下配电房3号变压器',
          content:'负荷过低'
        },
      ],
      option4: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        title: {
          text: "当年月指标分析",
          padding: [40, 0, 0, 80],
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#ffffff",
            fontSize: 12,
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
          data: [
            "电梯保养",
            "锅炉保养",
            "空调保养",
            "配电房保养",
            "消防设施保养",
            "信息机房保养",
          ],
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
            data: [100, 200, 300, 350, 250, 250, 250],
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
              { value: 90, name: "运行期" },
              { value: 0, name: "超期运行" },
              { value: 3, name: "带病运行" },
              { value: 2, name: "停用待修" },
              { value: 5, name: "报废" },
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
                  formatter: "{b} ：({d}%)",
                },
                labelLine: { show: true },
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
      this.part5Echarts.setOption(this.option4);
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
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
      this.drawEcharts3();
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
.modal4-area4 {
  width: 100%;
  height: 100%;
  position: relative;
  color: #ffffff;
  .modal4-img {
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
    left: 48.5%;
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
      margin-top: -15%;
      width: 100%;
      height: 80%;
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
      margin-top: -10%;
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
    .part3-des2 {
      /deep/ .ant-progress-text {
        color: #ffffff;
      }
    }
    .part3-echarts {
      margin-top: -6.5%;
      width: 100%;
      height: 80%;
    }
  }
  .part4 {
    position: absolute;
    width: 29.06%;
    height: 21.13%;
    font-size:12px;
    left: 35.57%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 62.78%;
    .part4-des {
      /deep/ .ant-progress-text {
        color: #ffffff;
      }
    }
    .des2 {
      width:100%;
      display: flex;
      span {
        display:inline-block;
        text-align: center;
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
      width: 110%;
      height: 80%;
    }
  }
}
</style>
