import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import shop from '@/components/shop'
import shopList from '../components/shopList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      redirect:'/welcome'
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/shop',
      name: 'shop',
      redirect:'/shop/registerShop',
      // component: shop
    },
    {
      path: '/shop/registerShop',
      name: 'shop.registerShop',
      component: shop
    },
    {
      path: '/shop/modifyShop',
      name: 'shop.modifyShop',
      component: shop
    },
    {
      path: '/shopList',
      name: 'shopList',
      component: shopList
    }
  ]
})
