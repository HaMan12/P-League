// router.js

import { createRouter, createWebHistory } from 'vue-router'
import About from './components/router/About.vue'
import Home from './components/router/Home.vue'

const routes = [
    {
        path: '/home',
        name: ' Home',
        component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
