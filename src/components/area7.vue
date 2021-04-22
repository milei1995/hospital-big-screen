<!--
 * @Author: your name
 * @Date: 2020-08-27 18:56:50
 * @LastEditTime: 2021-04-21 09:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\area7.vue
-->
<!-- 组件说明 -->
<template>
  <div class="area7-content">
    <div class="part1">
      <span style="margin-left:6%;">9</span
      ><span style="margin-left:18%;">0</span
      ><span style="margin-left:20%;">4</span>
    </div>
    <div class="part2">
      <span style="margin-left:6%;"></span><span style="margin-left:18%;"></span
      ><span style="margin-left:55%;">0</span>
    </div>
    <div class="part3">
      <span style="margin-left:6%;">9</span
      ><span style="margin-left:18%;">5</span
      ><span style="margin-left:20%;">%</span>
    </div>
    <div class="part4">
      <div class="part4-des" v-for="item in part4List">
        <div class="des1">{{ item.num1 }}/{{ item.num2 }}</div>
        <a-progress
          :stroke-color="{
            '0%': '#108ee9',
            '100%': '#87d068',
          }"
          :percent="parseInt((item.num1 * 100) / item.num2)"
        />
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
      part4List: [
        { num1: 4, num2: 12 },
        { num1: 1, num2: 4 },
        { num1: 16, num2: 50 },
      ],
    };
  },
  computed: {},
  methods: {},
  mounted() {},
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
.area7-content {
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 20px;
  position: relative;
  .part6 {
    position: absolute;
    top: 61%;
    left: 78%;
  }
  .part1 {
    position: absolute;
    width: 22%;
    height: 25%;
    top: 21%;
    left: 9%;
    color: #ff9148;
    font-size: 30px;
    font-weight: bold;
  }
  .part2 {
    position: absolute;
    width: 22%;
    height: 25%;
    top: 21%;
    left: 38%;
    color: #ff9148;
    font-size: 30px;
    font-weight: bold;
  }
  .part3 {
    position: absolute;
    width: 22%;
    height: 25%;
    top: 21%;
    left: 67%;
    color: #ff9148;
    font-size: 30px;
    font-weight: bold;
  }
  .part4 {
    position: absolute;
    width: 87%;
    height: 25%;
    top: 71%;
    left: 5%;
    display: flex;
    justify-content: space-between;
    .part4-des {
      width: 30%;
      .des1 {
        width: 80%;
        text-align: center;
        font-size: 18px;
      }
      /deep/ .ant-progress-text {
        color: #fafbfc;
      }
    }
  }
}
</style>
