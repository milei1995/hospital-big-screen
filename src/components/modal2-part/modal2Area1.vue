<!--
 * @Author: your name
 * @Date: 2020-08-28 09:08:08
 * @LastEditTime: 2021-04-22 09:52:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal2-part\modal2Area1.vue
-->
<!-- 组件说明 -->
<template>
  <div class="modal2-area1">
    <img class="cancel2" @click="handleClick2" src="../../pic/cancel.png" />
    <img class="modal2-img" src="../../pic/dbg3.png" />
    <div class="part1">
      <div class="part1-des0">{{ area1Data.capacity }}kVa</div>
      <div class="part1-des1">当前总负荷:</div>
      <div class="part1-des2">{{ area1Data.realPower }}</div>
      <div class="part1-des3">kWh</div>
      <div class="part1-des4">
        {{ area1Data.changeFlag }}{{ area1Data.changeRate }}
      </div>
      <div class="part1-des5">今日峰值负荷:</div>
      <div class="part1-des6">{{ area1Data.maxPower }}</div>
      <div class="part1-des7">kWh</div>
      <div class="part1-des8" ref="chart1"></div>
    </div>
    <div class="part2">
      <div class="part2-des">
        <div class="des" style="font-size:14px;">
          <span>名词</span>
          <span>名称</span>
          <span>平均</span>
          <span>最大</span>
        </div>
        <div class="des" v-for="(item, index) in part2List">
          <span>{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.maxPower }}</span>
          <span>{{ item.avgPower }}</span>
        </div>
      </div>
    </div>
    <div class="middle">
      <template v-for="(item, index) in transFormInfoList">
        <a-popover :title="`变压器${index + 1}`">
          <template slot="content">
            <p>有功功率:{{ item.activePower }}</p>
            <p>装机容量:{{ item.capacity }}</p>
            <p>a电流:{{ item.currentA }}</p>
            <p>负载率:{{ item.loadRate }}</p>
            <p>功率因素:{{ item.powerFactor }}</p>
            <p>无功功率:{{ item.reactivePower }}</p>
            <p>a电压:{{ item.voltageA }}</p>
          </template>
          <div :class="`des${index + 1}`"></div>
        </a-popover>
      </template>
    </div>
    <div class="part3">
      <div class="des1">
        <span>电气监测</span><span style="margin-left:5%;">总数:1256</span>
      </div>
      <div class="des2">
        <span>温度监测</span><span style="margin-left:5%;">总数:8</span>
      </div>
      <div class="des3">
        <span>烟感监测</span><span style="margin-left:5%;">总数:8</span>
      </div>
      <div class="des4">
        <span>防火门监测</span><span style="margin-left:5%;">总数:2</span>
      </div>
      <div class="des5" style="color:rgb(0,0,0)">
        <span>正常562</span><span style="margin-left:5%;">故障1</span>
      </div>
      <div class="des6" style="color:rgb(0,0,0)">
        <span>正常8</span><span style="margin-left:15%;">故障0</span>
      </div>
      <div class="des7" style="color:rgb(0,0,0)">
        <span>正常8</span><span style="margin-left:15%;">故障0</span>
      </div>
      <div class="des8" style="color:rgb(0,0,0)">
        <span>正常2</span><span style="margin-left:15%;">故障0</span>
      </div>
    </div>
    <div class="part4">
      <div class="des1">
        <span>安全运行</span
        ><span style="color:rgb(249, 148, 75);font-size:24px;margin-left:8%;"
          >901</span
        ><span style="margin-left:8%;">天</span>
      </div>
      <div class="des2">
        <span>总监测点位</span
        ><span style="color:rgb(249, 148, 75);font-size:24px;margin-left:1%;"
          >3456</span
        ><span style="margin-left:1%;">个</span>
      </div>
      <div class="des3">{{ area1Data2.normal }}</div>
      <div class="des4">{{ area1Data2.abnormal }}</div>
      <div class="des5">
        <div class="des5-crb" v-for="item in part4List">
          <span style="margin-left:5%;">{{ item.position }}</span
          ><span style="margin-left:5%;">{{ item.error }}</span
          ><span style="margin-left:5%;">{{ item.time }}</span>
        </div>
      </div>
      <div class="des6" ref="chart2"></div>
    </div>
    <div class="part5">
      <div class="des1" ref="chart3"></div>
      <div class="des3">工单处理情况</div>
      <div class="des2" ref="chart4"></div>
    </div>
    <div class="part6">
      <div class="des1">
        <span>配电负责人:张三</span>
        <span>配电工作人数:8人</span>
      </div>
      <div class="des2">
        <div class="des2-sub" v-for="item in part5List">
          <span style="margin-left:5%;">{{ item.order }}</span>
          <span style="margin-left:17%;">{{ item.name }}</span>
          <span style="margin-left:17%;">{{ item.assigned }}</span>
          <span style="margin-left:22%;">{{ item.comRate }}</span>
        </div>
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
      chart1: null,
      chart2: null,
      chart3: null,
      chart4: null,
      option1: {
        color: ["rgb(122,66,99)"],
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
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ],
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
            data: [120, 132, 101, 134, 90, 230, 210, 40, 80, 54, 36, 28],
          },
        ],
      },
      option2: {
        color: [
          "rgb(59,87,201)",
          "rgb(30,159,198)",
          "rgb(73,176,124)",
          "rgb(235,137,83)",
          "rgb(242,88,91)",
        ],
        tooltip:{
          trigger:'item'
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 1048, name: "一级警告" },
              { value: 735, name: "二级警告" },
              { value: 580, name: "三级警告" },
              { value: 484, name: "预警" },
              { value: 444, name: "故障" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
          tooltip:{
          trigger:'item'
        },
        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "0%",
            top: 20,
            //x2: 80,
            bottom: 10,
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
              { value: 53, name: "巡检" },
              { value: 28, name: "保养" },
              { value: 18, name: "报修" },
            ],
          },
        ],
      },
      option4: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: ["#36c8c8", "rgb(223,109,107)"],
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
          data: ["一级告警", "二级告警", "三级告警", "预警", "故障"],
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        },
        series: [
          {
            name: "2021年",
            type: "bar",
            data: [100, 200, 300, 350],
          },
        ],
      },
      part2List: [
        { order: 1, name: "2#变", load: "60%", maxLoad: "60%" },
        { order: 2, name: "2#变", load: "30%", maxLoad: "30%" },
        { order: 3, name: "2#变", load: "20%", maxLoad: "20%" },
        { order: 4, name: "2#变", load: "10%", maxLoad: "10%" },
      ],
      part4List: [
        { position: "2D7柜二楼照明", error: "通信异常", time: "2021/03.16" },
        { position: "1D3柜五楼插座", error: "三项不平衡", time: "2021/03.16" },
      ],
      part5List: [
        { order: 1, name: "张三", assigned: "100%", comRate: "95%" },
        { order: 2, name: "李四", assigned: "100%", comRate: "90%" },
        { order: 3, name: "王五", assigned: "65%", comRate: "60%" },
        { order: 4, name: "赵六", assigned: "60%", comRate: "60%" },
      ],
      area1Data: {
        capacity: "",
        changeFlag: "",
        changeRate: "",
        maxPower: "",
        realPower: "",
      },
      area1Data2: {},
      transFormIdList: [
        "44838201",
        "44838202",
        "44838203",
        "44838204",
        "44838205",
        "44838206"
      ],
      transFormInfoList: [],
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
    handleClick2() {
      this.$emit("cancelClick");
    },
    drawEchart() {
      this.chart3 = this.$echarts.init(this.$refs.chart3);
      this.chart3.setOption(this.option3);
      this.chart4 = this.$echarts.init(this.$refs.chart4);
      this.chart4.setOption(this.option4);
      window.onresize = function() {
        this.chart3.resize();
        this.chart4.resize();
      };
    },
    getData() {
      this.$axios({
        //未处理状态分布
        url: "/bgapi/vqdisplay/electric/main/getAlarmDistribution",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option2.series[0].data = res.data.body.map.series;
          this.chart2 = this.$echarts.init(this.$refs.chart2);
          this.chart2.setOption(this.option2);
          window.onresize = function() {
            this.chart2.resize();
          };
        }
      });
      this.$axios({
        //平均负荷率
        url: "/bgapi/vqdisplay/electric/main/getAvgPower",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.part2List = res.data.body.list;
        }
      });
      // this.$axios({
      //   //告警信息
      //   url:'/bgapi/vqdisplay/electric/main/getAlarmList',
      //   method:'get'
      // }).then(res=>{

      // })
      this.$axios({
        //负荷趋势
        url: "/bgapi/vqdisplay/electric/main/getElectricTrend",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.option1.xAxis[0].data = res.data.body.map.xAxis;
          this.option1.series = res.data.body.map.series;
          this.chart1 = this.$echarts.init(this.$refs.chart1);
          this.chart1.setOption(this.option1);
          window.onresize = function() {
            this.chart1.resize();
          };
        }
      });
      this.$axios({
        //配电房信息
        url: "/bgapi/vqdisplay/electric/main/getElectricStatus",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.area1Data = res.data.body.electricStatus;
        }
      });
      this.$axios({
        //检测点信息
        url: "/bgapi/vqdisplay/electric/main/getDetectionPoint",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.area1Data2 = res.data.body.info;
        }
      });
    },
    getTransformerInfo(id) {
      this.$axios({
        //变压器信息
        url: "/bgapi/vqdisplay/electric/main/getTransformerInfo",
        method: "get",
        params: { transformerId: id },
      }).then((res) => {
        if (res.data.code == 200) {
          this.transFormInfoList.push(res.data.body.info);
        }
      });
    },
  },
  mounted() {
    this.transFormIdList.forEach((item) => {
      this.getTransformerInfo(item);
    });
    this.$nextTick(() => {
      this.getData();
      this.drawEchart();
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
.modal2-area1 {
  width: 100%;
  height: 100%;
  position: relative;
  .modal2-img {
    width: 100%;
    height: 100%;
  }
  .cancel2 {
    position: absolute;
    top: 12%;
    left: 89%;
    z-index: 1;
    cursor: pointer;
  }
  .middle {
    position: absolute;
    width: 38%;
    height: 40.99%;
    top: 16.5%;
    left: 31.5%;
    .des1 {
      position: absolute;
      width: 15%;
      height: 19%;
      top: 125%;
      left: 0%;
    }
    .des2 {
      position: absolute;
      width: 15%;
      height: 19%;
      top: 122%;
      left: 16%;
    }
    .des3 {
      position: absolute;
      width: 15%;
      height: 19%;
      top: 106%;
      left: 34%;
    }
    .des4 {
      position: absolute;
      width: 15%;
      height: 19%;
      left: 54%;
      top: 107%;
    }
    .des5 {
      position: absolute;
      width: 15%;
      height: 19%;
      left: 69%;
      top: 124%;
    }
    .des6{
      position:absolute;
      width:15%;
      height:19%;
      top:125%;
      right:0%;
    }
  }
  .part1 {
    position: absolute;
    width: 19%;
    left: 12%;
    top: 17%;
    height: 24.5%;
    .part1-des0 {
      position: absolute;
      font-size: 20px;
      color: #fafbfc;
      font-weight: bold;
      top: 3%;
      left: 35%;
    }
    .part1-des1 {
      position: absolute;
      font-size: 14px;
      color: #fafbfc;
      top: 15.8%;
      left: 10%;
    }
    .part1-des2 {
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      top: 14%;
      left: 37%;
      color: rgb(249, 148, 75);
    }
    .part1-des3 {
      position: absolute;
      font-size: 14px;
      color: #fafbfc;
      top: 15.8%;
      left: 54%;
    }
    .part1-des4 {
      position: absolute;
      font-size: 14px;
      color: #fafbfc;
      top: 15.8%;
      left: 67%;
    }
    .part1-des5 {
      position: absolute;
      font-size: 14px;
      color: #fafbfc;
      top: 32.8%;
      left: 10%;
    }
    .part1-des6 {
      position: absolute;
      font-size: 20px;
      font-weight: bold;
      top: 31%;
      left: 37%;
      color: rgb(249, 148, 75);
    }
    .part1-des7 {
      position: absolute;
      font-size: 14px;
      color: #fafbfc;
      top: 32.8%;
      left: 58%;
    }
    .part1-des8 {
      position: absolute;
      width: 94%;
      height: 70%;
      top: 25%;
      left: 3%;
    }
  }
  .part2 {
    position: absolute;
    width: 19%;
    height: 17.5%;
    left: 12%;
    top: 42.5%;
    .part2-des {
      position: absolute;
      width: 90%;
      height: 75%;
      top: 25%;
      overflow: hidden;
      left: 5%;
      .des {
        width: 100%;
        height: 25px;
        color: #fafbfc;
        font-size: 12px;
        display: flex;
        span {
          display: inline-block;
          width: 25%;
          text-align: center;
        }
      }
    }
  }
  .part3 {
    position: absolute;
    width: 19%;
    left: 12%;
    height: 21%;
    top: 61%;
    color: #fafbfc;
    font-size: 12px;
    .des1 {
      width: 50%;
      position: absolute;
      top: 34%;
      left: 11%;
    }
    .des2 {
      width: 50%;
      position: absolute;
      top: 34%;
      left: 56%;
    }
    .des3 {
      width: 50%;
      position: absolute;
      top: 74%;
      left: 11%;
    }
    .des4 {
      width: 50%;
      position: absolute;
      top: 74%;
      left: 56%;
    }
    .des5 {
      width: 50%;
      position: absolute;
      top: 45%;
      left: 12.7%;
    }
    .des6 {
      width: 50%;
      position: absolute;
      top: 45%;
      left: 58.5%;
    }
    .des7 {
      width: 50%;
      position: absolute;
      top: 84%;
      left: 12.7%;
    }
    .des8 {
      width: 50%;
      position: absolute;
      top: 84%;
      left: 58.5%;
    }
  }
  .part4 {
    position: absolute;
    width: 19%;
    height: 26%;
    top: 17%;
    left: 70.5%;
    .des1 {
      position: absolute;
      width: 38%;
      height: 14%;
      left: 4%;
      top: 16%;
      font-size: 14px;
      color: #fafbfc;
    }
    .des2 {
      position: absolute;
      width: 38%;
      height: 14%;
      left: 4%;
      top: 29%;
      font-size: 14px;
      color: #fafbfc;
    }
    .des3 {
      position: absolute;
      left: 7%;
      top: 43%;
      font-size: 20px;
      color: #fafbfc;
    }
    .des4 {
      position: absolute;
      left: 31.5%;
      top: 43%;
      font-size: 20px;
      color: #fafbfc;
    }
    .des5 {
      position: absolute;
      width: 90%;
      height: 22%;
      top: 75%;
      left: 5%;
      color: #fafbfc;
      .des5-crb {
        width: 100%;
        height: 50%;
        line-height: 30px;
      }
    }
    .des6 {
      position: absolute;
      width: 57%;
      height: 53%;
      top: 11%;
      left: 41%;
    }
  }
  .part5 {
    position: absolute;
    width: 19%;
    height: 18%;
    left: 70.55%;
    top: 44%;
    .des1 {
      position: absolute;
      width: 45%;
      height: 68%;
      top: 33%;
      left: 0%;
    }
    .des2 {
      position: absolute;
      width: 56%;
      height: 120%;
      top: -20%;
      left: 42%;
    }
    .des3 {
      position: absolute;
      font-size: 10px;
      color: #fafbfc;
      top: 32%;
      left: 11%;
    }
  }
  .part6 {
    position: absolute;
    width: 19%;
    height: 19%;
    top: 63%;
    left: 70.55%;
    .des1 {
      position: absolute;
      width: 90%;
      height: 15%;
      line-height: 30px;
      top: 15%;
      left: 4%;
      display: flex;
      color: #fafbfc;
      justify-content: space-between;
    }
    .des2 {
      position: absolute;
      width: 90%;
      height: 53%;
      top: 42%;
      left: 5%;
      .des2-sub {
        width: 100%;
        height: 25%;
        line-height: 30px;
        font-size: 14px;
        color: #fafbfc;
      }
    }
  }
}
</style>
