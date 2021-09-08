// 引入的不再是 Vue 構造函數了，引入的是一個名為 createApp 的工廠函數
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
