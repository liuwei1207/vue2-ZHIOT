import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DevicePage from '../pages/Device/index.vue';
import DeviceListPage from '../pages/Device/list-device.vue';

import UserPage from '../pages/User/index.vue';
import UserListPage from '../pages/User/list-user.vue';

import PlatformPage from '../pages/Platform/index.vue';
import PlatformListPage from '../pages/Platform/list-platform.vue';

import PolicyPage from '../pages/Policy/index.vue';
import PolicyListPage from '../pages/Device/list-policy.vue';

import PrincipalPage from '../pages/Policy/index.vue';
import PrincipalListPage from '../pages/Device/list-principal.vue';

import SettingPage from '../pages/Setting/index.vue';
import SettingThemePage from '../pages/Setting/theme-setting.vue';

import NotFoundPage from '../pages/NotFound/index.vue';

const router = new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: DevicePage
    }, {
        path: '/thing',
        name: 'thing',
        component: DevicePage,
        children: [
            // 当 /thing/list 匹配成功，
            // UserHome 会被渲染在 DevicePage 的 <router-view> 中
            { path: 'list', component: DeviceListPage }
        ]
    }, {
        path: '/principal',
        name: 'principal',
        component: PrincipalPage,
        children: [
            // 当 /principal/list 匹配成功，
            // UserHome 会被渲染在 DevicePage 的 <router-view> 中
            { path: 'list', component: PrincipalListPage }
        ]
    }, {
        path: '/policy',
        name: 'policy',
        component: PolicyPage,
        children: [
            // 当 /thing/:idlist 匹配成功，
            // UserHome 会被渲染在 DevicePage 的 <router-view> 中
            { path: 'list', component: PolicyListPage }
        ]
    }, {
        path: '/platform',
        name: 'platform',
        component: PlatformPage,
        children: [
            // 当 /user/:id/list 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: 'list', component: PlatformListPage }
        ]
    }, {
        path: '/user',
        name: 'user',
        component: UserPage,
        children: [
            // 当 /user/:id/list 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: 'list', component: UserListPage }
        ]
    }, {
        path: '/setting',
        name: 'setting',
        component: SettingPage,
        children: [
            // 当 /user/:id/list 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: 'theme', component: SettingThemePage }
        ]
    }, {
        path: '/logout',
        name: 'logout',
        beforeEnter(to, from, next) {
            next({
                path: '/login', //  跳转到login页面
            })
        }
    }]
})

router.beforeEach((to, from, next) => {

    if (!true) {
        next({
            path: '/login', //  跳转到login页面
        })
    } else {
        next() // 进行下一个钩子函数
    }

})

export default router
