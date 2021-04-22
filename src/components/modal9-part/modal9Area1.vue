<!--
 * @Author: your name
 * @Date: 2021-04-02 15:17:18
 * @LastEditTime: 2021-04-02 15:27:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal9-part\modal9Area1.vue
-->
<!-- 组件说明 -->
<template>
  <div class="modal9-area1">
     <img class="cancel9"   @click="handleClick9" src='../../pic/cancel.png' />
     <img class="modal9-img"  src='../../pic/testbg9.png' />
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
      handleClick9(){
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


 .modal9-area1 {
  width: 100%;
  height: 100%;
  position: relative;
  .modal9-img {
    width: 100%;
    height: 100%;
  }
   .cancel9 {
    position: absolute;
    top: 13.5%;
    left: 87.5%;
    z-index: 1;
    cursor: pointer;
  }
 
}

</style>
