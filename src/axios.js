import Vue from "vue"
import axios from "axios"
//设置跨域请求保存session
axios.defaults.withCredentials=true
//设置请求服务器基础路径
axios.defaults.baseUrl="http://127.0.0.1:3000/"
//将axios注册Vue实例
Vue.prototype.axios=axios
