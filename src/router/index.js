import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';


// ---------------------
// 设备管理
// ---------------------
import DevicesPage from '@/pages/Device/devices.vue';
import GroupsListPage from '@/pages/Device/groups-list.vue';
import DevicesListPage from '@/pages/Device/devices-list.vue';
import PolicysListPage from '@/pages/Device/policys-list.vue';

// ---------------------
// 平台管理
// ---------------------
import PlatformPage from '@/pages/Platform/index.vue';

// ---------------------
// 用户管理
// ---------------------
import UserPage from '@/pages/User/index.vue';

Vue.use(Router);
Vue.use(iView);



const router = new Router({
    // 路由配置文件
    routes: [{
        path: '/',
        redirect: '/devices/groups-list'

    }, {
        path: '/devices',
        name: '设备管理',
        component: DevicesPage,
        children: [
            // 这里的组件会被渲染在 DevicesPage 的 <router-view> 中
            { path: 'groups-list', name: '群组列表', component: GroupsListPage },
            { path: 'devices-list', name: '设备列表', component: DevicesListPage },
            { path: 'policys-list', name: '设备列表', component: PolicysListPage }
        ]
    }, {
        path: '/platforms',
        name: 'platformPage',
        component: PlatformPage
    }, {
        path: '/users',
        name: 'UserPage',
        component: UserPage
    }]
})

router.beforeEach((to, from, next) => {

    iView.LoadingBar.start();

    if (!true) {
        next({
            path: '/login', //  跳转到login页面
        })
    } else {
        next() // 进行下一个钩子函数
    }

})

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
});

export default router
