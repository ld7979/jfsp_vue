<template>
<div>
    <myheader></myheader>
    <div class="container">
        <div class="row ml-0 mr-0 mt-3">
            <!--左侧轮播+评论区-->
            <div class="col-sm-9 pl-0 pr-0">
                <!--轮播图-->
                <carousel></carousel>
                <!--轮播指示小图-->
                <div class="text-center div-idxs">
                    <ul class="list-unstyled ul-idxs">
                        <li><a href="javascript:;"><img src="../../public/imgs/cp01.jpg" alt=""></a></li>
                        <li><a href="javascript:;"><img src="../../public/imgs/cp02.jpg" alt=""></a></li>
                        <li><a href="javascript:;"><img src="../../public/imgs/cp03.jpg" alt=""></a></li>
                        <li><a href="javascript:;"><img src="../../public/imgs/cp04.jpg" alt=""></a></li>
                        <li><a href="javascript:;"><img src="../../public/imgs/cp05.jpg" alt=""></a></li>
                        <li><a href="javascript:;"><img src="../../public/imgs/cp06.jpg" alt=""></a></li>
                    </ul>
                </div>
                <!--评论区-->
                <div class="pl_div">
                    <h4>周末闲暇 做了几道小菜 小酌一杯</h4>
                    <div class="mt-3 mb-3">
                        <router-link class="pl_font" to="dg_person">
                            <img class="small_img" src="../../public/imgs/0018.jpeg" alt="">
                            Tina厨房日记
                            <img class="my_img" src="../../public/imgs/zs.png" alt="">
                        </router-link>
                        <a class="person_font a_border" href="javascript:;">+关注</a>
                        <span class="float-right">
                            <a class="person_font a_border" href="javscript:;"><img class="my_img mr-2" src="../../public/imgs/ax.png" alt="">21</a>
                            <a class="person_font a_border" href="javascript:;"><img class="my_img mr-2" src="../../public/imgs/sc.png" alt="">收藏</a>
                        </span>
                    </div>
                    <p class="pl_font">打小身处东北 自带酒量 酒桌没红过脸 哈哈哈哈哈哈~ 周末闲来无事 买了蛏子和蚬子 大火爆炒 三五好友 小聚一起 必须得“走一个~” 有句话不是说 周五不喝酒 人生路白走嘛 哈哈~❤️
                    </p>
                    <p class="pl_font">#周五不喝酒，人生路白走</p>
                    <p class="pl_font text-muted">创建时间:2019-06-09 09:24:04</p>
                    <div class="mt-5 mb-5">
                        <h6>评论</h6>
                        <div class="border-bottom pb-3">
                            <a class="pl_font" href="javascript:;"><img class="small_img mr-2" src="../../public/imgs/pl01.jpg" alt="">小小庆回国</a>
                            <p class="pl_font ml-4">看着就好吃😋</p>
                            <span class="pl_font text-muted ml-4">2019-06-10 17:44:32</span>
                        </div>
                        <h6 class="text-center mt-3">暂无评论</h6>
                    </div>
                </div>
                <!--底部导航条-->
                <div class="mt-5 mb-5 d-flex justify-content-start">
                    <span class="my_span">你当前的位置:
                        <a class="a_font" href="javascript:;">豆果美食&nbsp;&gt;&nbsp;</a>
                        <router-link  class="a_font" to="biji">笔记&nbsp;&gt;&nbsp;</router-link>
                        <router-link  class="a_font" to="dg_details">今日份早餐</router-link>
                    </span>
                </div>
            </div>
            <!--右侧相关笔记-->
            <div class="col-sm-3 pr-0 text-left">
                <h6 class="font-weight-bold">相关笔记</h6>
                <div class="d-flex justify-content-start mt-2">
                    <router-link to="dg_person"><img class="right_img" src="../../public/imgs/cp8.jpeg" alt=""></router-link>
                    <div class="ml-2">
                        <router-link class="person_font" to="dg_person">这家伙是全村的希望 火了🔥🔥</router-link>
                        <p class="person_font mt-3"><img class="my_img mr-2" src="../../public/imgs/ax.png" alt="">158</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start mt-2">
                    <router-link to="dg_person"><img class="right_img" src="../../public/imgs/cp9.jpeg" alt=""></router-link>
                    <div class="ml-2">
                        <router-link class="person_font" to="dg_person">青岛啤酒，值得拥有</router-link>
                        <p class="person_font mt-3"><img class="my_img mr-2" src="../../public/imgs/ax.png" alt="">188</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start mt-2">
                    <router-link to="dg_person"><img class="right_img" src="../../public/imgs/cp10.jpg" alt=""></router-link>
                    <div class="ml-2">
                        <router-link class="person_font" to="dg_person">美食配美景，完美假期</router-link>
                        <p class="person_font mt-3"><img class="my_img mr-2" src="../../public/imgs/ax.png" alt="">57</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start mt-2">
                    <router-link to="dg_person"><img class="right_img" src="../../public/imgs/cp12.jpg" alt=""></router-link>
                    <div class="ml-2">
                        <router-link class="person_font" to="dg_person">到潮汕你一定要吃的牛肉粿条汤</router-link>
                        <p class="person_font mt-3"><img class="my_img mr-2" src="../../public/imgs/ax.png" alt="">175</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start mt-2">
                    <router-link to="dg_person"><img class="right_img" src="../../public/imgs/cp13.jpg" alt=""></router-link>
                    <div class="ml-2">
                        <router-link class="person_font" to="dg_person">让你幸福感爆棚的食物</router-link>
                        <p class="person_font mt-3"><img class="my_img mr-2" src="../../public/imgs/ax.png" alt="">175</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import myheader from './myHeader'
import carousel from './carouael'

export default {
    data(){
        return {}
    },
    components:{
        myheader,
        carousel
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            autoplay:3000,
            loop: true,
            pagination:'.swiper-pagination',
            paginationClickable:true,    
            navigation: {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            },
            /*用户操作自动停止切换*/
            autoplayDisableOnInteraction:true,
         })
    }
}
</script>
<style scoped>
    .container{
        margin-top:80px;
    }
    /*轮播指示小图*/
    .div-idxs{
        width:690px;
        height:auto;
        position:relative;
        margin:0 auto;
    }
    .ul-idxs{
        width:100%;
        position:absolute;
        top:70px;
        left:140px;
    }
    .ul-idxs>li{
        float:left;
        border-radius:5px;
        margin:0 5px;
        cursor:pointer;
    }
    .ul-idxs img{
        width:58px;
        height:64px;
        border-radius:5px;
    }

    /*评论区*/
    .pl_div{
        margin-top:150px;
        text-align:left;
    }
    .my_img{
        width:16px;
        height:16px;
    }
    .small_img{
        width:30px;
        height:30px;
        border-radius:50%;
    }
    .pl_font{
        font-size:15px;
        color:#333;
        text-decoration:none;
    }
    .person_font{
        font-size:12px;
        color:#666;
        line-height:16px;
    }
    .a_border{
        width:86px;
        height:34px;
        border:1px solid #000;
        line-height:34px;
        text-align:center;
        border-radius:5px;
        padding:8px 25px;
        margin-left:20px;
    }
    /*底部导航条*/

    .my_span{
        font-size:13px;
        color:#000;
        line-height:13px;
    }
    .a_font{
        font-size:13px;
        line-height:13px;
        color:#000;
    }
    .a_font:hover{
        text-decoration:none;
        color:#ffb31a;
    }
    /*右侧相关笔记*/
    .right_img{
        width:88px;
        height:88px;
        border-radius:5px;
    }
</style>