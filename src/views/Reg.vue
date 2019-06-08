<template>
  <div>
    <lheader></lheader>
    <div class="rmain clearfix">
      <div class="bgr">
        <div class="thed">
          <span>新用户注册</span>
          <span>已有账号，<a href="#/login">直接登录 &gt;</a></span>
        </div>
        <div class="logbox">
          <div class="clearfix">
            <div class="iput">
              <input id="username" placeholder="请输入手机号"  class="wid" type="text">
            </div>
            <span class="lowrong" id="err_username"><p></p></span>
          </div>
          <div class="iisi" style="visibility: visible;">输入常用的手机号，便于登录和找回密码</div>
          <div class="clearfix">
            <div class="iput">
              <input id="nickname" placeholder="请输入昵称"  class="wid" maxlength="16" type="text">
            </div>
            <span class="lowrong" id="err_nickname"><p></p></span>
          </div>
          <div class="iisi">中英文均可，最多16个字喔~</div>
          <div class="clearfix">
            <div class="iput">
              <input id="password" placeholder="请输入密码"  class="wid" maxlength="20" type="password">
            </div>
            <span class="lowrong" id="err_password"><p></p></span>
          </div>
          <div class="iisi">密码长度为6-20位，不能含有空格</div>
          <div class="clearfix">
            <div class="iput">
              <input id="dpasswd" placeholder="确认密码"  class="wid" maxlength="20" type="password">
            </div>
            <span class="lowrong" id="err_dpasswd"><p></p></span>
          </div>
          <div class="iisi">再输入一次密码</div>
          <div class="clearfix" id="yzm_div">
            <div class="yzm">
              <input id="code" class="yzma" maxlength="6" placeholder="输入验证码" type="text">
              <button id="send_vercode" class="btn">获取验证码</button>
            </div>
          </div>
          <div class="clearfix">
            <span class="lowrong" id="err_public" style="margin-left:65px;"></span>
          </div>
          <div class="agree">
            <p class="tong">
              <input type="checkbox" checked id="agreement">
              我已阅读并且同意
              <a href="javascript:;" target="_blank" title="用户协议">豆果美食使用协议</a> 
            </p>
            <button id="signup" class="btnreg">注册</button>
          </div>
        </div>
      </div>
    </div>
    <lfooter></lfooter>
  </div>
</template>

<script>
import lheader from '../components/header'
import lfooter from '../components/footer'
export default {
  data(){
    return {}
  },
  components:{lheader,lfooter}
}
</script>

<style scoped>
  ul,li,p{
    margin:0;
    padding:0;
    list-style: none;
  }
  a{text-decoration: none;}
  .clearfix{ clear: both;}
  .clearfix:after{
    content: "";
    display: block;
    clear: both;
  }
 .rmain{
   width:940px;
   margin:0 auto;
 }
 .bgr{
   box-shadow: 0 1px 3px rgba(100,100,100,.1);
   border-radius: 2px;
   background:#fff;
 }
 .thed{
   width:940px;
   height:58px;
   line-height: 58px;
   position: relative;
   border-bottom: 1px solid #f8f8f7;
 }
 .thed>span:first-child{
   font-size:18px;
   position: absolute;
   left:32px;
   color:#333;
 }
 .thed>span:last-child{
   font-size:16px;
   color:#333;
   position: absolute;
   right:18px;
 }
 .thed>span:last-child>a{
   color:#3ea000;
 }
 .thed>span:last-child>a:hover{
   text-decoration: underline;
 }
 .logbox{
   width:610px;
   margin:30px 0 0 320px;
 }
 .iput{
   width:312px;
   height:45px;
   color:#999;
   float: left;
 }
 .wid{
   width:300px;
   height:28px;
   line-height: 28px;
   font-size:14px;
   vertical-align: middle;
   border: 1px solid #deded3;
   padding:5px 0px 5px 10px;
   box-sizing: content-box;
   display: inline-block;
   margin-bottom: 10px;
   border-radius: 4px;
 }
 .lowrong{
   width:200px;
   height:32px;
   line-height: 32px;
   display: inline-block;
   font-size:12px;
   color:#f00;
   margin-top:3px;
   margin-left:20px;
   text-align: left;
   float: left;
 }
 .iisi{
   height:22px;
   line-height:22px;
   color:#999;
   text-align: left;
   font-size:12px;
   visibility: hidden;
 }
 .yzm{
   width:550px;
   text-align: left;
 }
 .yzma{
   width: 102px;
   height: 22px;
   line-height: 22px;
   vertical-align: middle;
   padding: 5px 0px 5px 15px;
   font-size: 12px;
   border: 1px solid #deded3;
   box-sizing: content-box;
   cursor: not-allowed;
   border-radius: 3px;
 }
 .btn{
   width: 132px;
   height:34px;
   background:#e6e6e6;
   font-size:12px;
   color:#999;
   margin-left: 60px;
   border: 0;
   border-radius: 3px;
   border:1px solid #ccc;
 }
 .tong{
   font-size:14px;
   color:#999;
   margin-bottom: 20px;
 }
 .tong>a{
   color:#12937c;
 }
 .tong>a:hover{
   color:#f00;
   text-decoration: underline;
 }
 .agree{
   margin-bottom: 30px;
   text-align: left;
 }
 .btnreg{
   width:310px;
   height:42px;
   line-height: 42px;
   display: inline-block;
   background:#FFB31A;
   font-size:14px;
   color:#fff;
   cursor: pointer;
   border:0;
   margin-bottom: 30px;
 }
 .btnreg:hover{
   background: #ec7309;
 }
</style>
