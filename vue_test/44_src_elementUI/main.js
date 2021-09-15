// 引入 vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 引入 ElementUI 組件庫
// import ElementUI from 'element-ui';
// https://element.eleme.io/#/zh-CN/component/quickstart
import { Button, Row, DatePicker } from 'element-ui';
// 引入 ElementUI 全部樣式
import 'element-ui/lib/theme-chalk/index.css';
// 關閉 vue 生產提示
Vue.config.productionTip = false
// 使用 ElementUI
// Vue.use(ElementUI);
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)
// 創建 vm
new Vue({
    el: '#app',
    render: h => h(App),
})