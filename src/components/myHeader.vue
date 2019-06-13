<template>
  <header id="header">
    <nav class="nav clearfix">
      <router-link class="logo left" to="/">
        <img src="images/header/logo3.png">
      </router-link>
      <ul class="ul_nav">
        <li :class="{act:acdex}"><router-link to="/" @click.native="indsel">首页</router-link></li>
        <li @mouseout="cmouseOut"  @mouseover="cmouseOver" :class="{act:cdex}" style="position: relative" >
          <router-link @click.native="select"   to="/">菜谱
            <span class="nass"></span>
          </router-link>
          <div v-show="cdisp"  class="ctip">
            <div class="ctab clearfix">
              <router-link to="javascript:;" target="_blank">
                <img src="images/header/jx3.png" >
                精选
              </router-link>
              <router-link to="javascript:;" target="_blank">
                <img src="images/header/menu3.png" >
                菜单
              </router-link>
            </div>
            <div class="citem clearfix">
              <span>食材</span>
              <div>
                <router-link to="javascript:;" target="_blank">猪肉</router-link>
                <router-link to="javascript:;" target="_blank">羊肉</router-link>
                <router-link to="javascript:;" target="_blank">鸡肉</router-link>
                <router-link to="javascript:;" target="_blank">牛肉</router-link>
                <router-link to="javascript:;" target="_blank">鱼</router-link>
                <router-link to="javascript:;" target="_blank">蔬菜</router-link>
                <router-link to="javascript:;" target="_blank">鲜果</router-link>
                <router-link to="javascript:;" target="_blank">更多
                  <img src="images/header/more2.png">
                </router-link>
              </div>
            </div>
            <div class="citem clearfix">
              <span>菜式</span>
              <div>
                <router-link to="javascript:;" target="_blank">下饭菜</router-link>
                <router-link to="javascript:;" target="_blank">快手菜</router-link>
                <router-link to="javascript:;" target="_blank">凉菜</router-link>
                <router-link to="javascript:;" target="_blank">宴客菜</router-link>
                <router-link to="javascript:;" target="_blank">私房菜</router-link>
                <router-link to="javascript:;" target="_blank">素食主义</router-link>
                <router-link to="javascript:;" target="_blank">下酒菜</router-link>
                <router-link to="javascript:;">更多
                  <img src="images/header/more2.png">
                </router-link>
              </div>
            </div>
            <div class="citem clearfix">
              <span>烘焙</span>
              <div>
                <router-link to="javascript:;" target="_blank">月饼</router-link>
                <router-link to="javascript:;" target="_blank">披萨</router-link>
                <router-link to="javascript:;" target="_blank">蛋挞</router-link>
                <router-link to="javascript:;" target="_blank">布丁</router-link>
                <router-link to="javascript:;" target="_blank">中式糕点</router-link>
                <router-link to="javascript:;" target="_blank">泡芙</router-link>
                <router-link to="javascript:;" target="_blank">松饼</router-link>
                <router-link to="javascript:;">更多
                  <img src="images/header/more2.png">
                </router-link>
              </div>
            </div>
            <div class="cmore">
               <router-link to="javascript:;">
                 查看更多
                 <img src="images/header/more2.png" alt="">
               </router-link>
            </div>
          </div>
        </li>
        <li :class="{act:activ==task}" v-for="(task,index) of tasks" :key="index" ><router-link @click.native="myactive(task)"  :to="task.method">{{task.name}}</router-link></li>
      </ul>
      <div class="search"> 
        <input type="text" value="搜索菜谱、菜单、食材、用户">
        <router-link class="sear" to="javascript:;"></router-link>
      </div>
      <div class="pubt" @mouseover="fmouseOver" @mouseout="fmouseOut">
        <router-link  to="javascript:;">发布</router-link>
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
      this.acdex=false;
      this.cdex=false;
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
  }
}
</script>

<style scoped>
  @import '../assets/css/header.css';
</style>


