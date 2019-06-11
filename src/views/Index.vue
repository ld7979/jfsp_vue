<template>
  <div>
    <myheader></myheader>
    <div id="banner">
      <img src="images/banner/01.jpg">
    </div>
    <div id="i_content" class="clearfix">
      <!-- 精选菜谱 -->
      <p class=i_title>每日精选菜谱 <router-link to="">更多&gt;</router-link></p>
      <ul class="recipe-list clearfix">
        <li class="i_item">
          <router-link class="cover br8" to="" target="_blank"><img src="images/index/01.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="" target="_blank">翡翠酿肉卷</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="" target="_blank">wiwiwi</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="" target="_blank"><img src="images/index/02.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="" target="_blank">#甜粽VS咸粽，你是哪一党？#海兔绿豆芽小炒</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="" target="_blank">踏月色而来7737</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="" target="_blank"><img src="images/index/03.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="" target="_blank">红烧肉（加蛋）</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="" target="_blank">QQ茜</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item" style="margin-right: 0">
          <router-link class="cover br8" to="" target="_blank"><img src="images/index/04.jpg"></router-link>
          <div>
            <router-link class="name text-lips" to="" target="_blank">#甜粽VS咸粽，你是哪一党？#西米水晶粽</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="" target="_blank">琥珀maggie</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="" target="_blank"></router-link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import myheader from '../components/myHeader'
export default {
  name: "Index",
  data() {
    return {};
  },
  components:{myheader}
  
};
</script>

<style scoped>
  @import '../assets/css/index.css';
</style>