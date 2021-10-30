// 导航栏 包括 ： 点菜 评价 商家
<template>
  <div class="nav">

      <div class="nav-item goods">
          点菜
      </div>
      <div class="nav-item ratings">
          评价
      </div>
      <div class="nav-item seller">
          商家
      </div>


  </div>

</template>

<script>
export default {

}
</script>

<style>
    .nav{
        /* 设计图上的是两倍于设备上的 */
        display: flex;
        widows: 100%;
        height: 40px;
        /* 设置行高， 越大， 则行间距越大 */
        line-height: 40px;
    }
    .nav .nav-item{
        /* 设置flex-grow 都为1， 相当于三等分 */
        /* 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容： */
        flex: 1;
        /* 感觉这里跟flex ： auto 效果相同 */
        text-align: center;
    }

</style>