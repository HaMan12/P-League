import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import router from './router'
import mitt from './mitt/mitt.js'
import './style.css'

import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const app = createApp(App)

app.component('Header', Header);
app.component('Footer', Footer);
app.use(router)
app.use(createPinia())
app.config.globalProperties.$emitter = mitt;
app.mount('#app')
