import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import Reg from './views/Reg'
import product from './views/product'
import productDetails from './views/product_details'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},   
    {path: '/login',component: Login},   
    {path: '/reg',component: Reg},   
    {path:'/product',component:product},  
    {path:'/details',component:productDetails},
       
  ]
})
