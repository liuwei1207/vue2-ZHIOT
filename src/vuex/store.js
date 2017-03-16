import Vue from 'vue';
import Vuex from 'vuex';
import * as types from "./types.js";
Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const state = {
    sidebarIsOpenFlag: true
};

export const mutations = {
    [types.SIDEBAR_OPEN_CHANGE](state) {
        state.sidebarIsOpenFlag = !state.sidebarIsOpenFlag;
    }
};

const store = new Vuex.Store({
    state,
    mutations
})

export default store
