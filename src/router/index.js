import Vue from 'vue';
import Router from 'vue-router';


// ---------------------
// 加载页面/组件
// ---------------------
import DevicePage from '@/pages/Device/index.vue';

Vue.use(Router);

export default new Router({
    // 路由配置文件
    routes: [{
        path: '/',
        name: 'DevicePage',
        component: DevicePage
    }]
})
