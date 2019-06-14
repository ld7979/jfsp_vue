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
import caipu from './views/caipu'
import jingxuan from './components/jingxuan'
import shicai from './views/shicai'
import shicai3 from './components/shicai3'
import caidan from './views/caidan'
import caipuNav from './components/caipuNav.vue'
import fenlei from './views/fenlei.vue'
import caipudetails from './views/caipudetails.vue'


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
    {path:"/dg_person",component:dg_person},
    {path: '/caipudetails',name: 'caipudetails',component: caipudetails}, 
    {path: '/fenlei',name: 'fenlei',component: fenlei}, 
    {path: '/caipuNav',name: 'caipuNav',component: caipuNav}, 
    {path: '/caidan',name: 'caidan',component: caidan},  
    {path: '/shicai',name: 'shicai',component: shicai}, 
    {path: '/shicai3',name: 'shicai3',component: shicai3},  
    {path: '/jingxuan',name: 'jingxuan',component: jingxuan},  
    {path: '/caipu',name: 'caipu',component: caipu},   

       
  ]
})
