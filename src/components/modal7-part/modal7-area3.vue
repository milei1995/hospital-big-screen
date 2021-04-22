<!-- 后勤管理 --> 
<template>
  <div class="modal7-area3">
    <img class="cancel" @click="handleClick7" src="../../pic/cancel.png" />
    <div class="body">
      <div class="row row1">
        <div id="c1">
          <dv-border-box-11 title="巡检管理">
            <div style="position:absolute;top:20%;left:8%;width:85%">
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>今日巡检完成</p>
                  </div>
                  <div class="blue-card-num">
                    <span>80</span>
                    %
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div class="operation-date">
                    <p>及时巡检率</p>
                    <p></p>
                  </div>
                  <div class="blue-card-num">
                    <span>83</span>
                    %
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>巡检点位总数</p>
                  </div>
                  <div class="blue-card-num">
                    <span>231</span>
                    个
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>发现故障</p>
                  </div>
                  <div class="blue-card-num">
                    <span>8</span>
                    处
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div id="c2">
          <dv-border-box-11 title="近7天运维任务概况">
            <div class="operation-main" style="position:absolute;top:20%;left:5%;width:88%">
              <div class="operation-left-list">
                <li>
                  不紧任务：
                  <span>23</span>条
                </li>
                <li>
                  一般任务：
                  <span>3</span>条
                </li>
                <li>
                  紧急任务：
                  <span>5</span>条
                </li>
                <li>
                  特急任务：
                  <span>3</span>条
                </li>
              </div>
              <div class="operation-right">
                <div class="demo_line_03">
                  <b></b>
                  <span>共34条运维任务</span>
                  <b></b>
                </div>
                <div class="operation-right-data">
                  <div>
                    <p class="blue-title-gray">0</p>
                    <p class="blue-title-main" style="font-size:0.6vw;">未处理</p>
                  </div>
                  <div>
                    <p class="blue-title-gray">0</p>
                    <p class="blue-title-main" style="font-size:0.6vw;">处理中</p>
                  </div>
                  <div>
                    <p class="blue-title-gray">9</p>
                    <p class="blue-title-main" style="font-size:0.6vw;">处理完</p>
                  </div>
                  <div>
                    <p class="blue-title-gray">25</p>
                    <p class="blue-title-main" style="font-size:0.6vw;">以忽略</p>
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div id="c3">
          <dv-border-box-11 title="监测点运行状况">
            <div style="position:absolute;top:20%;left:5%;width:88%">
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>重要设备监测点位</p>
                  </div>
                  <div class="blue-card-num">
                    <span>135</span>
                    个
                  </div>
                  <div>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> 124
                  </div>
                  <div>
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 11
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>特种设备测点位</p>
                  </div>
                  <div class="blue-card-num">
                    <span>28</span>
                    个
                  </div>
                  <div>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> 26
                  </div>
                  <div>
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 2
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>普通设备测点位</p>
                  </div>
                  <div class="blue-card-num">
                    <span>231</span>
                    个
                  </div>
                  <div>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> 227
                  </div>
                  <div>
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 4
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-11>
        </div>
      </div>
      <div class="row row2">
        <div id="c4">
          <dv-border-box-11 title="保养管理">
            <div style="position:absolute;top:20%;left:8%;width:85%">
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>本月待保养设备</p>
                  </div>
                  <div class="blue-card-num">
                    <span>20</span>
                    个
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>已保养设备</p>
                  </div>
                  <div class="blue-card-num">
                    <span>26</span>
                    个
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>外协保养</p>
                  </div>
                  <div class="blue-card-num">
                    <span>32</span>
                    个
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>保养及时率</p>
                  </div>
                  <div class="blue-card-num">
                    <span>95</span>
                    %
                  </div>
                </div>
              </div>
              <div class="blue-box">
                <div class="blue-card-p">
                  <div>
                    <p>严重脱保设备</p>
                  </div>
                  <div class="blue-card-num">
                    <span>0</span>
                    个
                  </div>
                </div>
              </div>
            </div>
          </dv-border-box-11>
        </div>
        <div id="c5">
          <dv-border-box-8>
            <dv-scroll-board :config="scrollTableConfig" ref="scrollBoard" style="height:79%;"  />
          </dv-border-box-8>
        </div>
        <div id="c6">
          <dv-border-box-11 title="近30天异常分布">
            <dv-charts :option="pieOption" />
          </dv-border-box-11>
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
      scrollTableConfig: {
        header: ["报修人", "报修时间", "问题描述", "当前状态"],
        data: [
          ["运维1", "2020-08-03 08:14", "门诊1楼104", "处理完成"],
          ["运维1", "2020-07-30 11:36", "住院部3楼308", "处理完成"],
          ["运维2", "2020-07-29 16:24", "后勤5楼513", "处理完成"],
          ["运维1", "2020-07-28 08:14", "门诊4楼413", "处理完成"],
          ["运维2", "2020-07-28 14:25", "住院部2楼209", "处理完成"],
          ["运维2", "2020-07-25 20:36", "门诊2楼206", "处理完成"],
          ["运维1", "2020-07-23 13:42", "门诊5楼504", "处理完成"],
          ["运维2", "2020-07-22 16:19", "住院部3楼308", "处理完成"],
          ["运维2", "2020-07-22 13:55", "后勤5楼507", "处理完成"],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
        headerBGC: "#102060",
        oddRowBGC: "#102578",
        evenRowBGC: "",
        headerHeight: 30,
        rowNum: 8,
      },
      status: { "1": "已提交", "2": "已派单", "3": "处理中", "4": "处理完成" },
      pieOption: {
        color: ["#048eff", "#00e7d0", "#3f38ff", "#8e3fff", "#dd00c5"],
        series: [
          {
            type: "pie",
            data: [
              { name: "欠压", value: 93 },
              { name: "通讯异常", value: 32 },
              { name: "缺项", value: 65 },
              { name: "电流超限", value: 44 },
              { name: "温度异常", value: 52 },
            ],
            insideLabel: {
              show: true,
            },
          },
        ],
      },
      ws: null,
    };
  },
  computed: {},
  methods: {
    handleClick7() {
      this.$emit("cancelClick");
    },
    dataReceiver(event) {
      let data = event.data;
      if (typeof data === "string") {
        data = JSON.parse(data);
        let record = [];
        record[0] = data["rpPersonName"] || "未知";
        record[1] = this.timeFormatter(data["findTime"]) || "未知";
        record[2] = data["faultContent"] || "未知";
        record[3] = this.status[data["status"]] || "未知";

        let datas = [record];
        this.scrollTableConfig.data = datas.concat(this.scrollTableConfig.data);
        if (this.scrollTableConfig.data.length > 20)
          this.scrollTableConfig.data.length = 20;
        this.$refs["scrollBoard"].updateRows(this.scrollTableConfig.data, 0);
      }
    },
    timeFormatter(value) {
      if (value) {
        value = new Date(value);
        if (value != "Invalid Date") {
          let day = value.getDate(),
            month = value.getMonth() + 1,
            year = value.getFullYear(),
            hour = value.getHours(),
            minute = value.getMinutes(),
            second = value.getSeconds();
          new String(month).length < 2 ? (month = "0" + month) : month;
          new String(day).length < 2 ? (day = "0" + day) : day;

          return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        }
      }
      return "";
    },
  },
  mounted() {
    let host = window.document.location.host;
    this.ws = new WebSocket(`ws://${host}/vpom-web/repairStatusPush`);
    this.ws.onmessage = this.dataReceiver;
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {
    this.ws.close();
  }, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" src="" >
@import url(https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css);
* {
  margin: 0px;
}
.modal7-area3 {
  width: 100%;
  height: 100%;
  position: relative;
  .body {
    position: absolute;
    height: 80%;
    width: 80%;
    left: 10%;
    top: 8%;
    background-color: rgb(9, 57, 118);
    border: 1px solid rgb(18, 3, 105);
    box-sizing: border-box;
    .row {
      position: relative;
      margin: 0px auto;
      border: 0px solid rgb(22, 96, 165);
    }
    .row1 {
      height: 40%;
      #c1 {
        width: 25%;
        height: 100%;
        display: inline-block;
        .border-box-content {
          padding: 1%;
          box-sizing: border-box;
        }
      }
      #c2 {
        width: 50%;
        height: 100%;
        display: inline-block;
        .operation-main {
          display: flex;
          align-items: center;
          padding: 20px;
        }
        .operation-left-list {
          padding: 10px;
          width: 200px;
          color: rgb(114, 210, 177);
        }
        .operation-left-list li {
          padding: 6px;
          list-style: none;
        }
        .operation-left-list li span {
          font-size: 20px;
          font-weight: 700;
        }
        .operation-right {
          width: 100%;
          position: relative;
          padding-top: 40px;
        }
        .demo_line_03 {
          width: 100%;
          text-align: center;
        }
        .demo_line_03 b {
          background: rgb(255, 159, 127);
          margin-top: 4px;
          display: inline-block;
          width: 33%;
          height: 1px;
          _overflow: hidden;
          vertical-align: middle;
        }
        .demo_line_03 span {
          display: inline-block;
          padding: 0 5px;
          color: rgb(255, 159, 127);
          font-size: 16px;
          vertical-align: middle;
        }
        .operation-right-data {
          display: flex;
          justify-content: center;
        }
        .operation-right-data > div {
          height: 80px;
          width: 80px;
          border: 6px solid #ff00fe;
          border-radius: 100%;
          text-align: center;
          margin: 10px;
        }
        .operation-right-data > div:nth-child(2) {
          border: 6px solid #3dbeff;
        }
        .operation-right-data > div:nth-child(3) {
          border: 6px solid #00e8d0;
        }
        .operation-right-data > div:nth-child(4) {
          border: 6px solid #3d38ff;
        }
        .operation-right-data > div p:first-child {
          font-size: 24px;
        }
        .operation-right-data > div p {
          margin: 5px;
          font-size: 16px;
          font-weight: 700;
          display: block;
          color: rgb(167, 201, 245);
        }
      }

      #c3 {
        width: 25%;
        height: 100%;
        display: inline-block;
        .blue-box {
          margin: 5% 0px;
        }
      }
    }
    .row2 {
      height: 60%;
      #c4 {
        width: 25%;
        height: 100%;
        display: inline-block;
        .blue-box {
          margin: 3% 0px;
        }
      }
      #c5 {
        width: 50%;
        height: 100%;
        display: inline-block;
        .border-box-content {
           position:absolute; 
          padding: 1%;
          box-sizing: border-box;
        }
      }

      #c6 {
        width: 25%;
        height: 100%;
        display: inline-block;
      }
    }
  }
  .cancel {
    position: absolute;
    top: 6%;
    left: 88%;
    z-index: 1;
    cursor: pointer;
  }
  .blue-box {
    box-sizing: border-box;
    border: 1px solid #13189c;
    box-shadow: 0 0 150px rgba(255, 255, 255, 0.1) inset;
    font-family: "PingFang SC", "Microsoft YaHei";
    font-size: 14px;
    color: #fff;
  }
  .blue-card-p {
    box-sizing: border-box;
    border-left: 10px solid #d900c6;
    width: 100%;
    height: 100%;
    padding: 7px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .blue-card-num {
    font-size: 28px;
    font-weight: 700;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 bottom,
      from(#aaf8fb),
      to(#439cf9)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
