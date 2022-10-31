<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><div id="main" class="main" style="width: 600px;height:400px;"></div></div>
        <div class="swiper-slide"><div id="main2" class="main2" style="width: 600px;height:400px;"></div></div>
    </div>
  </div>
</template>
<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";

import Swiper from "swiper";
import 'swiper/dist/css/swiper.css'

// import "../../../node_modules/swiper/dist/css/swiper.min.css";
// import "../../../node_modules/swiper/dist/js/swiper.min.js";


import echarts from 'echarts';

export default {
  name:"swiper_echarts",
  data() {
    return{

    }
  },
  mounted(){
    this.initSwiper()
  },
  methods:{
    //初始化swiper
    initSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: 2000,
          // slidesPerView: 1,
          // spaceBetween: 1,
          //    freeMode: true
        });

        this.initEcharts();
        this.initEcharts2();
      });
    },
    // echarts
    initEcharts(){
      // 指定图表的配置项和数据
      var option = {
        color:['#9a60b4', '#ea7ccc','#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452'],
        tooltip: {},
        legend: {
          show:false,
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 基于准备好的dom，初始化echarts实例
      var mytest=document.getElementsByClassName('main');
      for(var i=0;i<mytest.length;i++){
          var myChart = echarts.init(mytest[i]);
          myChart.setOption(option);
      }

      // var myChart = echarts.init(document.getElementById('main'));
      // // 使用刚指定的配置项和数据显示图表。
      // myChart.setOption(option);

    },
    initEcharts2(){
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        legend: {
          show:false,
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
       // 基于准备好的dom，初始化echarts实例
      // var myChart = echarts.init(document.getElementById('main2'));
      // // 使用刚指定的配置项和数据显示图表。
      // myChart.setOption(option);

      // 基于准备好的dom，初始化echarts实例
      var mytest=document.getElementsByClassName('main2');
      for(var i=0;i<mytest.length;i++){
          var myChart = echarts.init(mytest[i]);
          myChart.setOption(option);
      }

    },
  }
}
</script>
<style lang="scss" scoped>
.swiper-echarts{
  color:#fff;
}
</style>
