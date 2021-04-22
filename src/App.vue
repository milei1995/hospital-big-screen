<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// $(window).resize(function() {
//   if ($("#app").clientHeight < 700) {
//     alert("禁止缩放");
//     window.resizeTo($("#app"), 300);
//   }
// });

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
}
</style>
