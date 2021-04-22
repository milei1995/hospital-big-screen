/*
 * @Author: your name
 * @Date: 2020-08-24 13:41:33
 * @LastEditTime: 2021-04-14 18:42:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \weiqi_hospital\src\router\index.js
 */

import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Test from '../components/hospitalF.vue'
var router=new VueRouter({
    routes:[
        {
          path:'/',
          redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/test',
            component:Test
        }
    ]
})

export default router