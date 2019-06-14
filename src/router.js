import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import Reg from './views/Reg'
import product from './views/product'
import productDetails from './views/product_details'
import biji from './components/biji'
import dg_details from './components/dg_details'
import dg_person from './components/dg_person'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},   
    {path: '/login',component: Login},   
    {path: '/reg',component: Reg},   
    {path:'/product',component:product},  
    {path:'/details',component:productDetails},
	  {path:"/biji",component:biji},
    {path:'/dg_details',component:dg_details},
    {path:"/dg_person",component:dg_person}
       
  ]
})
