// 引入的不再是 Vue 構造函數了，引入的是一個名為 createApp 的工廠函數
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 創建應用實例對象 => app(類似於之前 Vue2 中的 vm，但 app 比 vm 更 "輕")
const app = createApp(App)
console.log(app)
// 掛載
app.mount('#app')

// 卸載
// setTimeout(() => {
//     app.unmount('#app')
// }, 1500)

// Vue2
// const vm = new Vue({
//     render: h => h(App)
// })
// vm.$mount('#app')