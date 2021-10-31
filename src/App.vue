<template>
  <div >
    shabi ba 

    <!-- 头部 -->
    <myheader></myheader>

    <!-- 导航 -->
    <mynav></mynav>

    <!-- 主体内容 -->
    <!-- <div class="content">
      content
    </div> -->
    <!-- 主题内容改为导航栏导航到的页面组件 -->
    <!-- 路由出口 -->
    <router-view>

    </router-view>
  </div>
</template>

<script>

import Myheader from './components/header/Header.vue';
import Mynav from './components/Nav/Nav.vue'

export default {
  name: 'App',
  components: {
    Myheader,
    Mynav

  }
}
</script>

<style>

</style>
