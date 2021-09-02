// 引入 vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入套件
import VueResource from 'vue-resource'
// 引入 store
import store from './store'

// 關閉 vue 生產提示
Vue.config.productionTip = false
// 使用套件
Vue.use(VueResource)

// 創建 vm
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})