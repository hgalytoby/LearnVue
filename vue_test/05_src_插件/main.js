// 引入 vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入插件
import plugins from "./plugins";

// 關閉 vue 生產提示
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins, 111, 222, 333)
// 創建 vm
new Vue({
    el: '#app',
    render: h => h(App)
})