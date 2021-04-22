<!-- 组件说明 -->
<template>
  <div class="area2-content">
    <div class="area2-part1">904</div>
    <div class="area2-part2">99%</div>
    <div class="area2-part3">99%</div>
    <div class="area2-part4">
      <div style="font-size:10px;">
        <span>装机容量</span>
      </div>
      <div>7830Kva</div>
      <div style="font-size:10px;">
        <span>当前负荷</span>
      </div>
      <div style="font-weight:bold;">{{ area2Data.power }}Kw</div>
    </div>
    <div class="area2-part5" ref="chart"></div>
    <div class="area2-part6">
      <template v-if="alarmList.length > 0 && reloadList ">
        <div
          class="part6-des"
          :class="[index==0 ? 'active':'']"
          v-for="(item, index) in alarmList"
        >
          <span style="width:10%;padding-left:5%;">{{ index + 1 }}</span>
          <span style="width:20%;margin-left:2%;">{{ item.dataTime }}</span>
          <span style="width:30%;margin-left:6%;">{{ item.place }}</span>
          <span style="width:30%;margin-left:10%;">{{ item.content }}</span>
        </div>
      </template>
      <template v-else>暂无数据</template>
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
      area2Data: {
        power: 2673,
      },
      option: {
        color: ["#8da2e4", "#1aa134"],
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
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
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
          },
        ],
        yAxis: [
          {
            type: "value",
            max: 1000,
            min: 500,
            axisLine: {
              lineStyle: {
                color: "#ffffff",
              },
            },
            splitLine: {
              show: false, //不显示分隔线
            },
          },
        ],
        series: [
          {
            name: "总",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210, 123, 241, 105, 203, 111],
          },
          {
            name: "平均",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310, 111, 112, 131, 100, 99],
          },
        ],
      },
      alarmList: [
        //   {
        //     order: 1,
        //     time: "2021/3/16",
        //     position: "2D7柜2楼照明",
        //     error_content: "通信异常",
        //   },
        //   {
        //     order: 2,
        //     time: "2021/3/16",
        //     position: "2D7柜2楼照明",
        //     error_content: "通信异常",
        //   },
        // ],
        // errorList: [
        //   {
        //     id: 11135784,
        //     content: "通信异常",
        //     dataTime:"04-21 14:26",
        //     place: "展会现场一体化风机箱",
        //   },
        //   {
        //     id: 11135785,
        //     content: "",
        //       dataTime:"04-21 14:27",
        //     place: "展会现场开水箱",
        //   },
        //   {
        //     id: 11136136,
        //     content: "缺相",
        //     dataTime:"04-21 14:28",
        //     place: "展会现场一体化风机箱",
        //   },
        //   {
        //     id: 11136137,
        //     content: "",
        //     dataTime:"04-21 14:29",
        //     place: "展会现场开水箱",
        //   },
        //   {
        //     id: 11135432,
        //     dataTime:"04-21 14:30",
        //     content: "温度超限，超限值:50℃",
        //     place: "展会现场一体化风机箱",
        //   },
        //   {
        //     id: 11135433,
        //     dataTime:"04-21 14:31",
        //     content: "",
        //     place: "展会现场开水箱",
        //   },
      ],
      reloadList:true
    };
  },
  props: {
    ErrorDataFromSocket: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    ErrorDataFromSocket: {
      handler(newData, oldData) {
        this.getData();
        if (newData.flag == 1) {
          if (newData.type == 0) {
            let targetIndex = this.errorList.findIndex(
              (item) => item.id == newData.id
            );
            this.errorList[targetIndex].dataTime = newData.dataTime;
            this.errorList[targetIndex].content = newData.content;
            this.createList(this.errorList);
            this.listReload()
          }
        }
        if (newData.flag == 0) {
          for (let i = 0; i <= this.errorList.length; i++) {
            if (this.errorList[i].id == newData.id) {
              this.errorList.splice(i, 0);
            }
          }
          this.createList(this.errorList);
          this.listReload()
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {},
  methods: {
    drawCharts() {
      this.chart = this.$echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
      window.onresize = function() {
        this.chart.resize();
      };
    },
    listReload(){
      this.reloadList=false
      this.$nextTick(()=>{
        this.reloadList=true
      })
    },
    getData() {
      //获取负荷信息
      this.$axios({
        url: "/bgapi/vqdisplay/main/page/getPowerData",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          // this.option.legend.data=res.data.body.map.legend
          this.option.series = res.data.body.map.series;
          this.option.xAxis[0].data = res.data.body.map.xAxis;
          this.area2Data.power = res.data.body.power;
          this.drawCharts();
        }
      });
      this.$axios({
        //获取告警警告
        url: "/bgapi/vqdisplay/main/page/getAlarmList",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.errorList = res.data.body.list;
          this.createList(res.data.body.list);
        }
      });
    },
    createList(arr) {
      arr.sort(function(a, b) {
        return a.dataTime < b.dataTime ? 1 : -1;
      });
      this.alarmList = arr.slice(0, 2);
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

<style lang="scss" src="">
@mixin keyframes($animationName) {
  @-webkit-keyframes #{$animationName} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }
  @-o-keyframes #{$animationName} {
    @content;
  }
  @keyframes #{$animationName} {
    @content;
  }
}
@include keyframes(myfirst) {
  0% {
    background-color: transparent;
  }
  50% {
    color:#fafbfc;
    background-color: red;
  }
  100% {
    background-color: transparent;
  }
}
.active{
     animation: myfirst 2s;
      -webkit-animation: myfirst 2s; /* Safari and Chrome */
}
.fade-enter-active,.fade-leave-active{
  transition:all 2s;
}
.fade-enter,.fade-leave-to{
  color:#fafbfc;
  background-color:red;
}
.area2-content {
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  position: relative;
  .area2-part1 {
    position: absolute;
    top: 16.78%;
    left: 17.95%;
    font-size: 24px;
    color: #fafbfc;
  }
  .area2-part2 {
    position: absolute;
    font-size: 24px;
    color: #fafbfc;
    top: 15.78%;
    left: 57.99%;
  }
  .area2-part3 {
    font-size: 24px;
    color: #fafbfc;
    left: 77.95%;
    top: 15.78%;
    position: absolute;
  }
  .area2-part4 {
    font-size: 10px;
    position: absolute;
    width: 13.75%;
    height: 43.78%;

    top: 41%;
    left: 6.99%;
  }
  .area2-part5 {
    width: 62.56%;
    height: 65%;
    left: 29.95%;
    top: 13.83%;
    position: absolute;
    z-index: 9;
  }
  .area-part6::-webkit-scrollbar {
    display: none;
  }
  .area2-part6 {
    position: absolute;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    overflow-x: hidden;
    overflow-y: hidden;
    width: 90.56%;
    height: 15.78%;
    top: 82.83%;
    left: 6.99%;
    font-size: 12px;
    color: rgb(237, 83, 137);
    .part6-des {
      display: flex;
      span {
        display: inline-block;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .part6-des1 {
      animation: myfirst 2s;
      -webkit-animation: myfirst 2s; /* Safari and Chrome */
    }
  }
  .area2-part7 {
    top: 11.78%;
    left: 36.35%;
    position: absolute;
  }
  .area2-part8 {
    position: absolute;
    top: 43.5%;
    left: 36%;
  }
  .area2-part9 {
    left: 35.35%;
    top: 75.02%;
    position: absolute;
  }
  .area2-part10 {
    top: 11.78%;
    left: 80%;
    position: absolute;
  }
  .area2-part11 {
    left: 80%;
    top: 43.5%;
    position: absolute;
  }
  .area2-part12 {
    left: 80%;
    top: 75.02%;
    position: absolute;
  }
  .part7 {
    width: 10%;
    height: 30%;
    position: absolute;
    top: 45%;
    left: 21%;
    font-size: 14px;
    background-color: rgba(36, 99, 156, 0.7);
    z-index: 50;
  }
}
</style>
