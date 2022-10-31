/**
* @author: ty
* @date: 2022-10-10
* @description:
*/
<template>
  <div class="demo1">
    <h1>一个简单的例子</h1>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div>
            <div>slide 1 </div>
            <div class="chart1"></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <div>slide 2 </div>
            <div class="chart2"></div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
<!--      <slot name="pagination"></slot>-->
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/dist/css/swiper.css'
import echarts from 'echarts';
import option from './centertwoOption.js';
export default {
  name: 'demo1',
  data(){
    return {
      mySwiper: null,// swiper轮播实例
    }
  },
  mounted() {
    // 初始化swiper
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 2000,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      onInit: function() {
        console.log('onInit');
      },
      onSliderMove: function(){
        console.log('onSliderMove');
      },
      onSlideChangeEnd: this.onSlideChangeEnd
    });

    this.initChart();
  },
  methods: {
    onSlideChangeEnd(){
      console.log('onSlideChangeEnd')
    },
    initChart() {
      let chart1Ele = document.getElementsByClassName('chart1')
      let chart2Ele = document.getElementsByClassName('chart2')
      for(let i = 0; i < chart1Ele.length; i++){
        console.log('do1', i);
        let mychart = this[`chart1_${i}`] = echarts.init(chart1Ele[i]);
        mychart.setOption(option.option1);
      }

      for(let j = 0; j < chart2Ele.length; j++){
        let mychart = this[`chart2_${j}`] = echarts.init(chart2Ele[j]);
        mychart.setOption(option.option4);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.demo1{
  .swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
    border: 1px solid #dcdcdc;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .chart1{
    width: 300px;
    height: 220px;
  }
  .chart2{
    width: 300px;
    height: 220px;
  }
}
</style>
