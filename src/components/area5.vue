<!-- 组件说明 -->
<template>
    <div class='area5-content'>
        <div class="part1">187</div>
        <div class="part2">0</div>
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
  .area5-content{
      width:100%;
      height:100%;
      position:relative;
      .part1{
          position:absolute;
          font-size:20px;
          color:#FF6600;
          font-weight:bold;
          top:10%;
          left:41%;
      }
       .part2{
          position:absolute;
          font-size:20px;
          color:#FF6600;
          font-weight:bold;
          top:13%;
          left:87%;
      }
  }
</style>