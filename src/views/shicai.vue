<template>
<div>
    <myheader></myheader>
    <div class="content">
        <div class="type-tab">
            <a  href="http://localhost:8080/#/caipu">精选</a>
            <a  href="http://localhost:8080/#/fenlei">分类</a>
            <a class="changeStyle" href="http://localhost:8080/#/shicai">食材</a>
            <a href="http://localhost:8080/#/caidan">菜单</a>
        </div>
        <!--最外层循环食材一级分类-->
        <div v-for="(item1,index1) of list1" :key="index1" class="type">
            <div>
                <h3>{{item1.cmname}}</h3>
            </div>
            <!--中间层循环食材二级分类-->

            <div v-for="(item2,index2) of list2[index1]" :key="index2">
                <h4>{{item2.cmname}}</h4>
                <ul>
                    <!--食材分类中的列表-->
                    <li v-for="(item3,index3) of list3[index1][index2]" :key="index3">
                        <a href="#">
                                <img :src="`http://127.0.0.1:3000/${item3.aidImg}`" alt="">
                                <h5>{{item3.aname}}</h5>   
                        </a>
                    </li>
                    <!--食材分类中的列表
                    <li v-for="n of 2" :key="n">
                        <a href="#">
                                <img src="../assets/zhu.jpg" alt="">
                                <h5>猪</h5>   
                        </a>
                    </li>-->
                </ul>
                <a :href="`http://localhost:8080/#/shicai3?cmid2=${item2.cmid2}`" target="_blank">更多</a>
            </div>
        </div>
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
export default {
    data(){
        return{
            //list1:["肉类","水果、花茶、坚果(全部)","蔬菜、菌藻、药食(全部)","鱼虾蟹贝等水产(全部)","谷类(全部)","豆乳蛋类及制品(全部)","调味品(全部)"],//食材一级分类列表
            list1:[],
            list2:[],//食材二级分类列表
            list3:[]
        }
    },
    created() {
        this.loadlist1();
        //this.loadlist2();
    },
    methods: {
        //页面加载时触发事件
       loadlist1(){
           //发送ajax请求获取list1列表
            var n=0;//循环参数，后边n++，从1开始传入数据调ajax；
            var arr=[];
            var a=0;//用于最后加一个判断条件，获取list3
            //console.log(1)
            var url="http://127.0.0.1:3000/caipu/shicai1";
            this.axios.get(url).then(result1=>{
               //console.log(result.data);
                this.list1=result1.data;
                //console.log(this.list1)
                //console.log(2)
                for(let i=1;i<=result1.data.length;i++){
                    //console.log(3)
                    var url=`http://127.0.0.1:3000/caipu/shicai2?cmid=${i}`;
                    this.axios.get(url).then(result2=>{
                        this.list2=this.list2.concat([result2.data]);
                        //for循环是按list2的列表数循环，如花果茶项循环三次，查找每次对应数据
                        var len=result2.data.length;
                        for(let j=1;j<=len;j++){
                            n++;
                            console.log(n)
                            var url=`http://127.0.0.1:3000/caipu/shicai?cmid2=${n}`   //个别次数传入参数顺序有变化，如10,9，异步请求，最后一次30个请求一起发送，返回数据有快慢，部分顺序错误
                            //console.log(n)
                            this.axios.get(url).then(result3=>{
                                //result3.data是list2每个对象的内容，因为ajax请求是异步函数
                                //this.list3=this.list3.concat([result2.data]);
                                a++;
                                //console.log(a)
                                arr=arr.concat([result3.data])
                                //外部定义一个a在最后一个ajax中才能打印1-30，在最后一个ajax中加一个判断条件
                                if(a==result2.data.length){
                                    a=0;
                                    this.list3=this.list3.concat([arr]);
                                    arr=[];
                                    //console.log(a)
                                    //console.log(this.list3);
                                }
                            })
                        }
                    });
                }
           });
        } 
    },
    components:{
        "caipuNav":caipuNav,
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
        }
        /* 类别，猪，羊...样式 */
        .type>div>h4{
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


