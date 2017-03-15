import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DevicePage from '../pages/Device/index.vue'
import NotFoundPage from '../pages/NotFound/index.vue'

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: DevicePage
    }, {
        path: '*',
        name: 'NotFound',
        component: NotFoundPage
    }]
})
