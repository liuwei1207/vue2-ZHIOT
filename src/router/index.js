import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import DevicePage from '../pages/Device/index.vue';
import UserPage from '../pages/User/index.vue';
import PlatformPage from '../pages/Platform/index.vue';
import ThingList from '../pages/Device/list-device.vue';
import PolicyList from '../pages/Device/list-policy.vue';
import PrincipalList from '../pages/Device/list-principal.vue';
import UserList from '../pages/User/list.vue';
import PlatformList from '../pages/Platform/list-platform.vue';

import NotFoundPage from '../pages/NotFound/index.vue';

export default new Router({
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
            { path: 'list', component: ThingList }
        ]
    }, {
        path: '/principal',
        name: 'principal',
        component: DevicePage,
        children: [
            // 当 /principal/list 匹配成功，
            // UserHome 会被渲染在 DevicePage 的 <router-view> 中
            { path: 'list', component: PrincipalList }
        ]
    }, {
        path: '/policy',
        name: 'policy',
        component: DevicePage,
        children: [
            // 当 /thing/:idlist 匹配成功，
            // UserHome 会被渲染在 DevicePage 的 <router-view> 中
            { path: 'list', component: PolicyList }
        ]
    }, {
        path: '/platform',
        name: 'platform',
        component: PlatformPage,
        children: [
            // 当 /user/:id/list 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: 'list', component: PlatformList }
        ]
    }, {
        path: '/user',
        name: 'user',
        component: UserPage,
        children: [
            // 当 /user/:id/list 匹配成功，
            // UserHome 会被渲染在 User 的 <router-view> 中
            { path: 'list', component: UserList }
        ]
    }]
})
