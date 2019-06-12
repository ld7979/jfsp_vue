<template>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) of slide" :key="index">
        <img :src=slide[index]>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
      <div class="swiper-button-prev" slot="button-prev"></div>  <!-- 箭头左 --> 
      <div class="swiper-button-next" slot="button-next"></div>  <!-- 箭头右 -->
    </swiper>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slide: ["images/01.jpg", "images/01.jpg", "images/01.jpg", "images/01.jpg", "images/01.jpg"],
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 1000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  }
}
</script>

<style>
.swiper-container{
  top:60px;
  z-index:-1 !important;
}
.swiper-slide {
  width: 100%;
  height: 500px;
  line-height: 500px;
  font-size: 50px;
  text-align: center;
  background-color: rosybrown;
}
</style>