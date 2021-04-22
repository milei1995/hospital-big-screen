<!--
 * @Author: your name
 * @Date: 2020-08-25 14:51:14
 * @LastEditTime: 2021-04-21 19:58:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\area4.vue
-->
<!-- 组件说明 -->
<template>
  <div class="area4-content">
    <div class="part1">{{ area4Data.total + 702 }}</div>
    <div class="part2">{{ area4Data.special }}</div>
    <div class="part3">{{ area4Data.common + 702 }}</div>
    <div class="part4" ref="chart"></div>
    <div class="part5">4298</div>
    <div class="part6">27.3</div>
    <div class="part7">今日待处理工单</div>
    <div class="part8">
      <template v-if="part8List.length > 0 && reloadList">
        <vue-seamless-scroll
          :data="part8List"
          class="seamless-warp"
          :class-option="classOption"
        >
          <div class="part8-des" v-for="(item, index) in part8List">
            <span style="width:12%;">{{ index + 1 }}</span
            ><span style="width:22%;">{{ item.dataTime }}</span
            ><span style="width:22%;over-flow:hidden;">{{ item.name }}</span
            ><span style="width:28%;">{{ item.place }}</span
            ><span style="width:16%;margin-left:5%;">{{ item.type }}</span
            ><span
              style="width:19%;margin-left:2%;"
              :style="
                item.urgent == '紧急'
                  ? 'display:block;backgroundColor:red;'
                  : ''
              "
              >{{ item.urgent }}</span
            >
          </div>
        </vue-seamless-scroll>
      </template>
      <template v-else>
        <div style="color:#fafbfc;">暂无数据</div>
      </template>
    </div>
    <div class="part9"><span>安全</span><br /><span>100%</span></div>
    <div class="part10"><span>安全率</span><br /><span>99.3%</span></div>
    <div class="part11"><span>合格率</span><br /><span>96.4%</span></div>
  </div>
</template>

<script>
//import x from ''
import { list } from "../mixins/area4List.js";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  components: {
    vueSeamlessScroll,
  },
  data() {
    return {
      chart: null,
      option: {
        legend: {
          left: "center",
          bottom: "-3%",
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
            data: [
              { value: 90, name: "运行期" },
              { value: 0, name: "超期运行" },
              { value: 3, name: "带病运行" },
              { value: 2, name: "停用待修" },
              { value: 5, name: "报废" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} : {c} ({d}%)",
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
      reloadList:true,
      part8List: [],
      area4Data: {
        total: 0,
        special: 0,
        common: 0,
      },
      orderList: [],
      s: 1,
      timer: null,
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
        console.log(newData)
          if (newData.type == 1 || newData.type == 2) {
             let type=''
             switch (newData.type){
                case 1: 
                 return type='报修'; 
                break
                case 2:
                 return type='巡检';
                break             
             }
            let obj = {...newData,type:type,urgent:'紧急' };
            this.part8List.unshift(obj)
            this.listReload()
          }
        // if(newData.flag==0){
        //   for(let i=0;i<=this.part8List.length;i++){
        //     if(this.part8List[i].id==newData.id){
        //       this.part8List.splice(i,0)
        //     }
        //   }
        //   this.listReload()
        // }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    classOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 2000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
    drawEcharts() {
      this.chart = this.$echarts.init(this.$refs.chart);
      this.chart.setOption(this.option);
      window.onresize = function() {
        this.chart.resize();
      };
    },
    getData() {
      this.$axios({
        //获取数字后勤
        url: "/bgapi/vqdisplay/main/page/getDigitalLogistics",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.area4Data = res.data.body.info;
        }
      });
      this.$axios({
        //获取待处理工单
        url: "/bgapi/vqdisplay/main/page/getOrderList",
        method: "get",
      }).then((res) => {
        if (res.data.code == 200) {
          this.part8List = res.data.body.list;
          // this.timer = setInterval(this.showList(res.data.body.list), 1000);
        }
      });
    },
    showList() {
      let x = parseInt(this.orderList.length / 3);
      let y = this.orderList.length % 3;
      if (this.s < x) {
        this.s += 1;
      } else {
        this.s = 1;
      }
      this.part8List = [
        this.orderList[3 * this.s - 3],
        this.orderList[3 * this.s - 2],
        this.orderList[3 * this.s - 1],
      ];
    },
    listReload(){
      this.reloadList=false
      this.$nextTick(()=>{
        this.reloadList=true
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts();
      // this.timer = setInterval(this.showList, 3000);
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  created() {
    this.getData();
  },
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" src="">
.area4-content {
  width: 100%;
  height: 100%;
  position: relative;
  .active {
    background-color: red;
  }
  .part1 {
    position: absolute;
    top: 4%;
    left: 23%;
    font-size: 24px;
    color: #ff9148;
    font-weight: bold;
  }
  .part2 {
    position: absolute;
    top: 16%;
    font-size: 24px;
    left: 19%;
    color: #fafbfc;
  }
  .part3 {
    position: absolute;
    top: 16%;
    left: 42%;
    font-size: 24px;
    color: #fafbfc;
  }
  .part4 {
    position: absolute;
    top: 30%;
    left: 0%;
    width: 52%;
    height: 74%;
    z-index: 9;
  }
  .part5 {
    position: absolute;
    color: #ff9148;
    font-size: 24px;
    top: 42%;
    left: 65.5%;
  }
  .part6 {
    position: absolute;
    color: #ff9148;
    font-size: 21px;
    top: 42.5%;
    left: 88.5%;
  }
  .part7 {
    position: absolute;
    color: #fafbfc;
    font-size: 14px;
    top: 53%;
    left: 68%;
  }
  .part8 {
    position: absolute;
    width: 45%;
    height: 33%;
    top: 67%;
    left: 53%;
    .seamless-warp {
      width: 100%;
      height: calc(100% - 16px);
      overflow: hidden;
      .part8-des {
        display: flex;
        font-size: 12px;
        width: 100%;
        color: #fafbfc;
        height: 25px;
        margin-top: 2px;
        line-height: 25px;
        span {
          display: inline-block;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .part9 {
    position: absolute;
    font-size: 11px;
    color: #fafbfc;
    left: 58.5%;
    top: 23%;
  }
  .part10 {
    position: absolute;
    font-size: 11px;
    color: #fafbfc;
    left: 73%;
    top: 23%;
  }
  .part11 {
    position: absolute;
    font-size: 11px;
    color: #fafbfc;
    left: 87%;
    top: 23%;
  }
}
</style>
