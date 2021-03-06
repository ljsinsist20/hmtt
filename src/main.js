import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import directiveObj from '@/utils/directives'
import { NavBar, Form, Field, Button, Tabbar, TabbarItem, Icon, Tab, Tabs, Cell, CellGroup, List, PullRefresh, ActionSheet, Popup, Badge, Row, Col, Search, Divider, Tag, Loading } from 'vant'
// import axios from 'axios'
// Vue.prototype.$axios = axios
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(Badge)
Vue.use(Row)
Vue.use(Col)
Vue.use(Search)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(Loading)

Vue.use(directiveObj)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
