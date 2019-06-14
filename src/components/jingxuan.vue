<template>
    <div>
        <div>
            <h3>精选推荐菜谱</h3>
        </div>
        <div>
            <ul class="content">
                <li v-for="(item,index) of list" :key="index">
                    <a href="#"> <img :src="`http://127.0.0.1:3000/${item.imgUrl}`" alt=""></a>
                    <a>{{item.title}}</a><br>
                    <div class="author">
                        <div>
                            <a><img class="avatarSize" :src="`http://127.0.0.1:3000/${item.avatar}`" alt="">  
                                {{item.uname}}
                            </a>
                        </div>
                        <div> 
                            <img class="avatarSize"  src="../assets/eye.png" alt=""><span>665</span>
                            <img class="avatarSize"  src="../assets/collect.png" alt=""><span>665</span>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>
        <pages></pages>
    </div>
    
</template>
<script>
import pages from "./pages"
export default {
    data(){
        return{
            pno:"1",//查询的页数
            count:"12",//每页的数量
            list:[],//查询返回的数组 
        }
    },
    created() {
        this.loadlist();
    },
    methods: {
        loadlist(){
            //发送ajax查找查找菜谱列表，记列表对应的用户信息
            var url=`http://127.0.0.1:3000/caipu/list?pno=${this.pno}&count=${this.count}`;
            var obj={pno:this.pno,count:this.count}
            this.axios.get(url).then(result=>{
                this.list=result.data;
                console.log(result.data);
            });
        }
    },
    components:{
        "pages":pages
    }
}
</script>
<style scoped>
    /* 所有的a标签样式 */
        a{
            text-decoration:none;
            color:#72716c;
        }
        a:hover{
            color:#FFB31A;
        }
        /* ul样式 */
        .content{
            list-style:none;
            display: flex;
            justify-content:start;
            flex-wrap: wrap;
            padding: 0;
        }
        .content>li{
            width:300px;
            margin-bottom: 20px;
            margin-right:32px;
        }
        img{width:300px;
            border-radius:10px}
        .avatarSize{
            width:20px;
            border-radius: 50%;
            }
        .author{
            display: flex;
            justify-content: space-between;
            font-size:10px;
        }
</style>