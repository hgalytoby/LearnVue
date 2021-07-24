import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import AllA from './module/moduleA' // 導入所有
import { A1, A2 as MyA2 } from './module/moduleB' // 導入想要的
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

console.log(AllA)
console.log(A1, MyA2)
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
// createApp(App).use(router).mount('#app')
