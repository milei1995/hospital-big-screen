<!-- 组件说明 -->
<template>
  <div class="modal1-area2">
     <img class="cancel1" @click="handleClick1" src="../../pic/cancel.png" />
    <img class="modal1-img" src="../../pic/dbg5.png" />
    <div class="title">配电房管理</div>
    <div class="part1">
      <div class="part1-des">
        <img class="part1-1-icon" src="../../images/gk.svg" />
        <span class="part1-1-title" style="margin-left:5px;">概况</span>
      </div>
      <div class="part1-des" style="margin-top:5px;">
        <span style="width:%40">变配电站:</span>
        <a-select style="width:60%;margin-left:5px;background-color:none;">
          <a-select-option value="jack">
            电站1
          </a-select-option>
          <a-select-option value="lucy">
            电站2
          </a-select-option>
        </a-select>
      </div>
      <div class="part1-list">
         <div class="item1" v-for="(item,index) in list1" :key="index">
            <img class="img" :src="item.imgUrl">
			<div class="text2">{{item.name}}</div>
			<div class="text1">{{item.num}}{{item.unit}}</div>
         </div>
      </div>
    </div>
    <div class="part2">
       <div class="part2-1">
         <img class="icon" src='../../images/ydqx.svg' />
		 <div class="" style="margin-top:2px;margin-left:2px;">当日逐时用电曲线</div>
       </div>
       <div class="part2-echarts" id="part2Echarts" ref="part2Echarts"></div>
    </div>
    <div class="part3">
        <div class="part3-1">更新时间:&nbsp;2020-07-25&nbsp;&nbsp;16:45:00</div>
        <div class="part3-2">
           <div class="item2" v-for="(item,index) in list2" :key="index">
              <div class="item2-1">
                 <img class="img" :src="item.imgUrl"></img>
                 <div class="text1">{{item.name}}</div>
              </div>
              <div class="item2-2">
                 <span style="font-size:20px">{{item.num}}</span><span style="font-size:10px;">{{item.unit}}</span>
              </div>
           </div>
        </div>
        <div class="part3-3">
           <div class="item3" v-for="(item,index) in list3" :key="index">
              <div class="item3-1">
                    <img class="img" :src="item.imgUrl">
                    <div class="text1">{{item.name}}</div>
              </div>
              <div class="item3-2"></div>
           </div>
        </div>
    </div>
    <div class="part4">
        <div class="part4-1">
           <div style="display:flex;"> 
             <img src="../../images/zbgl.svg"/>
             <span style="font-size:17px;color:#ffffff;margin-top:2px;">指标管理</span>
           </div>
            <a-button-group  style="opacite:0.8;">
                    <a-button >日</a-button>
                    <a-button  >月</a-button>
                    <a-button  >年</a-button>
            </a-button-group> 
        </div>
        <div class="part4-des" v-for="(item,index) in list4">
           <div class="des1">
              <div style="font-size:20px;color:#ffffff;">{{item.num}}</div>
              <div class="des1-text" style="font-size:20px;color:#00D4DC;">{{item.name}}</div>
           </div>
           <div class="des2">
              <a-progress type="circle" :percent="30" :width="70"/>
           </div>
        </div>
    </div>
    <div class="part5">
       <div class="part5-1">
           <div style="display:flex;"> 
             <img src="../../images/ydgk.svg"/>
             <span style="font-size:17px;color:#ffffff;margin-top:2px;">用电概况</span>
           </div>
            <a-button-group  style="opacite:0.8;">
                    <a-button  >日</a-button>
                    <a-button  >月</a-button>
                    <a-button  >年</a-button>
            </a-button-group> 
        </div>
        <div class="part5-des" v-for="(item,index) in list5" :key="index">
            <div style="font-size:20px;" class="des-1">{{item.name}}</div>
            <div style="font-size:20px;color:#ffffff;">{{item.des}}</div>
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
        part2Echarts:null,
        list1:[
            {
               imgUrl:require("../../images/dydj.svg"),
               name:"电压等级",
               num:"10/0.4",
               unit:"KV" 
            },
            {
                imgUrl:require("../../images/byqts.svg"),
                name:"变压器台数",
                num:"1",
                unit:"台"
            },
            {
                imgUrl:require("../../images/ckzz.svg"),
                name:"测控装置",
                num:"40",
                unit:"个"
            },
            {
                imgUrl:require("../../images/zjrl.svg"),
                name:"装机容量",
                num:"500",
                unit:"KVar"
            },
            {
                imgUrl:require("../../images/sbxl.svg"),
                name:"当前负荷",
                num:"300",
                unit:"KW"
            },
            {
                imgUrl:require("../../images/fhl.svg"),
                name:"符合率",
                num:"40.28",
                unit:"%"
            }
        ],
        list2:[
          {
              imgUrl:require("../../images/yggl.svg"),
              name:"功率因素",
              num:"98",
              unit:"%"
          },
          {
              imgUrl:require("../../images/wggl.svg"),
              name:"无功功率",
              num:"3.2",
              unit:"Kvar"
          },
          {
              imgUrl:require("../../images/hjwd.svg"),
              name:"环境温度",
              num:"29.7",
              unit:"℃"
          },
          {
              imgUrl:require("../../images/hjsd.svg"),
              name:"环境湿度",
              num:"67.3",
              unit:"%"
          }

        ],
        list3:[
            {
                imgUrl:require("../../images/pdt.svg"),
                name:"配电图" 
            },
            {
                imgUrl:require("../../images/sp.svg"),
                name:"视频"
            },
            {
                imgUrl:require("../../images/mj.svg"),
                name:"门禁"
            },
            {
                imgUrl:require("../../images/qj.svg"),
                name:"全景"
            }
        ],
        list4:[
            {
               name:"维修次数",
               num:8 
            },
            {
                name:"巡检次数",
                num:32
            },
            {
                name:"保养次数",
                num:16
            }
        ],
        list5:[
            {
                name:"当日用电",
                des:"2089.92KW·h"
            },
            {
                name:"昨日同期",
                des:"2637.6KW·h"
            },
            {
                name:"环比",
                des:"-20.76%"
            },
            {
                name:"最大负荷时间",
                des:"15:30-15:45"
            },
            {
                name:"该时段平均功率",
                des:"207.04Kw"
            }
        ],
        option1:{
            color:["#3398DB", "#4EC873"], 
            title: {
            
            },
            tooltip: {
              trigger: "axis",
            },
            legend: {
                data: ["昨日","今日"],
                bottom:"-2%",
                textStyle: {
                    //图例文字的样式
                    color: "white",
                    fontSize: 10,
            },

            },
            grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            },
            toolbox: {
            feature: {
                saveAsImage: {show:false},
            },
            },
            xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["0", "1", "2", "3", "4", "5", "6"],
                axisLine: {
                lineStyle: {
                    color: "#ffffff",
                },
                },
            },
            yAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#ffffff",
                },
                },
            },
            series: [
            {
                name: "昨日",
                type: "line",
                stack: "总量",
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: "今日",
                type: "line",
                stack: "总量",
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            ],
		}

    };
  },
  computed: {},
  methods: {
    handleClick1() {
      this.$emit("cancelClick");
    },
    drawEcharts1() {
      this.part2Echarts= this.$echarts.init(this.$refs.part2Echarts)
      console.log(this.part2Echarts)
      this.part2Echarts.setOption(this.option1);
      window.onresize = function() {
        this.part2Echarts.resize();
      };
    },

  },
  mounted() {
      this.$nextTick(() => {
       this.drawEcharts1();
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
.modal1-area2 {
  width: 100%;
  height: 100%;
  position: relative;

  .modal1-img {
    width: 100%;
    height: 100%;
  }
   .cancel1 {
    position: absolute;
    top: 12.6%;
    left: 78.5%;
    z-index: 1;
    cursor: pointer;
  }
  .title {
    position: absolute;
    font-size: 18px;
    color: rgb(87, 236, 243);
    top: 14%;
    left: 47.5%;
  }
  .part1 {
    position: absolute;
    width: 14.22%;
    height: 65.05%;
    left: 20.88%;
    top: 18.76%;
    font-size: 18px;
    color: #ffffff;
    padding: 2% 1% 2% 1%;
    .part1-des {
      display: flex;
    }
    .part1-list{
      width:100%;
      height:80%;
      margin-top:5%;
      display:flex;
      justify-content:space-around;
      flex-wrap:wrap;
      .item1{
          margin-top:5px;
          width:45%;
          height:30%;
          font-size:14px;
          text-align:center;
          border:1px solid white;
          .img{
              width:70%;
              height:50%;
              margin-left:15%;
              margin-top:10%;
          }
      }
    }

  }
  .part2{
      position:absolute;
      width:28.75%;
      height:43.20%;
      left:35.63%;
      top:18.87%;
      padding:1% 1% 1% 1%;
      .part2-1{
          display:flex;
          color:#ffffff;
          font-size:18px;
      }
      .part2-echarts{
          position:absolute;
          width:100%;
          height:90%;
          top:0;
          left:0;
      }
  }
  .part3{
      position:absolute;
      width:28.70%;
      height:21.44%;
      left:35.5%;
      top:62.99%;
      padding:5px 2px 5px 1%;
      .part3-1{
          color:#ffffff;
          font-size:14px;
      }
      .part3-2{
          width:100%;
          height:35%;
          margin-top:5px;
          display:flex;
          justify-content:space-around;
          .item2{
              width:25%;
              height:100%;
              display:flex;
              .item2-1{
                  width:60%;
                  height:100%;
                  text-align:center;
                  color:#ffffff;
                  background-color:#1196DB;
                  border-radius:4%;
                  .img{
                      margin-top:8%;
                      width:70%;
                      height:60%;
                      margin-left:15%;
                  }
              }
              .item2-2{
                  width:40%;
                  height:100%;
                  text-align:center;
                  line-height:4;
                  color:#ffffff;
              }
          }
      }
       .part3-3{
          width:100%;
          height:35%;
          margin-top:4%;
          display:flex;
          justify-content:space-around;
          .item3{
              width:25%;
              height:100%;
              display:flex;
              .item3-1{
                  width:60%;
                  height:100%;
                  text-align:center;
                  color:#ffffff;
                  background-color:#1196DB;
                  border-radius:4%;
                  .img{
                      margin-top:8%;
                      width:70%;
                      height:60%;
                      margin-left:15%;
                  }
              }
              .item3-2{
                  width:40%;
                  height:100%;
                  text-align:center;
                  line-height:4;
                  color:#ffffff;
              }
          }
      }
      
  }
  .part4{
      position:absolute;
      width:14.22%;
      height:38.55%;
      left:64.79%;
      top:18.87%;
      padding:5px 10px 5px 10px;
      .part4-1{
          width:100%;
          display:flex;
          justify-content:space-between;
          margin-bottom:5px;
      }
      .part4-des{
        width:100%;
        height:28%;
        display:flex;
        justify-content:space-between;
        .des1,.des2{
            width:50%;
            height:100%;
            text-align:center;
            margin-top:3.5%;
        }
        .des1{
            .des1-text{
                text-shadow: 0 0 10px #00a1ff, 0 0 20px #4ea4be, 0 0 30px #4a9ad3, 0 0 40px #1effff;
            }
        }
        .des2{
            /deep/ .ant-progress-text{
                color:#ffffff;
            }
        }
      }
  }
  .part5{
      position:absolute;
      width:14.22%;
      height:58.25%;
      left:64.79%;
      top:58.25%;
      padding:5px 10px 5px 10px;
      .part5-1{
          width:100%;
          display:flex;
          justify-content:space-between;
          margin-bottom:5px;
      }
      .part5-des{
         display:flex;
         justify-content:space-between;
         margin-top:3%;
         .des-1{
             color:#00D4DC;
            text-shadow: 0 0 10px #00a1ff, 0 0 20px #4ea4be, 0 0 30px #4a9ad3, 0 0 40px #1effff; 
         }
      }

  }
}
.ant-select {
        /deep/ .ant-select-selection {
          background-color: none;
        }
      }
</style>
