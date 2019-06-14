<template>
    <div class="type-tab">
        <a :class="!changeClass" href="http://localhost:8080/#/caipu">精选</a>
        <a :class="changeClass" href="http://localhost:8080/#/fenlei">分类</a>
        <a :class="!changeClass" href="http://localhost:8080/#/shicai">食材</a>
        <a :class="!changeClass" href="http://localhost:8080/#/caidan">菜单</a>
    </div>
</template>
<script>

export default {
    props:{
    navtext:{default:""}
   },
    data(){
        return{
            changeClass:{
                changeStyle:true
            }
        }
    },
    created(){  
    },
    methods: {
    },
}
</script>
<style scoped>
    .type-tab>a:hover{
        color:#FFB31A;
    }
    /* .type-tab样式 */
    .type-tab>a{
        display: inline-block;
        height:42px;
        line-height:42px;
        text-decoration: none;
        color:#383830;
        margin-right:30px;
        font-size: 14px;
    }
    .changeStyle{
        font-weight:bold;
        color:#383830;
        border-bottom:2px solid #383830;
    }
</style>


