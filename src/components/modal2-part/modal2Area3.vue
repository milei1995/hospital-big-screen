<!--
 * @Author: your name
 * @Date: 2021-04-14 13:29:29
 * @LastEditTime: 2021-04-14 13:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\components\modal2-part\modal2Area3.vue
--><!-- 组件说明 -->
<template>
  <div class="modal2-area3">
    <img class="cancel2" @click="handleClick2" src="../../pic/cancel.png" />
     <!--<img class="modal2-img" src="../../pic/testbg2-1.png" />-->
     <div class="modal2-content" ref="scrollContent">
         <hospital-fd/>
     </div>
  </div>
</template>

<script>
//import x from ''
import hospitalFd from '../hospitalFd'
import BScroll from "better-scroll"
export default {
  components: {
    hospitalFd
  },
  data() {
    return {
      aBscroll:null
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
    handleClick2() {
      this.$emit("cancelClick");
    },
   
  },
  mounted() {
    this.$nextTick(()=>{
       let scrollDom=this.$refs.scrollContent
       this.aBscroll=new BScroll(scrollDom,{})
    }) 
   
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
.modal2-area3 {
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
  .modal2-content{
    position:absolute;
    width:80%;
    height:80%;
    top:10.5%;
    left:10%;
    overflow:hidden;
  }
 
}
</style>

