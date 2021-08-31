// 此文件用於創建 Vuex 最為核心的 store

// 引入 vue
import Vue from 'vue'

// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 準備 actions 用於響應組件中的動作
const actions = {}

// 準備 mutations 用於操作資料(state)
const mutations = {}

// 準備 state 用於儲存資料
const state = {}

// 創建 store 並暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
