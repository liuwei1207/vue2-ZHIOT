import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';


// ---------------------
// 加载页面/组件
// ---------------------
import DevicePage from '@/pages/Device/index.vue';

import PlatformPage from '@/pages/Platform/index.vue';

Vue.use(Router);
Vue.use(iView);



const router = new Router({
    // 路由配置文件
    routes: [{
        path: '/',
        name: 'indexPage',
        component: DevicePage
    }, {
        path: '/devices',
        name: 'DevicePage',
        component: DevicePage
    }, {
        path: '/platforms',
        name: 'platformPage',
        component: PlatformPage,
        // children: [
        //     // 当 /user/:id/list 匹配成功，
        //     // UserHome 会被渲染在 User 的 <router-view> 中
        //     { path: 'list', component: PlatformListPage }
        // ]
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
