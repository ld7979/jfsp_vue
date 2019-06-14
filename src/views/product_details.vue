<template>
<div>
    <myheader></myheader>
    <div class="wrapper">
      <div id="content" class="clearfix">
         <div class="goods-info">
           <div class="goods-simg" style="overflow-y:hidden">
               <div class="simg-box img-border" onmouseover="checkOut(this)">
                   <img src="images/details/chunnaixiao.png" alt=""> 
               </div>
           </div>
           <div class="goods-bimg">
               <img src="images/details/chunnaida.png" alt="">
           </div>
           <div class="info">
              <h3 class="goods-name">百菲酪 水牛纯牛奶200ml*10盒</h3> 
              <p class="description">网红水牛奶，香醇浓郁，就像在喝冰淇淋。营养丰富，珍贵稀有。</p> 
              <div class="sell-info">
                <span class="price">¥53.00</span>
                <s class="old-price">¥59.80</s> 
                <div class="other">
                  <span>月售: 1363箱</span>
                  <span>发货地: 长沙中转仓</span> 
                </div>   
              </div> 
              <div class="box">
                 <ul id="btn">
                   <li><button v-on:click="sub()">-</button></li>
                   <li><input type="text" value=1 size=3 v-model="count"></li>
                   <li><button v-on:click="add()">+</button></li>
                 </ul>    
              </div>
              <a href="" class="buy">立即购买</a>
           </div>    
         </div> 
         <div class="goods-img">
           <h3>商品详情</h3>
           <p>
             <img src="images/details/shangpin.jpg">
           </p>
           <p>
             <img src="images/details/gaodanbai.jpg">
             <img src="images/details/yuansheng.jpg">
             <img src="images/details/youzhi.jpg">
             <img src="images/details/nvhai.jpg">
             <img src="images/details/ziran.jpg">
             <img src="images/details/shaozi.jpg">
             <img src="images/details/xinxi.jpg">
             <img src="images/details/jiankang.jpg">
             <img src="images/details/jinghua.jpg">
             <img src="images/details/gaodu.jpg">
             <img src="images/details/gai.jpg">
             <img src="images/details/chunnai.jpg"> 
             <img src="images/details/xiguan.jpg">
             <img src="images/details/yingyang.jpg">
             <img src="images/details/baozhuang.jpg">
           </p>
         </div>
      </div>
    </div>
</div>
</template>
<script>
import myheader from '../components/myHeader'
export default {
    data(){
        return{
          count:1,
        }
    },
    components:{myheader},
    methods:{
      add:function(count){
          this.count++;
       },
      sub:function(count){
          if (this.count<=1){
            this.count=1;
          }else {
            this.count-=1;
          }
        }
    }    
}
</script>
<style scoped>
  #content{
      width:1000px;
      margin:80px auto 0;
  }
  .clearfix{
      zoom:1;
  }
  .goods-info{
      margin-top:30px;
      padding-bottom:40px;
      font-size:0
  }
  .goods-info .goods-simg {
    width: 56px;
    height: 56px;
    margin-right: 10px;
    font-size: 0;
    vertical-align: top;
    overflow: hidden;
}
.goods-info .goods-simg .simg-box {
    width: 54px;
    height: 54px;
    background: #f4f4f4;
    margin-bottom: 10px;
    border-radius: 4px;
    overflow: hidden;
    line-height: 56px;
    text-align: center;
}
.goods-info .img-border{
    border:1px solid #FFB31A;
}
.goods-info .goods-simg img {
    vertical-align: middle;
    width: 56px;
}
.goods-info .goods-bimg {
    position: relative;
    width: 320px;
    height: 320px;
    margin-right: 20px;
    background: #f4f4f4;
    border-radius: 6px;
    overflow: hidden;
    text-align: center;
    line-height: 320px;
}
.goods-info .goods-bimg img {
    vertical-align: middle;
    width: 320px;
}
.goods-info .goods-simg, .goods-info .goods-bimg, .goods-info .info {
    display: inline-block;
}
.goods-info .info {
    width: 580px;
    height: 320px;
    vertical-align: top;
}
.goods-info .info .goods-name {
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    margin-top: 30px;

}
.goods-info .info .description {
    margin-top: 12px;
    font-size: 15px;
    line-height: 27px;
    color: #999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right:150px;
}
.goods-info .sell-info{
    width:524px;
    margin-top:30px;
}
.goods-info .price{
    display: inline-block;
    margin-right:10px;
    font-size: 24px;
    line-height:24px;
    color:#ff4c44;
    
}
.goods-info .old-price {
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    color: #999;
    margin-right:380px;
}
.goods-info .other{
    margin-top:20px;
    font-size:15px;
    line-height:14px;
    margin-right:290px;
   
}
.goods-info .other span {
    margin-right:18px;
}
.goods-img {
    padding: 30px 0 40px;
    font-size: 0;
    text-align: center;
}
.goods-img h3 {
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 40px;
}
.goods-img img {
    width: 600px;
    vertical-align: initial;
}
.box{
    margin-top:30px;
}
button{
    width:35px;
    height:34px;
    color:#ffb31a;
    font-size: 25px;
    /* border-top-left-radius: 2%; */
    /* background-color:#f4f4f4; */
}
input{
    height:30px;
   
}
ul,li{
    list-style:none;
}
li{
    float:left;
    
}
input{
    text-align:center;
}
.goods-info .info .buy {
    display: inline-block;
    width: 80px;
    border-radius: 4px;
    background: #FFB31A;
    color: #fff;
    font-size: 15px;
    line-height: 34px;
    text-align: center;
    height: 34px;
    margin-right:300px;
}
a{
  text-decoration: none;
}
</style>

