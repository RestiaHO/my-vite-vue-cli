import { createStore } from 'vuex'


const account_key = 'account'
// 创建一个新的 store 实例
const store = createStore({
    state () {
        return {
            user: null
        }
    },
    mutations: {
        increment (state, info) {
            console.log('info', info)
            // sessionStorage.setItem('current', JSON.stringify(info))
            state.user = info
        }
    }
})
export default store
