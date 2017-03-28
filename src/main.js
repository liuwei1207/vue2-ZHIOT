// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'; // vue-router - for SPA router
import store from './vuex/store'; // vue-store - for SPA Data manager
import iView from 'iview'; // iView - vue2 ui
import 'iview/dist/styles/iview.css'; // 使用 CSS 可以定制样式主题 ， 详情参考官网
import './assets/styles/common.css'; // common.css
import './assets/libs/animate/animate.min.css'; // animate
import axios from 'axios'; // axios - for ajax connect
import VueAxios from 'vue-axios'; // axios - for ajax connect
// import VueWebsocket from "vue-websocket"; // vue-websocket - for websocket connect

Vue.use(iView);
Vue.use(VueAxios, axios); // axios - for ajax connect
// Vue.use(VueWebsocket);


Vue.config.productionTip = false // show code tip

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
