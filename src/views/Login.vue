<template>
  <div>
    <lheader></lheader>
    <div class="lmain">

    </div>
  </div>
</template>

<script>
import lheader from '../components/header'
export default {
  data(){
    return {}
  },
  components:{lheader}
}
</script>

<style scoped>
  body{
   font-size:14px;
   background: #f8f8f7;
  }
  ul,li,p{
    margin:0;
    padding:0;
    list-style: none;
  }
  a{text-decoration: none;}
  .clearfix{ clear: both;}
  .clearfix:after{
  content: "";
  display: block;
  clear: both;
  }
</style>

