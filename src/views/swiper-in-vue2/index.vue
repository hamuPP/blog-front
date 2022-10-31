/**
* @author: ty
* @date: 2022-10-10
* @description:
*/
<template>
  <div class="swiper-in-vue2">
    <div class="left-nav">
      <router-link to="/swiper-in-vue2/start">起步</router-link>
      <router-link to="/swiper-in-vue2/demo1">一个简单swiper例子</router-link>
      <router-link to="/swiper-in-vue2/demo2-hcm">hcm demo</router-link>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiperInVue2-index'
};
</script>

<style scoped lang="scss">
.swiper-in-vue2{
  display: flex;
  height: 100%;
  .left-nav{
    width: 200px;
    height: 100%;
    border-right: 1px solid #dcdcdc;
    text-align: left;
    a{
      display: block;
      margin: 4px;
    }
  }
  .main-content{
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
