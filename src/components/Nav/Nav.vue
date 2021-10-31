// 导航栏 包括 ： 点菜 评价 商家
// 设计稿中是两倍的像素标识, 所以我们应当/2设计
<template>
  <div class="nav">

      <!-- 使用Router-link来进行导航 -->
      <!-- 通过传入to属性指定连接 -->
      <!-- <div class="nav-item goods">
          点菜
      </div>
      <div class="nav-item ratings">
          评价
      </div>
      <div class="nav-item seller">
          商家
      </div> -->
      <router-link to="/goods" class="nav-item">
        点菜
        <i class="line"></i>
      </router-link>
      <router-link to="/ratings" class="nav-item">
        评价
        <i class="line"></i>
      </router-link>
      <router-link to="/seller" class="nav-item">
        商家
        <i class="line"></i>
      </router-link>


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
        border-bottom: 1px solid #e4e4e4;
    }
    
    .nav .nav-item{
        /* 设置flex-grow 都为1， 相当于三等分 */
        /* 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容： */
        flex: 1;
        /* 感觉这里跟flex ： auto 效果相同 */

        text-align: center;
        font-size: 13px;
        /* 去掉下划线 */
        text-decoration: none;
        color: #666666;

        position: relative;
        /* 为了使下面 line 的absolute能够定位 */
    }

    .nav .active{
        color: #ffbb22;
    }

    .nav .active .line{
        width: 20px;
        height: 2px;
        /* inline-block表示的是行内块状元素，比如：img、input在默认情况下即为行内块状元素，即：默认情况下，display属性的值为inline-block。
            inline-block的特点：既能够设置宽高，又不独自占据一行。 */
        display: inline-block;
        background: #ffbb22;
        position: absolute;
        left: 50%;
        bottom: 0;
        /* 居中操作 */
        /* left 50%是从50%处开始画line */
        /* 左移line的一半像素刚好 */
        margin-left: -10px;

    }

</style>