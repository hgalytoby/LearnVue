import axios from "axios";
import {nanoid} from "nanoid";

export default {
    namespaced: true,
    actions: {
        addLee(context, value) {
            if (value.name.indexOf('李') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('增加的人必須姓李!')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=hitokoto').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                },
            )
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations ADD_PERSON 被調用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: 'dudulu'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0]
        }
    },
}
