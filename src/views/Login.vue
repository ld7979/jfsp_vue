<template>
  <div>
    <lheader></lheader>
    <div class="lmain clearfix">
      <div class="bg">
        <div class="bgc">
          <img src="images/login/sinin.png" alt="">
        </div>
      </div>
      <div class="dglo">
        <div class="dlzc">
          <span>登录</span>
          <span><router-link to="/reg">去注册 &gt;</router-link></span>
        </div>
        <div class="logone">
          <div class="inp">
            <input  v-model="uname" id="username" placeholder="请输入手机号" class="udl" type="text">
          </div>
          <div class="inp">
            <input v-model="upwd" id="password" placeholder="请输入密码" class="udl" maxlength="20" type="password">
          </div>
          <div class="forg">
            <a href="javascript:;">忘记密码&gt;</a>
            <span id="err" class="twro" style="margin-left:20px;visibility: visible;"></span>
          </div>
          <div class="dlbtn">
            <router-link @click.native="log" to="/login">登录</router-link>
          </div>
          <div class="other">
            <p>使用社交账号登录豆果美食</p>
            <div class="tengxin">
              <a href="javascript:;"><img src="images/login/timg.jpg"> 腾讯账号</a>
              <a href="javascript:;"><img src="images/login/14949890828189.jpg"> 新浪微博</a>
            </div>
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
    return {
      uname:"",
      upwd:""
    }
  },
  watch:{
    uname(){
      this.log();
    },
    upwd(){
      this.log();
    }
  },
  components:{lheader,lfooter},
  methods:{
    log(){
      if(this.uname===""){
        err.innerHTML="手机号不能为空"
      }else if(!/^1[3-9]\d{9}$/.test(this.uname)){  
        err.innerHTML="手机号错误"; 
      }else  if(this.upwd===""){
        err.innerHTML="密码不能小于6位"
      }else if(!/^\w{6,}$/.test(this.upwd)){
        err.innerHTML="密码不能小于6位";
      }else{
        err.innerHTML="";
      }     
    }
  }
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
  .lmain{
    width:940px;
    margin:0 auto;
  }
  .bg{
    width:540px;
    float: left;
  }
  .bgc{
    width:540px;
    text-align: center;
    margin-top:87px;
  }
  .dglo{
    width:400px;
    min-height: 450px;
    background:#fff;
    float: right;
    box-shadow: 0 1px 3px rgba(100,100,100,.1);
    border-radius: 2px;
  }
  .dlzc{
    width:400px;
    height:56px;
    border-bottom:1px solid #f8f8f7;
    position: relative;
  }
  .dlzc>span:first-child{
    font-size:18px;
    color:#333;
    line-height: 56px;
    position: absolute;
    left:30px;
    text-align: left;
  }
  .dlzc>span:last-child{
    line-height: 56px;
    font-size: 16px;
    position: absolute;
    right:18px;
    text-align: right;
  }
  .dlzc>span:last-child>a{
    color:#3ea000;
  }
  .dlzc>span:last-child>a:hover{
    text-decoration:underline;
  }
  .logone{
    width:350px;
    margin:30px 0 0 45px;
  }
  .inp{
    width:312px;
    padding: 10px 0;
    color: #999;
    margin-bottom: 10px;
  }
  .udl{
    width:300px;
    height: 30px;
    line-height: 26px;
    outline: 0;
    border:1px solid #deded3;
    padding: 5px 0px 5px 10px;
    font-size:14px;
    color:#999;
    border-radius: 4px;
    display: inline-block;
    box-sizing: content-box;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
  }
  .forg{
    padding:5px 0 15px 0;
    text-align: left;
  }
  .forg>a{
    color:#333;
  }
  .forg>a:hover{
    text-decoration: underline;
  }
  .twro{
    padding: 5px 0 10px 0;
    width: 300px;
    height: 20px;
    line-height: 20px;
    color: #ff0000;
  }
  .dlbtn{
    margin-bottom: 10px;
  }
  .dlbtn>a{
    width:310px;
    height:42px;
    display: block;
    border-radius: 3px;
    background:#FFB31A;
    color:#fff;
    line-height: 42px;
    text-align: center;
  }
  .dlbtn>a:hover{
    background:#ec7309;
  }
  .other{
    width:330px;
  }
  .other>p{
    color:#333;
    margin:20px 0 15px;
    text-align: left;
    font-size: 14px;
  }
  .tengxin{
    width:310px;
    height:40px;
    line-height: 40px;
    text-align: left;
    border-top:1px dotted #dedede;
    border-bottom:1px dotted #dedede;
  }
  .tengxin>a{
    width:76px;
    line-height: 40px;
    display: inline-block;
    font-size:12px;
    color:#333;
    margin-right:40px;
  }
  .tengxin>a:hover{
    text-decoration: underline;
  }
  .tengxin>a>img{
    width:15px;
    margin-right:5px;
  }
</style>

