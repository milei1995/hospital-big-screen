<!-- 组件说明 -->
<template>
  <div class="modal1-content">
    <a-carousel id="a-carousel" arrows>
      <div
        slot="prevArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="left:100px;z-index:5"

      >
          <div style="width:50px;height:50px;" class="left"  ></div>
      </div>
      <div
        slot="nextArrow"
        slot-scope="props"
        class="custom-slick-arrow"
        style="right: 100px;z-index:5"
      >
          <div style="width:50px;height:50px;" class="right" ></div>
      </div>
      <!--<div class="page1" id="page1" :style="{ height: `${bannerHeight}px` }">
          <modal1-area1  @cancelClick="handleClick1"/>
      </div>
      <div class="page2" id="page2" :style="{ height: `${bannerHeight}px` }">
          <modal1-area2 @cancelClick="handleClick1"/>
      </div>-->
      <div class="page3" id="page3" :style="{ height: `${bannerHeight}px`}">
          <modal1-area3 @cancelClick="handleClick1"/>
      </div>
       <div class="page4" id="page4" :style="{ height: `${bannerHeight}px`}">
          <modal1-area4 @cancelClick="handleClick1"/>
      </div>
      <div class="page5" id="page5" :style="{ height: `${bannerHeight}px`}">
          <modal1-area5 @cancelClick="handleClick1"/>
      </div>
        <div class="page6" id="page6" :style="{ height: `${bannerHeight}px`}">
          <modal1-area6 @cancelClick="handleClick1"/>
      </div>
    </a-carousel>
  </div>
</template>

<script>
//import x from ''
import Modal1Area1 from './modal1-part/modal1Area1'
import Modal1Area2 from './modal1-part/modal1Area2'
import Modal1Area3 from './modal1-part/modal1Area3'
import Modal1Area4 from './modal1-part/modal1Area4'
import Modal1Area5 from './modal1-part/modal1Area5'
import Modal1Area6 from './modal1-part/modal1Area6'
export default {
  components: {
    Modal1Area1,
    Modal1Area2,
    Modal1Area3,
    Modal1Area4,
    Modal1Area5,
    Modal1Area6
  },
  data() {
    return {
      bannerHeight: 970,
      screenWidth: 1920,
    };
  },
  props:{
    modalVisible:{
      type:Boolean,
      dafault:()=>{
        return false
      }
    }
  },
  computed: {},
  methods: {
    handleClick1() {
      this.$emit("cancelClick");
    },
    setSize1: function() {
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.screenWidth = width;
      //图片                高 / 宽  700 / 1920
      this.bannerHeight = (970 / 1920) * this.screenWidth;
    },
    setSize: function() {
      this.bannerHeight = (970 / 1920) * this.screenWidth;
    },
  },
  mounted() {
    this.setSize1();
    const that = this;
    //监听浏览器窗口大小改变
    window.addEventListener(
      "resize",
      function() {
        var width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        that.screenWidth = width;
        that.setSize();
      },
      false
    );
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
.modal1-content {
  background: rgba(0, 0, 0, 0.66);
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 0px;
  .left{
    background:url('../pic/left.png')
  }
  .right{
    background:url('../pic/right.png')
  }
  .page1 {
    width: 100%;
    height: 100%;
  }
  .page2 {
    width: 100%;
    height: 100%;
  }
 
}

</style>
