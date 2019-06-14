<template>
<div>
    <myheader></myheader>
    <div class="content">
        <div id="left">
            <!-- 首图 -->
            <img class="bigimg" src="../assets/caipu/bingzhenkelemiyougua.jpg" alt="">
            <!-- 标题等 -->
            <div id="title">
                <h2>冰镇可乐蜜油瓜</h2>
                <div class="bout">
                    <span>精品</span>
                    <span>独家</span>
                </div>
                <div class="user">
                    <img class="avatar" src="../assets/avatar/1.jpg" alt="">
                    <span>sure汪</span>
                    <span>关注</span>
                </div>
                <p>【3-356】这是一个认真搬砖抽空吃努力睡够八小时的故事……长话短说扔下就跑……5.0了对不对？ ----- 2019.6.13</p>
            </div>
            <!-- 食材清单 -->
            <div id="shicai">
                <h3>食材清单</h3>
                <table>
                    <tr>
                        <td>
                            <span>苦瓜</span>
                            <span>一根</span>
                        </td>
                        <td>
                            <span>苦瓜</span>
                            <span>一根</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>苦瓜</span>
                            <span>一根</span>
                        </td>
                        <td>
                            <span>苦瓜</span>
                            <span>一根</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>苦瓜</span>
                            <span>一根</span>
                        </td>
                        <td>
                            <span>苦瓜</span>
                            <span>一根</span>
                        </td>
                    </tr>
                
                </table>
            </div>
            <!-- 烹饪步骤 -->
            <div id="step">
                <h3>烹饪步骤</h3>
                <!-- 步骤一 -->
                <div>
                    <div>
                        <img src="../assets/caipu/bingzhenkelemiyougua1.jpg" alt="">
                    </div>
                    <div>
                        <p>步骤1</p>
                        苦瓜收拾干净对半劈开，努力去瓤去白膜，认真切成自己喜欢的样子，喜欢吃苦的胖又可以不去膜
                    </div>
                </div>
                <!-- 步骤二 -->
                <div v-for="n of 3">
                    <div>
                        <img src="../assets/caipu/bingzhenkelemiyougua2.jpg" alt="">
                    </div>
                    <div>
                        <p>步骤2</p>
                        锅里加水看心情加油，根据自己耐苦程度加白糖，大火烧开扔苦瓜
                        <!-- 
                            3.烫到瓜们变色关火捞出来控控水，过不过凉无所谓
                            4.泡到提前冰好加过蜜的可乐里，封好扔冰箱冷藏俩小时以上就可以吃啦
                            5.来，最后看瓜一眼
                            6.走了哟，明天见~
                        -->
                    </div>
               </div>
            </div>
            <!-- 全部作品 -->
            <div id="works">
                <h3>全部作品</h3>
                <ul>
                    <li>
                        <a href="#">
                            <img src="../assets/douguo/3.jpg" alt="">
                        </a>
                        <div>
                            <span>嘿嘿我走啦，各位晚安明天见</span>
                            <div class="worksuser">
                                <div>
                                    <img class="avatar" src="../assets/avatar/1.jpg" alt="">
                                    <span>sure汪</span>    
                                </div>
                                <div>
                                    <img class="avatar" src="../assets/xin.png" alt="">
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 评论区 -->
            <div id="comment">
                <h3>评论</h3>
                <div>
                    <img class="avatar" src="../assets/avatar/2.jpg" alt="">
                    <textarea name="" id="" cols="30" rows="10">发表评论，你需要登录或注册
                    </textarea>
                </div>
                <div>发表评论</div>
            </div>
            <!-- 评论 -->
            <div class="conmentAll">
                <ul>
                    <li v-for="n of 5" :key="n">
                        <img class="avatar" src="../assets/avatar/5.jpg" alt="">
                        <div>
                            <p>瓶子喵喵</p>
                            <p>请收下我的膝盖，棒棒哒</p>
                            <p>
                                <span>2019-06-14 04:09:38</span>
                                <span>回复</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
          
            
        </div>
        <!-- 右侧广告区 -->
        <div id="right">
            <h2>右侧空白广告区</h2>
        </div>
    </div>
