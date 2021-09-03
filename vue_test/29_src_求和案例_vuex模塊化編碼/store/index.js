// 此文件用於創建 Vuex 最為核心的 store

// 引入 vue
import Vue from 'vue'

// 引入 Vuex
import Vuex from 'vuex'

// 引入求和功能相關設定
import countOptions from './count'
import personOptions from './person'

// 引入人員管理相關設定

Vue.use(Vuex)


// 創建 store 並暴露 store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
