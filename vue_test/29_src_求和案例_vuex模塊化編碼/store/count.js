export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations JIA 被調用了')
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations JIAN 被調用了')
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: 'dudulu',
        subject: 'Vue',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}