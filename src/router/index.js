import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'
// import Layout from '@/views/Layout'
// import Home from '@/views/Home'
// import User from '@/views/User'
// import Search from '@/views/Search'
// import SearchResult from '@/views/Search/SearchResult'
// import ArticleDetail from '@/views/ArticleDetail'
// import Chat from '@/views/Chat'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        path: '/layout',
        component: () => import('@/views/Layout'),
        redirect: '/layout/home',
        children: [
            { path: 'home', component: () => import('@/views/Home') },
            { path: 'user', component: () => import('@/views/User') }
        ]
    },
    {
        path: '/search',
        component: () => import('@/views/Search')
    },
    {
        path: '/search/:kw',
        component: () => import('@/views/Search/SearchResult')
    },
    {
        path: '/article_detail',
        component: () => import('@/views/ArticleDetail')
    },
    {
      path: '/chat',
      component: () => import('@/views/Chat')
    }
]

const router = new VueRouter({
    routes
})
// 路由 - 全局前置守卫(在路由发生真正跳转之前, 执行此函数)
// 此函数可以决定路由是否跳转/取消/强制中断切换到别的路由
// router.beforeEach((to, from, next) => {
//   // 需求: 如果你已经登录了, 不要切换到登录页面
//   if (getToken()?.length > 0 && to.path === '/login') {
//     // 想要进登录页不留在原地了, 而是返回首页
//     next('/layout/home')
//   } else {
//     next() // 其他情况通通放行
//   }
// })

export default router
