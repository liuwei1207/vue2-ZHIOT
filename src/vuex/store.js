import Vue from 'vue';
import Vuex from 'vuex';
import * as types from "./types.js";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sidebarIsOpenFlag: false
    },
    mutations: {
        changeSidebarOpenStatus(state) {
            state.sidebarIsOpenFlag = !state.sidebarIsOpenFlag;
        }
    }
})

export default store
