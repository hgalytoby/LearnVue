// 引入 vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'

// 關閉 vue 生產提示
Vue.config.productionTip = false

// 創建 vm
new Vue({
    el: '#app',
    render: h => h(App)
})