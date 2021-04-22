<!--
 * @Author: your name
 * @Date: 2021-04-12 16:48:31
 * @LastEditTime: 2021-04-22 10:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal3-part\modal3Area2.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-08-28 09:08:08
 * @LastEditTime: 2021-04-12 16:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal2-part\modal2Area1.vue
-->
<!-- 组件说明 -->
<template>
  <div class="modal2-area1">
    <img class="cancel2" @click="handleClick2" src="../../pic/cancel.png" />
    <img class="modal2-img" src="../../pic/dbg2.png" />
    <div class="part1">
      <div class="des1">331</div>
      <div class="des2">29.2℃</div>
      <div class="des3">29.2℃</div>
      <div class="des4">20%</div>
      <div class="des5" ref="chart1"></div>
    </div>
    <div class="part2">
      <div class="des1">
        <span style="color:rgb(249,148,75);font-size:20px;">2595</span
        ><span style="color:#fafbfc;font-size:18px;margin-left:10px;"
          >kgce</span
        >
      </div>
      <div class="des2">29.2%</div>
      <div class="des3">
        <span style="color:rgb(249,148,75);font-size:20px;">586.4</span
        ><span style="color:#fafbfc;font-size:18px;margin-left:10px;">kw</span>
      </div>
      <div class="des4">
        <span style="color:rgb(249,148,75);font-size:20px;">624</span
        ><span style="color:#fafbfc;font-size:18px;margin-left:10px;">kw</span>
      </div>
      <div class="des5" ref="chart2"></div>
    </div>
    <div class="part3">
      <div class="des1">
        <div>
          <span style="font-size:16px;color:#fafbfc;">室内平均温度</span
          ><span style="font-size:18px;color:rgb(249,148,75);">26.7℃</span>
        </div>
        <div>
          <span style="font-size:16px;color:#fafbfc;">室外温度</span
          ><span style="font-size:18px;color:rgb(249,148,75);">26.7℃</span>
        </div>
        <div>
          <span style="font-size:16px;color:#fafbfc;">室外相对湿度</span
          ><span style="font-size:18px;color:rgb(249,148,75);">65.1%</span>
        </div>
        <div>
          <span style="font-size:16px;color:#fafbfc;">室外大气压</span
          ><span style="font-size:18px;color:rgb(249,148,75);">101kPa</span>
        </div>
        <div>
          <span style="font-size:16px;color:#fafbfc;">室外照度</span
          ><span style="font-size:18px;color:rgb(249,148,75);">568Lux</span>
        </div>
      </div>
      <div class="des2">
        <span
          v-for="item in part3List"
          @click="part3Choose(item.clickNum)"
          :class="[part3Click == item.clickNum ? 'active-name' : '']"
          >{{ item.name }}</span
        >
      </div>
    </div>
    <div class="part4">
      <div class="des">
        <div class="des-sub" v-for="item in part4List">
          <span style="margin-left:2%;">{{ item.time }}</span>
          <span style="margin-left:7%;">{{ item.name }}</span>
          <span style="margin-left:10%;">{{ item.operate }}</span>
          <span style="margin-left:8%;">{{ item.load }}</span>
          <span style="margin-left:5%;">{{ item.rate }}</span>
          <span style="margin-left:7%;">{{ item.state }}</span>
        </div>
      </div>
    </div>
    <div class="part5">
      <div class="des1">2020年03月03日</div>
      <div class="des2">2020年03月08日</div>
      <div class="des3">
        <span>安全运行</span
        ><span style="font-size:20px;color:rgb(249,148,75);">901</span
        ><span>天</span> <span style="margin-left:5%;">总监测点位</span
        ><span style="font-size:20px;color:rgb(249,148,75);">3456</span
        ><span>个</span>
      </div>
      <div class="des4" ref="chart3"></div>
    </div>
    <div class="part6">
      <div class="des1">2020年03月03日</div>
      <div class="des2">2020年03月08日</div>
      <div class="des3" ref="chart4"></div>
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
      cahrt4: null,
      option1: {
        color: ["rgb(128,68,91)"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
          tooltip: {
          trigger: "axis",
        },
        textStyle: {
          fontSize: 10,
          color: "#fff",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "0",
              "2",
              "4",
              "6",
              "8",
              "10",
              "12",
              "14",
              "16",
              "18",
              "20",
              "22",
              "24",
            ],
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        ],
        yAxis: [
          {
            type: "value",
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
            data: [120, 132, 101, 134, 90, 230, 210, 40, 80, 54, 36, 28],
          },
        ],
      },
      option2: {
        color: ["rgb(128,68,91)"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
          tooltip: {
          trigger: "axis",
        },
        textStyle: {
          fontSize: 10,
          color: "#fff",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "0",
              "2",
              "4",
              "6",
              "8",
              "10",
              "12",
              "14",
              "16",
              "18",
              "20",
              "22",
              "24",
            ],
            lineStyle: {
              color: "#ffffff",
              width: 1, //这里是为了突出显示加上的
            },
          },
        ],
        yAxis: [
          {
            type: "value",
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
            data: [120, 132, 101, 134, 90, 230, 210, 40, 80, 54, 36, 28],
          },
        ],
      },
      option3: {
        legend: {
          left: "center",
          bottom: "bottom",
          itemGap: 10,
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
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
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 1048, name: "主机" },
              { value: 735, name: "冷却泵" },
              { value: 580, name: "冷却期" },
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
          tooltip: {
          trigger: "item",
        },
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
            minSize: "10%",
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
              { value: 53, name: "住院楼" },
              { value: 28, name: "门诊楼" },
              { value: 18, name: "后勤楼" },
              { value: 8, name: "手术室" },
              { value: 2, name: "ICU" },
            ],
          },
        ],
      },
      part3Click: 1,
      part3List: [
        { clickNum: 1, name: "水冷系统" },
        { clickNum: 2, name: "风冷系统" },
        { clickNum: 3, name: "锅炉系统" },
      ],
      part4List: [
        {
          time: "03.16/12:21",
          name: "1#离心率",
          operate: "人工智能节能自控",
          load: "438Kw",
          rate: "48Hz",
          state: "正常",
        },
        {
          time: "03.16/12:21",
          name: "1#离心率",
          operate: "人工智能节能自控",
          load: "48Kw",
          rate: "41Hz",
          state: "正常",
        },
        {
          time: "03.16/12:21",
          name: "1#离心率",
          operate: "人工智能节能自控",
          load: "60Kw",
          rate: "45Hz",
          state: "正常",
        },
        {
          time: "03.16/12:21",
          name: "1#离心率",
          operate: "人工智能节能自控",
          load: "38.5Kw",
          rate: "50Hz",
          state: "正常",
        },
      ],
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
    part3Choose(num) {
      this.part3Click = num;
    },
    drawEchart() {
      this.chart1 = this.$echarts.init(this.$refs.chart1);
      this.chart1.setOption(this.option1);
      this.chart2 = this.$echarts.init(this.$refs.chart2);
      this.chart2.setOption(this.option2);
      this.chart3 = this.$echarts.init(this.$refs.chart3);
      this.chart3.setOption(this.option3);
      this.chart4 = this.$echarts.init(this.$refs.chart4);
      this.chart4.setOption(this.option4);
      window.onresize = function() {
        this.chart1.resize();
        this.chart2.resize();
        this.chart3.resize();
        this.chart4.resize();
      };
    },
    getData(){
        this.$axios({ //区域能耗占比
            method:'get',
            url:'/bgapi/vqdisplay/device/acSystem/getBranchEnergy',
        }).then(res=>{
          if(res.data.code==200){
            
          }

        })
        this.$axios({//设备能耗占比
            method:'get',
            url:'/bgapi/vqdisplay/device/acSystem/getDeviceEnergy'
        }).then(res=>{
           
        })
        this.$axios({//负荷趋势
            method:'get',
            url:'/bgapi/vqdisplay/device/acSystem/getPowerTrend'
        }).then(res=>{

        })
        this.$axios({ //运行动态信息
           method:'get',
           url:'/bgapi/vqdisplay/device/acSystem/getRunInfo'
        }).then(res=>{

        })
        this.$axios({ //系统需求量分析
           method:'get',
           url:'/bgapi/vqdisplay/device/acSystem/getSystemDemand'
        }).then(res=>{

        })
        this.$axios({ //系统基本运行分析
           method:'get',
           url:'/bgapi/vqdisplay/device/acSystem/getSystemRunInfo'
        }).then(res=>{

        })
         this.$axios({//气象信息
            method:'get',
            url:'/bgapi/vqdisplay/device/acSystem/getWeatherInfo'
        }).then(res=>{
           
        })
        
    }
  },
  mounted() {
    this.$nextTick(() => {
     this.drawEchart()
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {
      console.log(1)
     this.getEnergyData() 
  }, //生命周期 - 挂载之前
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
  .active-name {
    color: rgb(249, 148, 75);
  }
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
  .part1 {
    position: absolute;
    width: 19%;
    left: 12%;
    top: 17%;
    height: 32%;
    .des1 {
      position: absolute;
      font-size: 22px;
      color: rgb(249, 148, 75);
      left: 33%;
      top: 11.5%;
    }
    .des2 {
      position: absolute;
      font-size: 22px;
      color: rgb(249, 148, 75);
      left: 81%;
      top: 11.5%;
    }
    .des3 {
      position: absolute;
      font-size: 22px;
      color: rgb(249, 148, 75);
      left: 41%;
      top: 24%;
    }
    .des4 {
      position: absolute;
      font-size: 22px;
      color: rgb(249, 148, 75);
      left: 81%;
      top: 24%;
    }
    .des5 {
      position: absolute;
      width: 82%;
      height: 59%;
      top: 27%;
      left: 15%;
    }
  }
  .part2 {
    position: absolute;
    width: 19%;
    height: 32.5%;
    left: 12%;
    top: 50.5%;
    .des1 {
      position: absolute;
      top: 10.5%;
      left: 36%;
    }
    .des2 {
      position: absolute;
      top: 10.5%;
      left: 80%;
      color: rgb(249, 148, 75);
      font-size: 20px;
    }
    .des3 {
      position: absolute;
      top: 23%;
      left: 29%;
    }
    .des4 {
      position: absolute;
      top: 23%;
      left: 80%;
    }
    .des5 {
      position: absolute;
      width: 82%;
      height: 59%;
      top: 27%;
      left: 15%;
    }
  }
  .part3 {
    position: absolute;
    width: 38.2%;
    left: 31.5%;
    height: 41%;
    top: 17%;
    font-size: 12px;
    .des1 {
      width: 100%;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
    }
    .des2 {
      width: 96%;
      position: absolute;
      height: 8%;
      top: 11%;
      left: 2%;
      color: rgb(10, 198, 255);
      span {
        margin-left: 5.5%;
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
  .part4 {
    position: absolute;
    width: 38.2%;
    height: 23%;
    top: 59%;
    left: 31.5%;
    .des {
      position: absolute;
      width: 93%;
      height: 60%;
      top: 36%;
      left: 4%;
      .des-sub {
        display: flex;
        color: #fafbfc;
        font-size: 16px;
        line-height: 35px;
      }
    }
  }
  .part5 {
    position: absolute;
    width: 19%;
    height: 32%;
    left: 70.55%;
    top: 17%;
    .des1 {
      position: absolute;
      width: 35%;
      height: 7%;
      top: 9%;
      left: 9%;
      color: #fafbfc;
      font-size: 16px;
      text-align: center;
    }
    .des2 {
      position: absolute;
      width: 35%;
      height: 7%;
      top: 9%;
      left: 54%;
      color: #fafbfc;
      font-size: 16px;
      text-align: center;
    }
    .des3 {
      position: absolute;
      width: 80%;
      height: 15%;
      top: 19%;
      left: 5%;
      color: #fafbfc;
      font-size: 14px;
    }
    .des4 {
      position: absolute;
      width: 85%;
      height: 65%;
      top: 27%;
      left: 2%;
    }
  }
  .part6 {
    position: absolute;
    width: 19%;
    height: 32%;
    top: 50%;
    left: 70.55%;
    .des1 {
      position: absolute;
      width: 35%;
      height: 7%;
      top: 10%;
      left: 9%;
      color: #fafbfc;
      font-size: 16px;
      text-align: center;
    }
    .des2 {
      position: absolute;
      width: 35%;
      height: 7%;
      top: 10%;
      left: 54%;
      color: #fafbfc;
      font-size: 16px;
      text-align: center;
    }
    .des3 {
      position: absolute;
      width: 80%;
      height: 80%;
      left: 5%;
      top: 19%;
    }
  }
}
</style>
