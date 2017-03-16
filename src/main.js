// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'; // 路由挂载
import router from './router'; // 路由列表
import store from './vuex/store';
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 iview CSS

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
