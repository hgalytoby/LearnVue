import { createStore } from 'vuex'
import axios from 'axios'
import { HIDE_TABBAR_MUTATION } from '@/type/index'

export const store = createStore({
  state () {
    return {
      isTabbarShow: true,
      comingList: []
    }
  },
  getters: {
    comingListGetter (state) {
      return state.comingList.filter((item, index) => index < 3)
    }
  },
  mutations: {
    [HIDE_TABBAR_MUTATION] (state, data) {
      state.isTabbarShow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    getComingListAction (state) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=897266',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16258396044472065977483265"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {}
})
