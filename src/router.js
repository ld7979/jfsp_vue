import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},   
    {path: '/login',component: Login},   
       
  ]
})
