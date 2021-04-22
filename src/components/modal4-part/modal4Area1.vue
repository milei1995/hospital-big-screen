<!-- 组件说明 -->
<template>
  <div class="modal4-area1">
    <img class="cancel4" @click="handleClick1" src="../../pic/cancel.png" />
    <img class="modal4-img" src="../../pic/testbg4-1.png" />
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
    }
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
    handleClick1() {
      this.$emit("cancelClick");
    },
   
  },
  mounted() {
   
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
.modal4-area1 {
  width: 100%;
  height: 100%;
  position: relative;
  .modal4-img {
    width: 100%;
    height: 100%;
  }
   .cancel4 {
    position: absolute;
    top: 13.5%;
    left: 87.5%;
    z-index: 1;
    cursor: pointer;
  }
 
}
</style>
