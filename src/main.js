/*
 * @Author: your name
 * @Date: 2020-08-24 13:29:41
 * @LastEditTime: 2021-04-13 16:50:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import vueRouter from 'vue-router'
import router from './router/index'
import echarts from 'echarts'
import $ from 'jquery'
import dataV from '@jiaminghi/data-view'
import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(Antd)
Vue.use(dataV)
Vue.use(vueRouter)
Vue.prototype.$echarts=echarts;
Vue.prototype.$axios=axios
Vue.config.productionTip = false
window.$=$
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
