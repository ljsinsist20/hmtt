import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import User from '@/views/User'
import Search from '@/views/Search'
import SearchResult from '@/views/Search/SearchResult'
import ArticleDetail from '@/views/ArticleDetail'
import Chat from '@/views/Chat'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User }
        ]
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/search/:kw',
        component: SearchResult
    },
    {
        path: '/article_detail',
        component: ArticleDetail
    },
    {
      path: '/chat',
      component: Chat
    }
]

const router = new VueRouter({
    routes
})

export default router
