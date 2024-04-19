import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from './router'
import './style.css'

import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const app = createApp(App)

app.component('Header', Header);
app.component('Footer', Footer);
app.use(router)
app.mount('#app')
