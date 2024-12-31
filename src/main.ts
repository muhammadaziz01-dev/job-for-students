import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// Router import
import router from './router'

// Toastify import 
import 'vue3-toastify/dist/index.css';

// AOS animation import 
import 'aos/dist/aos.css'; 
import AOS from 'aos';    

//  Antd import 
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

AOS.init();


const app = createApp(App)
app.use(Antd);
app.use(createPinia())
app.use(router)

app.mount('#app')
