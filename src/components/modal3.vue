<!-- 组件说明 -->
<template>
  <div class="modal3-content">
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
      <div class="page1" id="page1" :style="{ height: `${bannerHeight}px` }">
          <modal3-area1  @cancelClick="handleClick2"/>
      </div>
       <div class="page2" id="page2" :style="{ height: `${bannerHeight}px` }">
          <modal3-area2  @cancelClick="handleClick2"/>
      </div>
      <div class="page3" id="page3" :style="{ height: `${bannerHeight}px` }">
          <modal3-area3  @cancelClick="handleClick2"/>
      </div>
    </a-carousel>
  </div>
  </div>
</template>

<script>
//import x from ''
import modal3Area1 from '../components/modal3-part/modal3Area1.vue'
import modal3Area2 from '../components/modal3-part/modal3Area2.vue'
import modal3Area3 from '../components/modal3-part/modal3Area3.vue'
// import hospitalF from './hospitalF'
export default {
  components: {
    modal3Area1,
    modal3Area2,
    modal3Area3
    // hospitalF
  },
  data() {
    return {
       bannerHeight: 970,
      screenWidth: 1920,
    };
  },
  computed: {},
  methods: {
      handleClick2(){
          this.$emit("cancelClick")
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

<style lang="scss" src="" scoped>
.modal3-content {
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
