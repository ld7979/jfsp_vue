<template>
  <div class="lfoot">
    <div class="clink">
      <a href="javascript:;">关于豆果</a>·
      <a href="javascript:;">在豆果工作</a>·
      <a href="javascript:;">意见反馈</a>·
      <a href="javascript:;">友情链接</a>·
      <a href="javascript:;">菜谱大全</a>·
      <a href="javascript:;">品牌馆</a>
    </div>
    <div class="copy">
        ©2009-2015 
        <a href="javascript:;">北京豆果信息技术有限公司</a> 
        <a href="javascript:;">京ICP证111032号</a>
          京公网安备11010102001133号 京网文[2014]0774-174号
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

<style scoped>
.lfoot{
  width:940px;
  margin:30px auto 0;
}
.clink{
  width:940px;
  padding: 15px 0;
}
.clink>a{
  font-size:12px;
  color:#6b553f;
}
.clink>a:hover{
  text-decoration: underline;
}
.copy,.copy>a{
  font-size:12px;
  color:#999;
  margin-bottom: 20px;
}
.copy>a:hover{
  text-decoration: underline;
}
</style>
