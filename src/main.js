import Vue from 'vue'
import App from './App.vue'
// 导入vue router
import VueRouter from 'vue-router'

// 导入路由组件
import Goods from "./components/Goods/Goods.vue"
import Ratings from "./components/Ratings/Ratings.vue"
import Seller from "./components/Seller/Seller.vue"


Vue.config.productionTip = false
// 安装vue-router插件
Vue.use(VueRouter);

// 1 . 
// 定义路由也写在main.js
const routes = [
  {
    path:'/',
    redirect:'/goods'
  },
  {
    path:'/goods',
    component: Goods
  },
  {
    path:'/ratings',
    component:Ratings
  },
  {
    path:'/seller',
    component:Seller
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  // 选中后的类名 更改为active , 默认是router-link-active
  linkActiveClass: 'active',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
