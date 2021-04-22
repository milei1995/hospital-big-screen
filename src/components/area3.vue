<!--
 * @Author: your name
 * @Date: 2020-08-27 17:12:55
 * @LastEditTime: 2021-04-20 19:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\area3.vue
-->
<!-- 组件说明 -->
<template>
  <div class="area3-content">
    <div class="part1">{{area3Info.deviceOn}}</div>
    <div class="part2">
      <span>总量</span><span style="font-weight:bold;">{{area3Info.total}}</span>台<span
        style="margin-left:10%;"
        >占比</span
      ><span style="font-weight:bold;">{{area3Info.rate}}</span>
    </div>
    <div class="part3" ref="chart"></div>
    <div class="part4">
      <div class="part4-sub" v-for="item in part4List">
        <span class="sub1">{{item.name}}</span><span class="sub2">{{item.precent}}</span>
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
      chart: null,
      option: {
        color:['#1E5F8F'],   
        title: {
          text: "当前设备开启趋势分析",
          textStyle: {
            fontSize: 15,
            color: "#fff",
          },
          padding: ["30", "10", "10", "10"],
        },
        tooltip: {
        trigger: 'axis'
        },
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
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "0h",
              "2h",
              "4h",
              "6h",
              "8h",
              "10h",
              "12h",
              "14h",
              "16h",
              "18h",
              "20h",
              "22h",
              "24h",
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
      part4List: [
        { name: "中央空调系统节能自控", precent: "96.5%" },
        { name: "末端系统人感自控", precent: "91.3%" },
        { name: "新风空调系统温度自控", precent: "98.7%" },
        { name: "公共照明系统时间自控", precent: "100%" },
        { name: "景观照明系统照度自控", precent: "100%" },
        { name: "给排水系统流量自控", precent: "100%" },
      ],
      area3Info:{}
    };
  },
  computed: {},
  methods: {
    drawEcharts() {
      this.chart = this.$echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
      window.onresize = function() {
        this.chart.resize();
      };
    },
    getData(){
      this.$axios({ //获取能源设备信息
        url:'/bgapi/vqdisplay/main/page/getDeviceInfo',
        method:'get'
      }).then(res=>{
        if(res.data.code==200){
          this.area3Info=res.data.body.info
          this.option.xAxis[0].data=res.data.body.map.xAxis
          this.option.series=res.data.body.map.series
          this.drawEcharts()
        }
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
         this.getData()
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
.area3-content {
  width: 100%;
  height: 100%;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  position: relative;
  .part1 {
    position: absolute;
    top: 6%;
    left: 35.5%;
    font-size: 24px;
    color: #ff8148;
  }
  .part2 {
    position: absolute;
    width: 46%;
    top: 19%;
    left: 5.5%;
    font-size: 18px;
    color: #fafbfc;
  }
  .part3 {
    position: absolute;
    top: 28%;
    left: 6%;
    width: 62%;
    height: 72%;
    z-index:9;
  }
  .part4 {
    position: absolute;
    top: 6%;
    left: 68%;
    width: 31%;
    height: 89%;
    .part4-sub{
      margin-top:2px;
      line-height:23px;
      width:100%;
       color:#fafbfc;
        display:flex;
       .sub1{
         width:60%;
         font-size:10px;
         line-height:18px;
       }
       .sub2{
         width:35%;
         margin-top:15px;
         font-size:8px;
       }      
    }
  }
}
</style>
