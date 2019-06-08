<template>
  <header id="header">
    <nav class="nav clearfix">
      <a class="logo left" href="javascript:;">
        <img src="images/header/logo3.png" alt="">
      </a>
      <ul class="ul_nav">
        <li class="act"><a href="javascript:;">首页</a></li>
        <li style="position: relative">
          <a href="javascript:;">菜谱
            <span class="nass"></span>
          </a>
          <div class="ctip" style="display: block">
            <div class="ctab clearfix">
              <a href="javascript:;" target="_blank">
                <img src="images/header/jx3.png" >
                精选
              </a>
              <a href="javascript:;" target="_blank">
                <img src="images/header/menu3.png" >
                菜单
              </a>
            </div>
            <div class="citem clearfix">
              <span>食材</span>
              <div>
                <a href="javascript:;" target="_blank">猪肉</a>
                <a href="javascript:;" target="_blank">羊肉</a>
                <a href="javascript:;" target="_blank">鸡肉</a>
                <a href="javascript:;" target="_blank">牛肉</a>
                <a href="javascript:;" target="_blank">鱼</a>
                <a href="javascript:;" target="_blank">蔬菜</a>
                <a href="javascript:;" target="_blank">鲜果</a>
                <a href="javascript:;">更多
                  <img src="images/header/more2.png">
                </a>
              </div>
            </div>
            <div class="citem clearfix">
              <span>菜式</span>
              <div>
                <a href="javascript:;" target="_blank">下饭菜</a>
                <a href="javascript:;" target="_blank">快手菜</a>
                <a href="javascript:;" target="_blank">凉菜</a>
                <a href="javascript:;" target="_blank">宴客菜</a>
                <a href="javascript:;" target="_blank">私房菜</a>
                <a href="javascript:;" target="_blank">素食主义</a>
                <a href="javascript:;" target="_blank">下酒菜</a>
                <a href="javascript:;">更多
                  <img src="images/header/more2.png">
                </a>
              </div>
            </div>
            <div class="citem clearfix">
              <span>烘焙</span>
              <div>
                <a href="javascript:;" target="_blank">月饼</a>
                <a href="javascript:;" target="_blank">披萨</a>
                <a href="javascript:;" target="_blank">蛋挞</a>
                <a href="javascript:;" target="_blank">布丁</a>
                <a href="javascript:;" target="_blank">中式糕点</a>
                <a href="javascript:;" target="_blank">泡芙</a>
                <a href="javascript:;" target="_blank">松饼</a>
                <a href="javascript:;">更多
                  <img src="images/header/more2.png">
                </a>
              </div>
            </div>
            <div class="cmore">
               <a href="javascript:;">
                 查看更多
                 <img src="images/header/more2.png" alt="">
               </a>
            </div>
          </div>
        </li>
        <li><a href="javascript:;">笔记</a></li>
        <li><a href="javascript:;">主题站</a></li>
        <li><a href="javascript:;">商城</a></li>
        <li><a href="javascript:;">动漫</a></li>
        <li><a href="javascript:;">药品</a></li>
      </ul>
      <div class="search"> 
        <input type="text" value="搜索菜谱、菜单、食材、用户">
        <a class="sear" href="javascript:;"></a>
      </div>
      <div class="pubt">
        <a href="javascript:;">发布</a>
        <div class="pubt-box" style="display:block">
          <a href="javascript:;">发布菜单</a>
          <a href="javascript:;">创建菜单</a>
        </div>
      </div>
      <div class="perinfo">
        <a href="#/login">登录</a> | 
        <a href="#/reg">注册</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style scoped>
  @import '../assets/css/header.css';
</style>


