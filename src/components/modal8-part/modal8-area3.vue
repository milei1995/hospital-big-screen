<!--
 * @Author: your name
 * @Date: 2021-04-06 10:18:32
 * @LastEditTime: 2021-04-14 20:24:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal7-part\modal7-area6.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-04-05 17:52:17
 * @LastEditTime: 2021-04-05 18:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal7-part\modal7-area5.vue
-->
<!-- 组件说明 -->
<template>
  <div class="modal7-area6">
    <img class="cancel2" @click="handleClick2" src="../../pic/cancel.png" />
    <!--<img class="modal2-img" src="../../pic/testbg2-1.png" />-->
    <div class="modal7-content" ref="scrollContent">
      <hospital-fe />
    </div>
  </div>
</template>

<script>
//import x from ''
import hospitalFe from "../hospitalFe";
import BScroll from "better-scroll";
export default {
  components: {
    hospitalFe,
  },
  data() {
    return {
      aBscroll: null,
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
    handleClick2() {
      this.$emit("cancelClick");
    },
  },
  mounted() {
    this.$nextTick(() => {
      let scrollDom = this.$refs.scrollContent;
      this.aBscroll = new BScroll(scrollDom, {});
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
.modal7-area6 {
  width: 100%;
  height: 100%;
  position: relative;
  .modal2-img {
    width: 100%;
    height: 100%;
  }
  .cancel2 {
    position: absolute;
    top: 8.3%;
    left: 88.5%;
    z-index: 1;
    cursor: pointer;
  }
  .modal7-content {
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10.5%;
    left: 10%;
    overflow: hidden;
  }
}
</style>
