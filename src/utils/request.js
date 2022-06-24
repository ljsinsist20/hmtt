import ajax from 'axios'
import store from '@/store'

const axios = ajax.create({
        // baseURL: 'http://123.57.109.30:8000' // 基地址
        baseURL: 'http://localhost:8000'
    })
    // 响应拦截
axios.interceptors.response.use(function(response) {
        return response
    }, async function(error) {
        if (error.response.status === 401) {
            store.commit('setToken', '')
            this.$router.push({
                path: '/login'
            })
        }
        return Promise.reject(error)
    })
    // 请求连接 TODO: 第一次登录(无token信息)无法通过
axios.interceptors.request.use(function(request) {
    if (store.state.token.length > 0 && request.headers.Authorization === undefined) {
        request.headers.Authorization = 'Bearer ' + store.state.token
    }
    return request
}, async function(error) {
    return Promise.reject(error)
})

export default ({ url, method = 'GET', params, data, headers }) => {
    return axios({
        url: url,
        method: method,
        params: params,
        data: data,
        headers: headers
    })

    // 以后换库, 只需要改这里, 逻辑页面不用动, 保证代码的复用性和独立性(高内聚低耦合)
    //   return $.ajax({
    //     url: url,
    //     type: method,
    //     data: data,
    //     header: headers
    //   })
}