</div>
</template>
<script>
import myheader from "../components/myHeader"  
export default {
    data(){
        return {}
    },
    components:{myheader}
}
</script>
<style scoped>
  .content{
            width: 1000px;
            margin:80px auto 0;
            color:#333;
            display:flex;
            flex-wrap:nowrap;
            justify-content: space-between;
        }
        /* 左侧宽度 */
        #left{
            width:690px;
        }
        /* 右侧广告区域 */
        #right{
            width:280px;
            background-color:beige;
        }
        /* 首图 */
        .bigimg{
            width:100%;
            border-radius: 10px;
        }
        /* 用户头像格式 */
        .avatar{
            width:30px;
            height:30px;
            border-radius:50%;
        }
        /* 评论列表ul */
        ul{
            list-style-type:none;
            padding: 0px;
        }
        a{
            text-decoration-line: none;
        }
        /* title中样式 */
        .bout>span{
            padding: 4px 8px;
            border-radius: 4px;
            margin-right:8px;
            color:white;
        }
        .bout>span:first-child{
            background-color:#FFB31A;
        }
        .bout>span:last-child{
            background-color:#FF4C44;
        }
        .user{
            margin-top:20px;
            display: flex;
        }
        .user>span:last-child{
            border:1px solid #333;
            padding: 5px 20px;
            border-radius: 5px;
            margin-left:50px;
        }
        .user>span:nth-child(2){
            margin-top:5px;
            margin-left :4px;
        }
        /*shicai食材样式 */
        #shicai{
            margin-top:60px;
        }
        table{
            width:100%;
            border-collapse:collapse;
        }
        table tr>:not(:last-child){
            border-right:1px solid #ccc;
        }
        table tr{
            border-bottom:1px solid #ccc;
            height:50px;
        }
        table tr:last-child{
            border-bottom:1px solid #fff;
        }
        table td{
            padding: 10px;
        }
        table td>span:last-child{
            display: block;
            width:10%;
            float: right;
        }
        /* step步骤 */
        #step{
            margin:50px 0;
        }
        #step>div{
            display:flex;
            margin-top:30px;
        }
        #step>div>div>img{
            width:200px;
            height:200px;
            border-radius: 10px;
        }  
        #step>div>div:last-child{
            margin-left: 15px;
        } 
        /* 全部作品 */
        #works>ul{
            display: flex;
        }
        #works>ul>li{
            width:220px;
        }
        #works>ul>li>a>img{
            width:220px;
            height:220px;
            border-radius: 10px;
        }
        #works>ul>li>div>span{
            overflow:hidden;
        }
        .worksuser{
            display: flex;
            justify-content: space-between;
            font-size:14px;
            align-items: center;
        }
        .worksuser>div{
            display: flex;
            align-items: center;
        }
        /* comment评论区 */
        #comment{
            margin-top: 80px;
        }
        #comment>div{
            display: flex;
        }
        #comment>div textarea{
            margin-left:30px;
            border-radius: 5px;
            width:650px;
            border:1px solid #ddd;
            padding: 20px;
        }
        #comment>div:last-child{
            float: right;
            color:#FFB31A;
            border:1px solid #FFB31A;
            border-radius: 5px;
            padding: 5px 10px;
            margin: 20px 0;
        }
        .conmentAll{
            margin-top:60px;
        }
        .conmentAll>ul>li{
            display: flex;
        }
        .conmentAll li>div{
            margin-left:20px;
        }
        .conmentAll li>div>p:first-child{
            margin-top:0px;
        }
        .conmentAll li{
            padding: 10px;
            border-bottom:1px solid #ddd;    
        }  
</style>