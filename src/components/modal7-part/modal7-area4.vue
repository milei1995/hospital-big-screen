<!-- 组件说明 -->
<template>
  <div class="modal7-area2">
    <img class="cancel7" @click="handleClick7" src="../../pic/cancel.png" />
    <img class="modal7-img" src="../../pic/dbg8.png" />
    <div class="title">数字安全</div>
    <div class="part1">
      <div class="des1">
        <span>设备总数:</span
        ><span style="font-size:18px;color:rgb(255,206,69);"
          >4296台</span
        >
      </div>
      <div class="des2">
        <span>特种设备:</span
        ><span style="font-size:18px;color:rgb(255,206,69);"
          >29台</span
        ><span style="margin-left:2%;">普通设备:</span
        ><span style="font-size:18px;color:rgb(255,206,69);"
          >4267台</span
        >
      </div>
      <div class="part1-charts" ref="part1Echarts"></div>
    </div>
    <div class="part2">
      <div class="part2-title">
        特种设备检验有效占比<span
          style="font-size:20px;margin-left:10%;color:#FFCC00"
          >100%</span
        >
      </div>
      <div class="part2-list">
        <span class="part2-list-name">设备名称</span>
        <span class="part2-list-name">数量</span>
        <span class="part2-list-name">有效期内</span>
        <span class="part2-list-name">有效期外</span>
        <span class="part2-list-name">近期待检</span>
      </div>
      <div class="part2-list" v-for="(item, index) in part2List" :key="index">
        <span class="part2-list-name">{{ item.name }}</span>
        <span class="part2-list-name">{{ item.num1 }}</span>
        <span class="part2-list-name">{{ item.num2 }}</span>
        <span class="part2-list-name">{{ item.num3 }}</span>
        <span class="part2-list-name">{{ item.num4 }}</span>
      </div>
    </div>
    <div class="part3">
      <div class="part3-title">
        近3月特种设备待检<span
          style="font-size:20px;margin-left:10%;color:#FFCC00"
          >6项</span
        >
      </div>
      <div class="part3-list">
        <span class="part3-list-name">设备名称</span>
        <span class="part3-list-name">型号</span>
        <span class="part3-list-name">有效期</span>
        <span class="part3-list-name">负责人</span>
      </div>
      <div class="part3-list" v-for="(item, index) in part3List" :key="index">
        <span class="part3-list-name">{{ item.name }}</span>
        <span class="part3-list-name">{{ item.size }}</span>
        <span class="part3-list-name">{{ item.date }}</span>
        <span class="part3-list-name">{{ item.owner }}</span>
      </div>
    </div>
    <div class="part4">
      <div class="part4-title">设备运营</div>
      <div class="part4-list">
        <a-button type="primary" shape="round">安全指标</a-button>
        <a-button type="primary" shape="round">2021年度</a-button>
        <a-button type="primary" shape="round">1-4月累计</a-button>
        <a-button type="primary" shape="round">本月实时</a-button>
      </div>
      <div
        class="part4-list"
        style="margin-top:2%;"
        v-for="(item, index) in part4List"
        :key="index"
      >
        <span class="part4-list-name">{{ item.name }}</span>
        <div class="part4-list-name">
          <div class="part4-progress">
            <span>{{ item.num1 }}/{{ item.num2 }}</span
            ><span>{{ ((item.num1 * 100) / item.num2).toFixed(0) }}%</span>
          </div>
          <a-progress
            :showInfo="false"
            :percent="((item.num1 * 100) / item.num2).toFixed(0)"
          />
        </div>
        <div class="part4-list-name">
          <div class="part4-progress">
            <span>{{ item.num3 }}/{{ item.num4 }}</span
            ><span>{{ ((item.num3 * 100) / item.num4).toFixed(0) }}%</span>
          </div>
          <a-progress
            :showInfo="false"
            :percent="((item.num3 * 100) / item.num4).toFixed(0)"
          />
        </div>
        <div class="part4-list-name">
          <div class="part4-progress">
            <span>{{ item.num5}}/{{ item.num6 }}</span
            ><span>{{ ((item.num5 * 100) / item.num6).toFixed(0) }}%</span>
          </div>
          <a-progress
            :showInfo="false"
            :percent="((item.num5 * 100) / item.num6).toFixed(0)"
          />
        </div>
      </div>
      <div class="part4-charts" ref="part4Echarts"></div>
    </div>
    <div class="part5">
      <div class="part5-title">
        特种作业人工有效占比<span
          style="font-size:20px;margin-left:3%;color:#FFCC00"
          >100%</span
        >
      </div>
      <div class="part5-content">
        <div class="part5-charts" ref="part5Echarts"></div>
        <div class="part5-list-content">
          <div class="part5-list">
            <span class="part5-list-name">特种作业人员</span>
            <span class="part5-list-name">数量</span>
            <span class="part5-list-name">检验有效</span>
            <span class="part5-list-name">超期</span>
            <span class="part5-list-name">需复审</span>
          </div>
          <div
            class="part5-list"
            v-for="(item, index) in part5List"
            :key="index"
          >
            <span class="part5-list-name">{{ item.name }}</span>
            <span class="part5-list-name">{{ item.num1 }}</span>
            <span class="part5-list-name">{{ item.num2 }}</span>
            <span class="part5-list-name">{{ item.num3 }}</span>
            <span class="part5-list-name">{{ item.num4 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="part6">
      <div class="des1">
        <div style="font-size:16px;">累计安全运营</div>
        <div style="font-size:24px; color:rgb(255,205,66);">904天</div>
      </div>
      <div class="des2">
        <div style="font-size:16px;">安全事故</div>
        <div style="font-size:24px;color:rgb(255,205,66);">0起</div>
        <div style="font-size:16px;margin-top:5%;">设备达标率</div>
        <div style="font-size:24px;color:rgb(255,205,66);">95%</div>
      </div>
    </div>
    <div class="part7">
      <div class="part7-title">全员安全责任落实</div>

      <div class="des" v-for="item in part7List">
        <span class="des1">{{ item.name }}</span>
        <span class="des2">落实率</span>
        <span class="des3" style="color:rgb(36,172,242)"
          >{{ item.num1 }}/{{ item.num2 }}</span
        >
        <span class="des4" style="color:rgb(118,243,180)"
          >{{ parseInt((item.num1 * 100) / item.num2) }}%</span
        >
      </div>
      <!--<div
        class="part7-list"
        v-for="(item, index) in part7List"
        style="margin-top:8%;"
        :key="index"
      >
        <span>{{ item.name }}</span>
        <span>{{ item.num1 }}/{{ item.num2 }}</span>
        <a-progress
          type="circle"
          style="margin-top:-6%;"
          :percent="30"
          :width="50"
        />
      </div>-->
    </div>
    <div class="part8">
      <div class="part8-title">
        安全事故处理完成率<span
          style="font-size:20px;margin-left:3%;color:#FFCC00"
          >100%</span
        >
      </div>
      <div class="part8-list">
        <span class="part8-list-name">序号</span>
        <span class="part8-list-name">类型</span>
        <span class="part8-list-name">时间</span>
        <span class="part8-list-name">级别</span>
        <span class="part8-list-name">状态</span>
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
          name: "设备总数",
        },
        {
          clickNum: 2,
          name: "特种设备数",
        },
        {
          clickNum: 3,
          name: "普通设备数",
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
              { value: 5, name: "超期运行" },
              { value: 0, name: "带病运行" },
              { value: 2, name: "停用待修" },
              { value: 3, name: "报废" },
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
                  formatter: "{b}:{d}%",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      },
      part2List: [
        { name: "高压氧舱", num1: 3, num2: 3, num3: 0, num4: 3 },
        { name: "灭菌器", num1: 3, num2: 3, num3: 0, num4: 3 },
        { name: "高压锅炉", num1: 2, num2: 2, num3: 0, num4: 0 },
        { name: "电梯", num1: 10, num2: 10, num3: 0, num4: 0 },
        { name: "氧气瓶", num1: 22, num2: 22, num3: 0, num4: 0 },
        { name: "氧气管道", num1: 25, num2: 25, num3: 0, num4: 0 },
        { name: "CO2瓶", num1: 20, num2: 20, num3: 0, num4: 0 },
      ],
      part3List: [
        {
          name: "高压氧舱",
          size: "c0424-001",
          date: "2021/5/10",
          owner: "龚晨晓",
        },
        {
          name: "高压氧舱",
          size: "c0424-002",
          date: "2021/5/10",
          owner: "龚晨晓",
        },
        {
          name: "高压氧舱",
          size: "c0424-003",
          date: "2021/5/10",
          owner: "龚晨晓",
        },
        {
          name: "高压灭菌",
          size: "c1030-001",
          date: "2021/6/5",
          owner: "龚晨晓",
        },
        {
          name: "高压灭菌",
          size: "c1030-002",
          date: "2021/6/5",
          owner: "龚晨晓",
        },
        {
          name: "高压灭菌",
          size: "c1030-003",
          date: "2021/6/5",
          owner: "龚晨晓",
        },
      ],
      part4List: [
        {
          name: "安全检查",
          num1: 4,
          num2: 12,
          num3: 4,
          num4: 4,
          num5: 1,
          num6: 1,
        },
        {
          name: "安全培训",
          num1: 1,
          num2: 4,
          num3: 1,
          num4: 1,
          num5: 1,
          num6: 1,
        },
        {
          name: "安全会议",
          num1: 16,
          num2: 50,
          num3: 16,
          num4: 18,
          num5: 2,
          num6: 4,
        },
      ],
      part4Echarts: null,
      option4: {
        color: [
          "rgb(216,76,125)",
          "rgb(83,212,216)",
          "rgb(118,243,180)",
          "rgb(244,191,78)",
          "rgb(243,125,78)",
        ],
        title: {
          text: "安全指标环比",
          textStyle: {
            fontWeight: "normal", //标题颜色
            color: "#ffffff",
          },
        },
        legend: {
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        dataset: {
          source: [
            ["product", "安全检查", "安全培训", "安全会议"],
            ["2017", 43.3, 85.8, 93.7],
            ["2018", 83.1, 73.4, 55.1],
            ["2019", 86.4, 65.2, 82.5],
            ["2020", 72.4, 53.9, 39.1],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
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
      part5List: [
        { name: "电梯工", num1: 1, num2: 1, num3: 0, num4: 0 },
        { name: "制冷工", num1: 2, num2: 2, num3: 0, num4: 1 },
        { name: "司炉工", num1: 2, num2: 2, num3: 0, num4: 0 },
        { name: "氧气工", num1: 3, num2: 3, num3: 0, num4: 3 },
      ],
      part7List: [
        { name: "一级", num1: 11, num2: 11 },
        { name: "二级", num1: 52, num2: 52 },
        { name: "三级", num1: 883, num2: 1000 },
      ],
      part8List: [
        {
          order: 1,
          size: "锅炉",
          time: "20/3/22",
          level: "严重",
          status: "已完结",
        },
        {
          order: 2,
          size: "火灾",
          time: "20/3/22",
          level: "一般",
          status: "已完结",
        },
        {
          order: 3,
          size: "设备",
          time: "20/3/22",
          level: "一般",
          status: "已完结",
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
  },
  mounted() {
    this.$nextTick(() => {
      this.drawEcharts1();
      this.drawEcharts4();
      this.drawEcharts5();
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
      width: 110%;
      height: 80%;
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
    .part4-list {
      display: flex;
      justify-content: space-around;
      .part4-list-name {
        width: 16%;
        text-align: center;
        text-rendering: optimizeLegibility;
        .part4-progress {
          display: flex;
          font-size: 10px;
          justify-content: space-around;
        }
      }
    }
    .part4-charts {
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
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      .part5-charts {
        width: 40%;
        height: 90%;
      }
      .part5-list-content {
        width: 60%;
        .part5-list {
          display: flex;
          justify-content: space-around;
          .part5-list {
            width: 20%;
            text-align: center;
          }
        }
      }
    }
  }
  .part6 {
    position: absolute;
    width: 14.27%;
    height: 20.76%;
    top: 18.87%;
    left: 64.74%;
    text-align: center;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    display: flex;
    .des1 {
      margin-top: 20%;
      width: 40%;
    }
    .des2 {
      margin-top: 10%;
      width: 60%;
    }
  }
  .part7 {
    position: absolute;
    top: 40.9%;
    width: 14.27%;
    height: 20.76%;
    padding: 0.3vw 0.5vw 0.3vw 0.5vw;
    left: 64.74%;
    .part7-list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      position: relative;
      /deep/ .ant-progress-text {
        color: #fff;
      }
    }
    .des {
      width: 100%;
      .des1,
      .des2 {
        display: inline-block;
        width: 40%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-left: 7.5%;
        border: 1px solid #fafbfc;
        border-radius: 5px;
      }
      .des3,
      .des4 {
        display: inline-block;
        width: 40%;
        text-align: center;
        font-size: 20px;
        margin-left: 5%;
      }
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
}
</style>
