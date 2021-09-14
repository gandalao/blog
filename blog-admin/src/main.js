import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//全局样式
import "@/assets/css/reset.css"


const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
