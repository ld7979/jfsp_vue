<template>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) of slide" :key="index">
        <img :src="slide[index]">
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
      slide: ["images/banner/01.jpg","images/banner/02.jpg", "images/banner/03.jpg", "images/banner/04.jpg"],
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
}
.swiper-slide img{
  width:100%;
  height:100%;
}
.swiper-button-prev{
  background-image:url(../../public/images/banner/prev.png) !important; 
  width:45px !important;
  left:50px !important;
  background-size: 45px 44px !important;
}
.swiper-button-next{
  background-image:url(../../public/images/banner/next.png) !important; 
  width:45px !important;
  right:50px !important;
  background-size: 45px 44px !important;
}
</style>