import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);

//引入用npm安装的axios模块
import axios from 'axios'//放在node_modules中都不用加./
//import是ES6中引入模块的语法，只能在Vue脚手架中使用
//等效于node中：
//const axios=require("axios")

Vue.config.productionTip = false

//让axios的请求携带验证信息到服务器
axios.defaults.withCredentials=true;
//将axios对象放入Vue的原型对象中
Vue.prototype.axios=axios;
//结果：所有的组件都是Vue.prototype的孩子
//所以：所有组件中都可用this.axios.get()发送ajax请求

//main.js是整个程序的入口
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
