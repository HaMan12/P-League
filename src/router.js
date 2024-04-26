// router.js

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 首頁
    {
      path: '/home',
      name: 'Home',
      component: () => import('./components/router/Home.vue')
    },
    //戰績
    {
      path: '/record',
      name: 'Record',
      component: () => import('./components/router/Record.vue')
    },
    // 賽程比分
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('./components/router/Schedule.vue')
    },
    // 數據
    {
      path: '/raking',
      name: 'raking',
      component: () => import('./components/router/Raking.vue')
    },
    // 商品
    {
      path: '/commodity',
      name: 'commodity',
      component: () => import('./components/router/Commodity.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./components/router/Search.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./components/router/Shop.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/router/Login.vue')
    },
  ]
})

export default router
