<!-- 组件说明 -->
<template>
    <div class='area6-content'>
        <div class="part1">33℃</div>
        <div class="part2">43<span style="font-size:10px;">优</span></div>
        <div class="part3">67%</div>
        <div class="part4">95%</div>
        <div class="part5">95%</div>
        <div class="part6">95%</div>
        <div class="part7">多云</div>
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
  .area6-content{
      width:100%;
      height:100%;
      font-size:22px;
      position:relative;
      .part1{
          position:absolute;
          color:#3AA1FF;
          top:24.5%;
          left:16%;
      }
      .part2{
          position:absolute;
          color:#1CD66C;
          top:47%;
          left:22%; 
      }
      .part3{
          position:absolute;
          color:#ffffff;
          top:73%;
          left:17%;
      }
      .part4{
         position:absolute;
          color:#ffffff;
          top:30%;
          left:79%; 
      }
      .part5{
        position:absolute;
          color:#ffffff;
          top:53%;
          left:79%; 
      }
      .part6{
        position:absolute;
          color:#ffffff;
          top:76%;
          left:79%; 
      }
      .part7{
          position:absolute;
          color:#ffffff;
          top:52%;
          left:45%;
          font-size:17px;
      }
  }
</style>