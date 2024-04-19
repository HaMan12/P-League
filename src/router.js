// router.js

import { createRouter, createWebHistory } from 'vue-router'
import Record from './components/router/Record.vue'
import Home from './components/router/Home.vue'
import schedule from './components/router/Schedule.vue'

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
        path: '/home',
        name: ' Home',
        component: Home
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
