<!-- 组件说明 -->
<template>
    <div class='middle-area-content'>
       <div class='middle-area-content-part1'>
          <div><span>占地面积:</span><span style="font-size:22px;font-weight:bold">87</span>亩</div>
          <div><span>规划建设用地:</span><span style="font-size:22px;font-weight:bold">87</span>亩</div>
          <div><span>规划建设面积:</span><span style="font-size:22px;font-weight:bold">7万</span>㎡</div>
       </div>
       <div class="middle-area-content-part2">
          <div><span>建筑栋数:</span><span style="font-size:22px;font-weight:bold">3</span>栋</div>
          <div><span>编制人数:</span><span style="font-size:22px;font-weight:bold">253</span>人</div>
          <div><span>病床数量:</span><span style="font-size:22px;font-weight:bold">600</span>张</div>
       </div>
    </div>
</template>

<script>
    //import x from ''
    export default {
        components: {

        },
        data () {
            return {

            };
        },
        computed: {

        },
        methods: {

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
    }
</script>

<style lang='scss' src=''>
  
  .middle-area-content{
      width:100%;
      height:100%;
      position:relative;
      color:#ffffff;
      .middle-area-content-part1{
          position:absolute;
          width:19.55%;
          height:18.56%;
          top:3.12%;
          font-size:19px;
          left:10.79%;
          z-index:2;
          text-align:left;
          color:#FAFBFC;
      }
      .middle-area-content-part2{
          position:absolute;
          width:19.55%;
          height:18.56%;
          top:3.12%;
          left:40.5%;
          font-size:19px;
          z-index:2;
          color:#FAFBFC;
          text-align:left;
      }
       .middle-area-content-part3{
          position:absolute;
          width:6.55%;
          height:3.56%;
          top:13.53%;
          left:14.79%;
          z-index:2;
      
          text-align:center;
      }
      .middle-area-content-part4{
          position:absolute;
          width:4.96%;
          height:3.56%;
          top:3.12%;
          left:42.24%;
          z-index:2;
        
          text-align:center;
      }
       .middle-area-content-part5{
          position:absolute;
          width:4.96%;
          height:3.56%;
          top:8.73%;
          left:42.24%;
          z-index:2;
       
          text-align:center;
      }
      .middle-area-content-part6{
          position:absolute;
          width:4.96%;
          height:3.56%;
          top:13.53%;
          left:42.24%;
          z-index:2;
      
          text-align:center;
      }
      



  }
</style>