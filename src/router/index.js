import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/pages/Main'
import ShoppingMall from '@/components/pages/ShoppingMall'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Member from '@/components/pages/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // name: 'Main',
      component: Main,
      children: [
        {path:'/',name:'ShoppingMall',component:ShoppingMall},
        {path:'/CategoryList',name:'CategoryList',component:CategoryList},
        {path:'/Cart',name:'Cart',component:Cart},
        {path:'/Member',name:'Member',component:Member},
      ]
    }
  ]
})
