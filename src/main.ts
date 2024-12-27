import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'vue3-toastify/dist/index.css';import 'aos/dist/aos.css'; 
import AOS from 'aos';    

AOS.init();


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
