<template>
  <div class="l_top">
    <div class="l_logo">
      <a href="/">
        <img src="images/header/logo3.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style  scoped>
*{
  margin:0;
  padding: 0;
}
.l_top{
  width:100%;
  margin-bottom:40px;
  border-bottom: 1px solid #f3f3f3;
  background:#fff;
}
.l_logo{
  width:940px;
  height:90px;
  margin:0 auto;
  text-align: left;
}
.l_logo>a>img{
  width:180px;
  padding: 20px 0 0 15px;
  box-sizing: border-box;
}
</style>

