<template>
<div>
    <myheader></myheader>
    <div class="content">
        <div class="type-tab">
            <a  href="http://localhost:8080/#/caipu">精选</a>
            <a  href="http://localhost:8080/#/fenlei">分类</a>
            <a  href="http://localhost:8080/#/shicai">食材</a>
            <a class="changeStyle" href="http://localhost:8080/#/caidan">菜单</a>
        </div>
        <div class="new-hot">
            <a href="#">最新</a>
            <span>|</span>
            <a href="#">最热</a>
        </div>
        <div class="menu-list">
            <ul>    
                <li v-for="(n,i) of 12" :key="i">
                    <a href="#">
                        <img src="../assets/douguo/1.jpg" alt="">
                        <div>
                            <p>备战团圆饭 美味新一年</p>
                            <p>15道菜谱</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <pages></pages>
        <div class="location">
            <p>你当前的位置:
                <a href="#">豆果美食</a>&gt;
                <a href="#">菜谱</a>&gt;
                <a href="#">菜单</a>
            </p>
        </div>
    </div>
</div>   
</template>
<script>
import myheader from '../components/myHeader'
import caipuNav from '../components/caipuNav'
import pages from "../components/pages"
export default {
    data(){
        return{
            
        }
    },

     //注册
    components:{
        "caipunav":caipuNav,
        "pages":pages,
        myheader
    }
}
</script>
<style scoped>
     /* .type-tab样式 */
     .content{
        width:1000px; 
        margin:80px auto 0;
    }
    .type-tab>a{
        display: inline-block;
        height:42px;
        line-height:42px;
        text-decoration: none;
        color:#72716c;
        margin-right:30px;
        font-size: 14px;
    }
    .changeStyle{
        font-weight:bold;
        color:#383830;
        border-bottom:2px solid #383830;
    }
      
     /* a标签样式 */
         a{
            text-decoration:none;
            color:#72716c;
        }
        a:hover{
            color:#FFB31A;
        }
        .menu-list ul{
            list-style-type: none;
            margin:0px;
            padding: 0px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .menu-list ul>li{
            position: relative;
            margin:20px 0;
            
        }
        .menu-list ul>li>a{
            display: block;
            width:306px;
            height: 172px;
            overflow: hidden;
        }
        .menu-list ul img{
            width:100%;
            height: 100%;
            border-radius: 10px;
        }
        ul>li>a>div{
            position: absolute;
            width:100%;
            top: 45px;
            color:#fff;
            text-align: center;
        }
        ul>li>a>div>p:first-child{
            font-size:16px;
        }
        ul>li>a>div>p:last-child{
            font-size:13px;
        }
        /* 当前位置栏 */
    .location{
        margin-top: 60px;
        
    }
</style>


