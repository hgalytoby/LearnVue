// 此文件是整個項目的入口文件

// 引入 Vue
import Vue from 'vue'
// 引入所有 App 組件，所有組件的父組件
import App from './App.vue'

// 關閉 Vue 生產提示訊息
Vue.config.productionTip = false

/*
關於不同版本的 Vue:
  1.vue.js 與 vue.runtime.xx.js 的區別:
    (1).vue.js 是完整版的 Vue包含: 核心功能 + 模板解析器。
    (2).vue.runtime.xxx.js 是運行版的 Vue，只包含: 核心功能: 沒有模板解析器。
  2.因為 vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 設定項，，需要使用 render 函數接收到的 createElement 函數去指定具體內容。
*/

// 創建 Vue 實例對象 --- vm
new Vue({
    render: h => h(App),
}).$mount('#app')

// 以下方法也可以。
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
