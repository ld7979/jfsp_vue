<template>
<div>
    <myheader></myheader>
    <div class="content">
        <div class="type-tab">
            <a class="changeStyle"  href="http://localhost:8080/#/caipu">精选</a>
            <a  href="http://localhost:8080/#/fenlei">分类</a>
            <a  href="http://localhost:8080/#/shicai">食材</a>
            <a href="http://localhost:8080/#/caidan">菜单</a>
        </div>
        <jingxuan></jingxuan>
        <!-- 当前位置 -->
        <div class="location">
            <p>你当前的位置:
                <a href="#">豆果美食</a>&gt;
                <a href="#">菜谱</a>&gt;
                <a href="#">精选菜谱</a>
            </p>
        </div>
    </div>
</div>
</template>
<script>
// 引入文件
import myheader from '../components/myHeader'
import jingxuan from '../components/jingxuan'
export default {
    data(){
        return{
         
        }
    },
    methods: {
        //type-tab>a绑定事件,点击时跳转到相应页面，a字体加粗，下划线，其他页面隐藏
        checked(){

        }
    },
    
    //注册
    components:{
        jingxuan,
        myheader
    }


}
</script>
<style scoped>
 .content{
        width:1000px;
        margin:80px auto 0;
    }
 /* .type-tab样式 */
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
    
    a:hover{
        color:#FFB31A;
    }
    a{
        color:#FFB31A;
        text-decoration: none;
        color:#72716c;
    }
    /* 当前位置栏 */
    .location{
        margin-top: 60px;
        
    }
</style>
