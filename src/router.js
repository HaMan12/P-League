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
    // 數據(綜合排行)
    {
      path: '/raking',
      name: 'raking',
      component: () => import('./components/router/Raking.vue'),
    },
    // 數據(特殊表現)
    {
      path: '/performance',
      name: 'performance',
      component: () => import('./components/router/performance.vue'),
    },
    // 數據(球隊數據)
    {
      path: '/team',
      name: 'team',
      component: () => import('./components/router/Team.vue'),
    },
    // 數據(球隊chart)
    {
      path: '/chart',
      name: 'chart',
      component: () => import('./components/router/Chart.vue'),
    },
    // 商品
    {
      path: '/commodity',
      name: 'commodity',
      component: () => import('./components/router/Commodity.vue'),
    },
    // 商品細項
    {
      path: '/:productId',
      name: 'ProductDetail',
      component: () => import('./components/router/ProductDetail.vue'),
      props:true
    },
    // 搜尋
    {
      path: '/search',
      name: 'search',
      component: () => import('./components/router/Search.vue')
    },
    // 商城
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./components/router/Shop.vue')
    },
    // 登入
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/router/Login.vue')
    },
  ]
})

export default router
