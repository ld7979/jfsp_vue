<template>
    <!-- 分页栏 -->
    <div class="pages">
        <ul>
            <li>首页</li>
            <li>上一页</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>下一页</li>
            <li>末页</li>
        </ul>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
     /* 分页栏样式 */
        .pages{
            text-align: center;
            margin-top:30px;
            font-size:14px;
        }
        .pages>ul{
            list-style:none;
            display: flex;
            flex-direction:row;;
            justify-content: center;
            flex-wrap: wrap;
            padding: 0px;
        }
        .pages>ul>li{
            border:1px solid #72716c;
            border-radius: 5px;
            margin:0 7px;
            padding:2px 6px 3px;
        }
</style>


