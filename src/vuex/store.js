import Vue from 'vue';
import Vuex from 'vuex';
import * as types from "./types.js";
Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const state = {
    // 存放状态与数据

    // 页面设置参数
    pageOptions: {
        theme: 'dark'
    }
};

export const mutations = {
    // mutations
    [types.THEME_CHANGE](state) {

    }
};

export const actions = {
    // mutations
    [types.TEST_ACTION](state) {

    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
