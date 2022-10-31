/**
* @author: ty
* @date: 2022-10-10
* @description: 路由菜单列表
*/
<template>
  <div class="router-link">
    <router-link
      v-for="(it, index) in allList"
      :key="index"
      :to="it.url"
      target="_blank">{{ it.text }}
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'RouterList',
  data() {
    return {
      allList: [
        {
          url: '/swiper-in-vue2',
          text: 'swiper3.4.2 in vue2(在vue2中使用swiper3.4.2)',
        },
        {
          url: '/vue2-watch',
          text: 'vue2-watchの使用',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">

</style>
