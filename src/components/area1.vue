<!-- 组件说明 -->
<template>
  <div class="area1-content">
    <span class="area1-part1">
      <div style="font-size:22px;">305.6</div>
      <div style="font-size:16px;margin-top:-5px;">吨标煤</div>
    </span>
    <span class="area1-part2">
      <div style="font-size:22px;">124.1</div>
      <div style="font-size:16px;margin-top:-5px;margin-left:5px;">万元</div>
    </span>
    <span class="area1-part3">
      <div class="area1-part3-des1">
        <span style="color:#FAFBFC;font-size:16px;font-weight:bold;">4.37</span
        ><span style="color:#53D5DA;font-size:16px;margin-top:1%;">11%</span>
      </div>
      <div class="area1-part3-des2" >
        <span style="color:#FAFBFC;font-size:16px;font-weight:bold;margin-top:3%;">18.23</span
        ><span style="color:#53D5DA;font-size:16px;margin-top:3%">1%</span>
      </div>
      <div class="area1-part3-des3">
        <span style="color:#FAFBFC;font-size:16px;font-weight:bold;margin-top:3%;">33.58</span
        ><span style="color:#53D5DA;font-size:16px;margin-top:5%;"> 11%</span>
      </div>
    </span>
    <div class="area1-part4" ref="chart1" style="margin-top:3%;"></div>
    <div class="area1-part5">
      <div v-for="item in part5List" class="part5-des">
        <span >{{ item.num1 }}</span>
        <span >{{ item.num2 }}</span>
        <span >{{ item.num3 }}%</span>
      </div>
    </div>
    <div class="area1-part6">
      <div>
        <span style="font-size:26px;color:#D28052;font-weight:bold;">48.9</span>
        <span style="font-size:16px;color:#FAFBFC;margin-left:13%;">吨标煤</span>
        <span style="font-size:21px;color:#D28052;font-weight:bold;margin-left:4.5%;">13.8%</span>
      </div>
      <div style="font-size:16px;color:#FAFBFC;">折算成本20.6万</div>
    </div>
    <div class="area1-part7">
       <div>
        <span style="font-size:26px;color:#D28052;font-weight:bold;margin-top:2%;">46.8</span>
        <span style="font-size:16px;color:#FAFBFC;margin-left:13%;">吨标煤</span>
        <span style="font-size:21px;color:#D28052;font-weight:bold;margin-left:7%;">25.1%</span>
      </div>
      <div style="font-size:16px;color:#FAFBFC;margin-top:2%;">折算成本16.5万</div>
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
      option1: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
           "rgb(243,125,78)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
        ],
        tooltip: {
          trigger: "item",
        },
        grid:{
          left: "10%",
          right: "10%",
          bottom: "50%",
          containLabel: true,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 153.1, name: "电" },
              { value: 150.5, name: "燃气" },
              { value: 2, name: "水" },
            ],
             itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b}",
                },
                labelLine: { show: true },
              },
            },
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
      part5List: [
        {
          num1: 153.1,
          num2: 78.5,
          num3: 50.1,
        },
        {
          num1: 150.5,
          num2: 35.5,
          num3: 49.2,
        },
        {
          num1: 2.0,
          num2: 10.3,
          num3: 0.7,
        },
        // {
        //   num1: 60,
        //   num2: 60,
        //   num3: 60,
        // },
      ],
    };
  },
  computed: {},
  methods: {
    drawCharts1() {
      this.chart1 = this.$echarts.init(this.$refs.chart1);
      this.chart1.setOption(this.option1);
      window.onresize = function() {
        this.chart1.resize();
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawCharts1();
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

<style lang="scss" src="">
.area1-content {
  width: 100%;
  height: 100%;
  position: relative;
  .area1-part1 {
    position: absolute;
    top: 8.65%;
    left: 9.77%;
    color: #fafbfc;
  }
  .area1-part2 {
    position: absolute;
    top: 8.65%;
    left: 34.1%;
    color: #fafbfc;
  }
  .area1-part3 {
    position: absolute;
    top: 6%;
    width: 35%;
    left: 62.6%;
    font-size: 18px;
    .area1-part3-des1,
    .area1-part3-des2,
    .area1-part3-des3 {
      width: 100%;
      display: flex;
      line-height: 28px;
      justify-content: space-between;
    }
  }
  .area1-part4 {
    position: absolute;
    top: 33.1%;
    width: 45%;
    height: 31%;
    left: 3%;
    z-index:9;
  }
  .area1-part5 {
    position: absolute;
    width: 39%;
    height: 20.5%;
    left: 55%;
    top: 44%;
    .part5-des {
      width:100%;
      font-size: 15px;
      margin-top:1px;
      line-height: 23px;
      color: #fafbfc;
      span{
        display:inline-block;
        width:33%;
        text-align:center;
      }
    }
  }
  .area1-part6 {
    position: absolute;
    top: 80%;
    left: 4.5%;
    width: 43%;
    height: 16%;
  }
  .area1-part7 {
    position: absolute;
    top: 79%;
    width:45%;
    height:16%;
    left: 52.7%;
  }
  
}
</style>
