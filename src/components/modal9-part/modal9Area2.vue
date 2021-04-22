<!-- 组件说明 -->
<template>
  <div class="modal7-area2">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal7-img" src="../../pic/dbg8.png" />
    <div class="title">持续改进</div>
    <div class="part1">
      <div class="part1-title">本年度</div>
      <div class="part1-list">
        <div v-for="(item, index) in part1List" style="margin-left:5%;">
          {{ item.name }}<br /><span>{{ item.des }}</span>
        </div>
      </div>
      <div class="part1-charts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">本月</div>
      <div class="part2-list">
        <div v-for="(item, index) in part2List" style="margin-left:5%;">
          {{ item.name }}<br /><span>{{ item.des }}</span>
        </div>
      </div>
      <div class="part2-charts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
      <div class="part3-title">未采纳建议</div>
      <div class="part3-list">
        <span class="part3-list-name">序号</span>
        <span class="part3-list-name">建议名称</span>
        <span class="part3-list-name">当前状态</span>
        <span class="part3-list-name">提交人</span>
        <span class="part3-list-name">操作</span>
      </div>
      <div class="part3-list" v-for="(item, index) in part3List" :key="index">
        <span class="part3-list-name">{{ index + 1 }}</span>
        <span class="part3-list-name">{{ item.name }}</span>
        <span class="part3-list-name">{{ item.status }}</span>
        <span class="part3-list-name">{{ item.owner }}</span>
        <span class="part3-list-name">查看</span>
      </div>
    </div>
    <div class="part4">
      <div class="part4-des1">
        <div v-for="item in part4List1">
          <span>{{ item.name }}</span
          ><br /><span>{{ item.num }}{{ item.unit }}</span>
        </div>
      </div>
      <div class="part4-des2">
        <div>
          <span style="margin-left:25%;">改进事务:</span><span>9个</span
          ><span style="margin-left:5%;">完成8个</span
          ><span style="margin-left:5%;">完成率:88.9%</span>
        </div>
        <div>
          <span style="margin-left:25%;">改进项目:</span><span>7个</span
          ><span style="margin-left:5%;">完成6个</span
          ><span style="margin-left:5%;">完成率:71.4%</span>
        </div>
      </div>
      <div class="part4-charts" ref="part4Echarts"></div>
      <div class="part4-des3">
        <div class="des3-sub" v-for="item in part4List2">
          <div class="sub">
            <span>{{ item.name }}</span
            ><span>{{ item.num1 }}</span
            ><span>{{ item.num2 }}</span
            ><span>{{ item.num3 }}</span
            ><span>{{ item.num4 }}</span
            ><span>{{ item.num5 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="part5">
      <div class="part5-title">
        业绩排行
      </div>
      <div class="part5-content">
        <div class="part5-des" v-for="item in ( part5List1 )">
          <div class="des-title" style="text-align:center;">
            {{ item.name }}
          </div>
          <div
            class="sub"
            style="margin-top:5%;"
            v-for="(des, index) in item.list"
          >
            <span style="margin-left:8%;">{{ des.name }}</span>
            <span style="margin-left:8%;">{{ des.num }}</span>
          </div>
        </div>
        <!--<div class="part5-button">
          <a-button-group>
            <a-button size="small" @click="choose(1)">按部门</a-button>
            <a-button  size="small" @click="choose(2)">
              按个人
            </a-button>
          </a-button-group>
        </div>-->
      </div>
    </div>
    <div class="part6">
       <div class="part6-title">本年度</div>
       <div class="des1">
         <div class="sub" v-for="item in part6List">
            <div>{{item.name}}</div>
            <div>{{item.num}}</div>
         </div>
       </div>
       <div class="des2" ref="chart6"></div>
    </div>
    <div class="part7">
      <div class="part7-title">本月</div>
       <div class="des1">
         <div class="sub" v-for="item in finishList">
            <div>{{item.name}}</div>
            <div>{{item.num}}</div>
         </div>
       </div>
       <div class="des2" ref="chart7"></div> 
    </div>
    <div class="part8">
      <div class="part8-title">
       未完成任务
      </div>
      <div class="part8-list">
        <span class="part8-list-name">序号</span>
        <span class="part8-list-name">改进</span>
        <span class="part8-list-name">负责人</span>
        <span class="part8-list-name">紧急度</span>
        <span class="part8-list-name">逾期</span>
      </div>
      <div class="part8-list" v-for="(item, index) in part8List" :key="index">
        <span class="part8-list-name">{{ item.order }}</span>
        <span class="part8-list-name">{{ item.size }}</span>
        <span class="part8-list-name">{{ item.time }}</span>
        <span class="part8-list-name">{{ item.level }}</span>
        <span class="part8-list-name">{{ item.status }}</span>
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
      part1ClickNum: 1,
      part1List: [
        {
          clickNum: 1,
          name: "被采纳",
          des: "14条",
        },
        {
          clickNum: 2,
          name: "提交",
          des: "16条",
        },
        {
          clickNum: 3,
          name: "采纳率",
          des: "87.5%",
        },
        {
          name: "未被采纳",
          des: "2条",
        },
      ],
      part2List: [
        {
          clickNum: 1,
          name: "被采纳",
          des: "2条",
        },
        {
          clickNum: 2,
          name: "提交",
          des: "3条",
        },
        {
          clickNum: 3,
          name: "采纳率",
          des: "66.5%",
        },
        {
          name: "未被采纳",
          des: "1条",
        },
      ],
      part1Echarts: null,
      option1: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          top: "80%",
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        dataset: {
          source: [
            ["product", "采纳", "提交"],
            ["巡检工单", 43.3, 85.8],
            ["保养工单", 83.1, 73.4],
            ["报修工单", 86.4, 65.2],
            ["后勤", 72.4, 53.9],
            ["能源", 52.1, 45.6],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
      },
      option2: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          top: "80%",
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        dataset: {
          source: [
            ["product", "采纳", "提交"],
            ["巡检工单", 43.3, 85.8],
            ["保养工单", 83.1, 73.4],
            ["报修工单", 86.4, 65.2],
            ["后勤", 72.4, 53.9],
            ["能源", 52.1, 45.6],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
      },
      part3List: [
        { name: "开关闪屏", status: "审核中", owner: "高永明" },
        { name: "页面响应慢", status: "未通过", owner: "吴胜德" },
      ],
      part4List1: [
        { name: "建议数", num: 18, unit: "条" },
        { name: "采纳数", num: 16, unit: "条" },
        { name: "完成数", num: 13, unit: "个" },
        { name: "完成率", num: 81.3, unit: "%" },
        { name: "未完成数", num: 3, unit: "个" },
      ],
      part4List2: [
        { name: "完成数", num1: 2, num2: 3, num3: 4, num4: 2, num5: 2 },
        { name: "任务数", num1: 4, num2: 3, num3: 4, num4: 2, num5: 3 },
        {
          name: "完成率",
          num1: "50%",
          num2: "100%",
          num3: "100%",
          num4: "100%",
          num5: "66.7%",
        },
        { name: "未完成", num1: 0, num2: 0, num3: 0, num4: 0, num5: 1 },
      ],
      part4Echarts: null,
      option4: {
        color: ["#3AA1FF"],
        xAxis: {
          type: "category",
          data: ["部门1", "部门2", "部门3", "部门4", "部门5"],
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
        series: [
          {
            data: [150, 230, 224, 218, 135],
            type: "line",
          },
        ],
      },
      part5Echarts: null,
      option5: {
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
            name: "设备运行情况",
            type: "pie",
            radius: "50%",
            data: [
              { value: 33, name: "电工" },
              { value: 34, name: "锅炉工" },
              { value: 11, name: "电梯工" },
              { value: 22, name: "氧气工" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      part5Choose:1,
      part5List1: [
        {
          name: "建议提交数",
          list: [
            { name: "吴胜德", num: "4条" },
            { name: "周伟长", num: "4条" },
            { name: "严伟国", num: "3条" },
          ],
        },
        {
          name: "建议被采纳数",
          list: [
            { name: "周伟长", num: "100%" },
            { name: "吴胜德", num: "75%" },
            { name: "严伟国", num: "66.7%" },
          ],
        },
        {
          name: "改进完成数",
          list: [
            { name: "保卫科", num: "4个" },
            { name: "设备科", num: "3个" },
            { name: "后勤服务科", num: "2个" },
          ],
        },
        {
          name: "改进完成率",
          list: [
            { name: "保卫科", num: "100%" },
            { name: "设备科", num: "100%" },
            { name: "后勤服务科", num: "100%" },
          ],
        },
      ],
       part5List2: [
        {
          name: "建议提交数",
          list: [
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
          ],
        },
        {
          name: "建议提交数",
          list: [
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
          ],
        },
        {
          name: "建议提交数",
          list: [
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
          ],
        },
        {
          name: "建议提交数",
          list: [
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
            { name: "XX部门", num: "5条" },
          ],
        },
      ],
      part6Echarts:null,
      part6List:[
        {name:'完成',num:'12个'},{name:'计划完成',num:'14个'},{name:'完成率',num:'85.7%'},{name:'未完成',num:'2个'}
      ],
      finishList:[
        {name:'完成',num:'4个'},{name:'计划完成',num:'4个'},{name:'完成率',num:'100%'},{name:'未完成',num:'0个'}
      ],
      option6:{
         color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          top: "80%",
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        dataset: {
          source: [
            ["product", "完成", "计划"],
            ["部门1", 43.3, 85.8],
            ["部门2", 83.1, 73.4],
            ["部门3", 86.4, 65.2],
            ["部门4", 72.4, 53.9],
            ["部门5", 52.1, 45.6],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
      },
      part7Echarts:null,
      option7:{
         color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        legend: {
          top: "80%",
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        dataset: {
          source: [
            ["product", "完成", "计划"],
            ["部门1", 43.3, 85.8],
            ["部门2", 83.1, 73.4],
            ["部门3", 86.4, 65.2],
            ["部门4", 72.4, 53.9],
            ["部门5", 52.1, 45.6],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
      },
      part7List: [
        { name: "一级", num1: 11, num2: 11 },
        { name: "二级", num1: 52, num2: 52 },
        { name: "三级", num1: 88, num2: 100 },
      ],
      part8List: [
        {
          order: 1,
          size: "通讯不稳定",
          time: "信息科",
          level: "一般",
          status: "-17天",
        },
        {
          order: 2,
          size: "灯关不掉",
          time: "总务科",
          level: "一般",
          status: "-5天",
        },
        {
          order: 3,
          size: "开关黑屏",
          time: "总务科",
          level: "一般",
          status: "-15天",
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
    handleClick7() {
      this.$emit("cancelClick");
    },
    choosePart1Name(num) {
      this.part1ClickNum = num;
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
      this.part2Echarts.setOption(this.option1);
      window.onresize = function() {
        this.part2Echarts.resize();
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
    drawEcharts6(){
       this.part6Echarts = this.$echarts.init(this.$refs.chart6);
      this.part6Echarts.setOption(this.option6);
      window.onresize = function() {
        this.part6Echarts.resize();
      };
    },
    drawEcharts7(){
      this.part7Echarts = this.$echarts.init(this.$refs.chart7);
      this.part7Echarts.setOption(this.option7);
      window.onresize = function() {
        this.part7Echarts.resize();
      };
    },
    choose(num){
      this.part5Choose=num
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts2();
      this.drawEcharts4();
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
    left: 48%;
    color: rgb(87, 236, 243);
    font-size: 1vw;
    font-weight: bold;
    position: absolute;
  }
  .part1 {
    position: absolute;
    width: 14.27%;
    height: 20.76%;
    top: 18.87%;
    left: 20.99%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part1-list {
      display: flex;
      .part1-list-name {
        width: 30%;
        text-align: center;
        color: #1abc9c;
        cursor: pointer;
      }
      .active-name {
        width: 30%;
        cursor: pointer;
        text-align: center;
        text-decoration: underline;
        background-color: #1abc9c;
        color: #ffffff;
      }
    }
    .part1-charts {
      margin-top: -15%;
      width: 110%;
      height: 100%;
    }
  }
  .part2 {
    position: absolute;
    width: 14.27%;
    height: 20.76%;
    top: 40.9%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 20.99%;
    .part2-list {
      display: flex;
      .part2-list-name {
        width: 20%;
        font-size: 10px;
        text-align: center;
      }
    }
    .part2-charts {
      margin-top: -15%;
      width: 100%;
      height: 100%;
    }
  }
  .part3 {
    position: absolute;
    width: 14.27%;
    height: 20.76%;
    left: 20.99%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 63%;
    .part3-list {
      display: flex;
      .part3-list-name {
        width: 25%;
        font-size: 10px;
        text-align: center;
      }
    }
  }
  .part4 {
    position: absolute;
    width: 28.85%;
    height: 42.99%;
    left: 35.57%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 18.87%;
    .part4-des1 {
      display: flex;
      justify-content: space-around;
    }
    .part4-des3 {
      position: absolute;
      width: 94%;
      height: 35%;
      top: 64%;
      left: 3%;
      .des3-sub {
        color: #fafbfc;
        font-size: 16px;
        .sub {
          margin-top: 1%;
          display: flex;
          span {
            display: block;
            width: 16.7%;
            text-align: center;
          }
        }
      }
    }
    .part4-charts {
      margin-top: -5%;
      width: 110%;
      height: 60%;
    }
  }
  .part5 {
    position: absolute;
    width: 29.06%;
    height: 21.13%;
    left: 35.57%;
    top: 62.78%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .part5-content {
      width: 95%;
      margin-left:5%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .part5-des {
        margin-top: 5%;
        width: 25%;
      }
      .part5-button{
        position:absolute;
        width:40%;
        top:4%;
        left:23%;
      }
    }
  }
  .part6 {
    position: absolute;
    width: 14.27%;
    height: 20.76%;
    top: 18.87%;
    left: 64.74%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    .des1{
      display:flex;
      width:100%;
      text-align:center;
      .sub{
        width:25%;
      }
    }
    .des2{
      position:absolute;
      width:98%;
      height:90%;
      top:12%;
      left:5%;
    }
  }
  .part7 {
    position: absolute;
    top: 40.9%;
    width: 14.27%;
    height: 20.76%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 64.74%;
     .des1{
      display:flex;
      width:100%;
      text-align:center;
      .sub{
        width:25%;
      }
    }
    .des2{
      position:absolute;
      width:98%;
      height:90%;
      top:12%;
      left:5%;
    }
    
  }
  .part8 {
    position: absolute;
    width: 14.27%;
    height: 20.76%;
    left: 64.74%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    top: 63%;
    .part8-list {
      display: flex;
      .part8-list-name {
        width: 20%;
        text-align: center;
      }
    }
  }
  .part9{
    position:absolute;
  }
}
</style>
