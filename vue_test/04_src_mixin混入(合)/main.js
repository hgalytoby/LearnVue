// 引入 vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
import {mixinTest1, mixinTest2} from "./mixin";
// 關閉 vue 生產提示
Vue.config.productionTip = false

// 全局混入。
Vue.mixin(mixinTest1)
Vue.mixin(mixinTest2)


// 創建 vm
new Vue({
    el: '#app',
    render: h => h(App)
})