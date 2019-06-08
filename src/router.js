import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import Reg from './views/Reg'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},   
    {path: '/login',component: Login},   
    {path: '/reg',component: Reg},   
       
  ]
})
