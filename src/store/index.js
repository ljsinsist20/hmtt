import Vue from 'vue'
import Vuex from 'vuex'
import { loginAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        refresh_token: ''
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setRefreshToken(state, refresh_token) {
            state.refresh_token = refresh_token
        }
    },
    actions: {
        async asyncLoginAction(store, val) {
            try {
                const res = await loginAPI(val)
                const { token, refresh_token } = res.data.data
                store.commit('setToken', token)
                store.commit('setRefreshToken', refresh_token)
                return Promise.resolve(res)
            } catch (error) {
                return Promise.reject(error)
            }
        }
    },
    modules: {}
})