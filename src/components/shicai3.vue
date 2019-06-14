<template>
<div class="type">
    <caipunav></caipunav>
    <div>
        <div>
        <h4>{{titleList3[0].cmname}}</h4>
    </div>
    <ul>
        <!--食材分类中的列表-->
        <li v-for="(item,i) of list3" :key="i">
            <a href="#">
                <img :src="`http://127.0.0.1:3000/${item.aidImg}`" alt="">
                <h5>{{item.aname}}</h5>   
            </a>
        </li>
    </ul>
    </div> 
    
    
</div>      
    
</template>
<script>
import caipuNav from "../components/caipuNav"
export default {
    data(){
        return{
            list3:[],//食材二级分类列表
            titleList3:[],
            cmid2:"1"
        }
    },
    created() {
            this.loadlist3()
        
        
    },
    methods: {
        loadlist3(){
             var url=window.location.href;
            var arr=url.split("=");
            this.cmid2=arr[1];
            //console.log(this.cmid2);

            var url1=`http://127.0.0.1:3000/caipu/shicai22?cmid2=${this.cmid2}`;
            this.axios.get(url1).then(result=>{
                this.titleList3=result.data;
                console.log(result.data);
            });

            //详情
            var url2=`http://127.0.0.1:3000/caipu/shicai?cmid2=${this.cmid2}`;
            this.axios.get(url2).then(result=>{
                //console.log(result.data)
                this.list3=result.data;
                //console.log(this.list3)
            });
            
            
        }    
    },
    components:{
        "caipunav":caipuNav
    }
}
</script>
<style scoped>
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
        a{
            text-decoration:none;
            color:#72716c;
        }
        a:hover{
            color:#FFB31A;
        }
        /* 每个类别水平分布 */
        .type>div{
            display: flex;
            align-items: flex-start;
            margin-top:40px;
        }
        /* 类别，猪，羊...样式 */
        .type>div>div>h4{
            width:152px;
            height:56px;
            margin:0px;
            text-align: center;
            line-height: 56px;
            background:#FFF0D2;
            border-radius:5px;
        }
        /* 查看更多  的样式 */
        .type>div>a:last-child{
            width:56px;
            height:56px;
            text-align: center;
            line-height: 56px;
            color:#256dc6;
            background-color: #e6f1ff;
            margin-left: 20px;
            border-radius:5px;
        }
        /* ul水平排列 */
        ul{
            list-style-type:none;
            display:flex;
            flex-wrap:wrap;
            margin:0;
            padding: 0;
            height: 107px;
        }
        ul>li{
            margin-left: 20px;;
        }
        /* 每个li里对应图片样式 */
        img{
            width:56px;
            height:56px;
            border-radius:5px;
        }
        /* li里h5样式 */
        h5{
            margin:0;
            text-align: center;
        }
        /* 当前位置栏 */
    .location{
        margin-top: 60px;
        
    }
</style>


