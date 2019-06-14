<template>
<div>
    <myheader></myheader>
    <div class="content">
        <caipunav></caipunav>
        <div v-for="n1 of 10" :key="n1" class="sort-item">
            <h2>热门</h2>
            <div v-for="n2 of 5" :key="n2">
                <h4>热门食材</h4>
                <ul>
                    <li v-for="n3 of 12" :key="n3">
                        <a href="#">粽子</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import myheader from "../components/myHeader"   
import caipuNav from "../components/caipuNav"
export default {
    data(){
        return{
            
            title:["热门","蔬菜","菜式菜系",],
            subtitle:[["热门食材","家常菜","下饭菜","快手菜","减肥食谱"],["时令蔬菜","绿叶蔬菜","瓜类"],["菜式","中国菜","外国菜"]],
            list:[[["粽子","面条","土豆","快手鸡蛋菜","牛肉"],["粽子","面条","土豆","快手鸡蛋菜","牛肉"],["粽子","面条","土豆","快手鸡蛋菜","牛肉"]]      ]
        }
    },
    components:{
        "caipunav":caipuNav,
        myheader
    }
}
</script>
<style scoped>
 .content{
        width:1000px;
        margin:80px auto 0;
    }
    h2{
        color:#256dc6;
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-content: start;
        flex-wrap:wrap;
        padding: 0;
    }
    a{
        text-decoration: none;
        color:#256dc6;
        display: block;
        width:140px;
        height:30px;
    }
</style>