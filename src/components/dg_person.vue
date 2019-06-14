<template>
<div>
    <myheader></myheader>
    <div class="container">
        <!--顶部个人信息-->
        <div class="d-flex justify-content-content mt-5 mb-3 pb-3">
            <a href="javascript:;"><img class="person_img" src="../../public/imgs/add01.jpeg" alt=""></a>
            <div class="ml-3 text-left">
                <p><a class="person_name" href="javascript:;">椛吃</a><img class="my_img" src="../../public/imgs/zs.png" alt=""></p>
                <p class="person_font"><img class="my_img" src="../../public/imgs/female.png" alt="">山东 威海市</p>
                <p class="person_font">经验值:21228</p>
                <span class="person_font">在“椛吃”的小世界里，唯有花与美食不可辜负. 微博：椛吃兔 微信：Kerry-Tong</span>
            </div>
            <a class="person_font a_border" href="javascript:;">+关注</a>
            <div class="d-flex my_div">
                <a class="a_size" href=""><p class="mb-0 person_font">17</p><p class="mb-0 person_font">关注</p></a>
                <span>|</span>
                <a class="a_size" href=""><p class="mb-0 person_font">145590</p><p class="mb-0 person_font">粉丝</p></a>
                <span>|</span>
                <a class="a_size" href=""><p class="mb-0 person_font">200</p><p class="mb-0 person_font">菜谱</p></a>
                <span>|</span>
                <a class="a_size" href=""><p class="mb-0 person_font">639</p><p class="mb-0 person_font">笔记</p></a>
            </div>
        </div>
        <!--概览-->
        <div>
            <!--导航条-->
            <div class="d-flex justify-content-start">
                <a class="my_nav font-weight-bold" href="">概览</a>
                <a class="my_nav" href="">菜谱</a>
                <a class="my_nav" href="">菜单</a>
                <a class="my_nav" href="">笔记</a>
                <a class="my_nav" href="">美食日记</a>
            </div>
            <!--发布的菜谱-->
            <div class="mt-3">
                <p class="text-left"><a class="my_font" href="">发布的菜谱(200)</a></p>
                <div class="d-flex justify-content-between">
                    <div class="text-left">
                        <router-link to="dg_details"><img class="big_img" src="../../public/imgs/food1.jpeg" alt=""></router-link>
                        <p class="mb-0"><a class="my_nav" href="">酥皮泡芙#童年不同样，美食有花样#</a></p>
                        <p class="mb-0 a_font">
                            <span><img class="my_img" src="../../public/imgs/view.png" alt="">142798</span>
                            <span><img class="my_img" src="../../public/imgs/sc.png" alt="">4673</span>
                        </p>
                    </div>
                    <div class="ml-2 text-left">
                        <router-link to="dg_details"><img class="big_img" src="../../public/imgs/food2.jpeg" alt=""></router-link>
                        <p class="mb-0"><a class="my_nav" href="">迷迭香菲力牛排</a></p>
                        <p class="mb-0 a_font">
                            <span><img class="my_img" src="../../public/imgs/view.png" alt="">125276</span>
                            <span><img class="my_img" src="../../public/imgs/sc.png" alt="">4385</span>
                        </p>
                    </div>
                    <div class="ml-2 text-left">
                        <router-link to="dg_details"><img class="big_img" src="../../public/imgs/food3.jpeg" alt=""></router-link>
                        <p class="mb-0"><a class="my_nav" href="">草莓舒芙蕾松饼</a></p>
                        <p class="mb-0 a_font">
                            <span><img class="my_img" src="../../public/imgs/view.png" alt="">123599</span>
                            <span><img class="my_img" src="../../public/imgs/sc.png" alt="">4469</span>
                        </p>
                    </div>
                </div>
            </div>
            <!--发布的菜单-->
            <div class="mt-3 text-left">
                <p class="text-left"><a class="my_font" href="">发布的菜单(1)</a></p>
                <div class="img_div">
                    <a href=""><img class="big_img" src="../../public/imgs/food4.jpeg" alt=""></a>
                    <div class="my_text text-center">
                        <h5 class="font-weight-bold text-white text-center">用心做好每一餐，好好吃饭不将就</h5>
                        <span class="text-white  text-center">12道菜谱</span>
                    </div>
                </div>
            </div>
            <!--发布的笔记-->
            <div class="mt-3">
                <p class="text-left"><a class="my_font" href="">发布的笔记(639)</a></p>
                <!--第一行-->
                <div class="d-flex justify-content-between">
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food5.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">早餐</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">417
                            </div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food6.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">早餐</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">58
                            </div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food7.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">下午茶</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">290
                            </div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food8.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">早餐</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">200
                            </div>
                        </div>
                    </div>
                </div>
                <!--第二行-->
                <div class="d-flex justify-content-between">
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food9.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">酥皮加了红丝绒粉</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">37
                            </div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food10.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">下午茶</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">167
                            </div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food11.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">早餐</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">58
                            </div>
                        </div>
                    </div>
                    <div class="ml-3">
                        <router-link to="dg_details"><img class="one_two" src="../../public/imgs/food12.jpeg" alt=""></router-link>
                        <div class="my_bottom_div">
                            <p class="text-left"><a class="a_font" href="">下午茶</a></p>
                            <div class="float-right a_font">
                                <img class="my_img" src="../../public/imgs/ax.png" alt="">245
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--底部导航-->
            <div class="mt-5 mb-5 d-flex">
                <span class="my_span">你当前的位置:
                    <router-link class="a_font" to="biji">豆果美食&nbsp;&gt;&nbsp;</router-link>
                    <a class="a_font" href="javascript:;">个人中心</a>
                </span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import myheader from './myHeader'
export default {
    data(){
        return {}
    },
    components:{
        myheader
    }
}
</script>
<style scoped>
  .container{
      margin-top:80px;
  }
    .person_img{
    width:120px;
    height:120px;
    border-radius:50%;
    }
    .person_name{
        font-size:20px;
        font-weight:bold;
        color:#000;
        text-decoration:none;
    }
    .person_name:hover{
        color:#000;
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
    }
    /*右侧导航样式*/
    .my_div{
        width:320px;
        height:62px;
        padding:15px 0;
        margin-left:10px;
        border-radius:4px;
        background:#F1F7FA;
    }
    .a_size{
        width:80px;
        height:36px;
        text-align:center;
        color:#000;
    }
    .a_size:hover{
        color:#ffb31a;
        text-decoration:none;
    }
    /*导航条样式*/
    .my_nav{
        color:#333;
        margin-right:15px;
        font-size:14px;
    }
    .my_nav:hover{
        color:#ffb31a;
        text-decoration:none;
    }
    /*菜谱，菜单，笔记*/
    .my_font{
        color:#000;
        text-decoration:none;
        font-weight:bold;
    }
    .big_img{
        width:324px;
        height:215px;
        border-radius:5px;
    }
    .my_img{
        width:15px;
        height:15px;
    }
    .two_img{
        width:324px;
        height:182px;
    }
    .img_div{
        position:relative;
        overflow:hidden;
    }
    .my_text{
        position:absolute;
        top:85px;
        left:60px;
        color:#fff;
        text-align:center;
        
    }
    /*笔记*/
    .one_two{
        width:240px;
        height:240px;
        border-radius:5px;
    }
    .my_bottom_div{
        width:240px;
        height:70px;
        box-shadow:1px 1px 1px 1px #e9ecef;
        margin-bottom:15px;
        padding:0 10px;
    }
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
</style>