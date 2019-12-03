import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
