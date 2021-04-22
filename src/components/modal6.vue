<!--
 * @Author: your name
 * @Date: 2020-08-25 19:46:23
 * @LastEditTime: 2021-04-15 13:03:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal6.vue
-->
<!-- 组件说明 -->
<template>
  <div class="modal6-content">
     <img class="cancel6"   @click="handleClick5" src='../pic/cancel.png' />
     <img class="modal6-img"  src='../pic/test6bg.png' />
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      handleClick5(){
          this.$emit("cancelClick")
      }
  },
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
.modal6-content {
  background: rgba(0, 0, 0, 0.66);
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 0px;
  .modal6-img {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .cancel6{
    position:absolute;
    top:13.5%;
    left:87.5%;
    z-index:1;
    cursor:pointer;
  }
}
</style>
