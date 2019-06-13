<template>
  <header id="header">
    <nav class="nav clearfix">
      <router-link class="logo left" to="/">
        <img src="images/header/logo3.png">
      </router-link>
      <ul class="ul_nav">
        <li :class="{act:acdex}"><router-link to="/" @click.native="indsel">首页</router-link></li>
        <li :class="{act:cdex}" style="position: relative" >
          <router-link @click.native="select" @mouseover.native="cmouseOver" @mouseout.native="cmouseOut" to="/">菜谱
            <span class="nass"></span>
          </router-link>
          <div v-show="cdisp"  class="ctip">
            <div class="ctab clearfix">
              <a to="javascript:;" target="_blank">
                <img src="images/header/jx3.png" >
                精选
              </a>
              <a to="javascript:;" target="_blank">
                <img src="images/header/menu3.png" >
                菜单
              </a>
            </div>
            <div class="citem clearfix">
              <span>食材</span>
              <div>
                <a to="javascript:;" target="_blank">猪肉</a>
                <a to="javascript:;" target="_blank">羊肉</a>
                <a to="javascript:;" target="_blank">鸡肉</a>
                <a to="javascript:;" target="_blank">牛肉</a>
                <a to="javascript:;" target="_blank">鱼</a>
                <a to="javascript:;" target="_blank">蔬菜</a>
                <a to="javascript:;" target="_blank">鲜果</a>
                <a to="javascript:;">更多
                  <img src="images/header/more2.png">
                </a>
              </div>
            </div>
            <div class="citem clearfix">
              <span>菜式</span>
              <div>
                <a to="javascript:;" target="_blank">下饭菜</a>
                <a to="javascript:;" target="_blank">快手菜</a>
                <a to="javascript:;" target="_blank">凉菜</a>
                <a to="javascript:;" target="_blank">宴客菜</a>
                <a to="javascript:;" target="_blank">私房菜</a>
                <a to="javascript:;" target="_blank">素食主义</a>
                <a to="javascript:;" target="_blank">下酒菜</a>
                <a to="javascript:;">更多
                  <img src="images/header/more2.png">
                </a>
              </div>
            </div>
            <div class="citem clearfix">
              <span>烘焙</span>
              <div>
                <a to="javascript:;" target="_blank">月饼</a>
                <a to="javascript:;" target="_blank">披萨</a>
                <a to="javascript:;" target="_blank">蛋挞</a>
                <a to="javascript:;" target="_blank">布丁</a>
                <a to="javascript:;" target="_blank">中式糕点</a>
                <a to="javascript:;" target="_blank">泡芙</a>
                <a to="javascript:;" target="_blank">松饼</a>
                <a to="javascript:;">更多
                  <img src="images/header/more2.png">
                </a>
              </div>
            </div>
            <div class="cmore">
               <a to="javascript:;">
                 查看更多
                 <img src="images/header/more2.png" alt="">
               </a>
            </div>
          </div>
        </li>
        <li :class="{act:activ==task}" v-for="(task,index) of tasks" :key="index" ><router-link @click.native="myactive(task)"  :to="task.method">{{task.name}}</router-link></li>
      </ul>
      <div class="search"> 
        <input type="text" value="搜索菜谱、菜单、食材、用户">
        <router-link class="sear" to="javascript:;"></router-link>
      </div>
      <div class="pubt">
        <router-link @mouseover.native="fmouseOver" @mouseout.native="fmouseOut" to="javascript:;">发布</router-link>
        <div v-show="fdisp" class="pubt-box">
          <router-link to="javascript:;">发布菜单</router-link>
          <router-link to="javascript:;">创建菜单</router-link>
        </div>
      </div>
      <div class="perinfo">
        <router-link to="/login">登录</router-link> | 
        <router-link to="/reg">注册</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { constants } from 'crypto';
export default {
  data(){
    return {
      cdisp:false,
      fdisp:false,
      tasks:[
        // {name:"首页",method:"/"},
        // {name:"菜谱",method:"/"},
        {name:"笔记",method:"/"},
        {name:"主题站",method:"/"},
        {name:"商城",method:"/"},
        {name:"动漫",method:"/"},
        {name:"药品",method:"/"},
      ],
      activ:0,
      acdex:true,
      cdex:false,
    }
  },
  methods:{
    cmouseOver(){
      this.cdisp=true;
    },
    cmouseOut(){
      this.cdisp=false;
    },
    fmouseOver(){
      this.fdisp=true;
    },
    fmouseOut(){
      this.fdisp=false;
    },
    myactive(task){
      this.activ=task;
    },
    indsel(){
      this.cdex=false;
      this.acdex=true;
    },
    select(){
      this.acdex=false;
      this.cdex=true;
    },
    
    select($event){
       if(location.href==$event.target.href){
         this.acdex=false;
         this.cdex=false;
         $event.target.parentElement.className="act";
       }
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/header.css';
</style>


