import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from './router'
import './style.css'
import App from './App.vue'
import Header from './components/Header.vue';

const app = createApp(App)

app.component('Header', Header);
app.use(router)
app.mount('#app')
