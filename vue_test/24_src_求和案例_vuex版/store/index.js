// 此文件用於創建 Vuex 最為核心的 store

// 引入 vue
import Vue from 'vue'

// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 準備 actions 用於響應組件中的動作
const actions = {
    // jia(context, value) {
    //     console.log('actions jia 被調用了')
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     console.log('actions jian 被調用了')
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        console.log('actions jiaOdd 被調用了')
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        console.log('actions jiaWait 被調用了')
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },
}

// 準備 mutations 用於操作資料(state)
const mutations = {
    JIA(state, value) {
        console.log('mutations JIA 被調用了')
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations JIAN 被調用了')
        state.sum -= value
    }
}

// 準備 state 用於儲存資料
const state = {
    sum: 0
}

// 創建 store 並暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
