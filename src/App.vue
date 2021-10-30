<template>
  <div >
    shabi ba 

    <!-- 头部 -->
    <myheader></myheader>

    <!-- 导航 -->
    <mynav></mynav>

    <!-- 主体内容 -->
    <div class="content">
      content
    </div>
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
