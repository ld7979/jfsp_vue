<template>
  <header id="header">
    <nav class="nav clearfix">
      <a class="logo left" href="javascript:;">
        <img src="images/header/logo3.png" alt="">
      </a>
      <ul class="ul_nav">
        <li class="act"><a href="javascript:;">首页</a></li>
        <li>
          <a href="javascript:;">菜谱
            <span class="nass"></span>
          </a>
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
        <div class="pubt-box" style="display:none">
          <a href="javascript:;">发布菜单</a>
          <a href="javascript:;">创建菜单</a>
          <a href="javascript:;">123</a>
        </div>
      </div>
      <div class="perinfo">
        <a href="javascript">登录</a> | 
        <a href="Javascript:;">注册</a>
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


