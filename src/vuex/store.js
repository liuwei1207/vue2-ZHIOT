import Vue from 'vue';
import Vuex from 'vuex';
import * as types from "./types.js";
Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const state = {
    // 存放状态与数据

    // 全局加载状态
    loading: false,

    // 页面设置参数
    pageOptions: {
        theme: 'dark', // 当前主题
        spanLeft: 4, // 左侧导航区宽度（单位栅格）
        spanRight: 20 // 内容区宽度（单位栅格）
    }
};

export const mutations = {
    // mutations
    [types.THEME_CHANGE](state) {

    }
};

export const actions = {
    // actions
    [types.TEST_ACTION](state) {

    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
