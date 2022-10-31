/**
* @author: ty
* @date: 2022-10-10
* @description:
*/
<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/router-list">导航菜单</router-link>
    </div>
    <routerView></routerView>
  </div>
</template>

<script>
export default {
  name: 'layout'
};
</script>

<style scoped lang="scss">
::v-deep #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
