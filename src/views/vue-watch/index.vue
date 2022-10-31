/**
* @author: ty
* @date: 2022-10-19
* @description:
*/
<template>
  <div>
    <hr>
    <div>key1: {{key1}}</div>
    <div>key2: {{key2}}</div>
    <hr>
    <div @click="setKeyAndValue1">click key1</div>
    <div @click="setKeyAndValue2">click key2</div>
  </div>
</template>

<script>
export default {
  name: 'vueWatchIndex',
  data(){
    return {
      key1: []
    }
  },
  methods: {
    setKeyAndValue1(){
      this.key1 = [{name: 1},{name: 2}]
    },
    setKeyAndValue2(){
      this.key2 = [{name: 1},{name: 2}]
    },
  }

};
</script>

<style scoped>

</style>
