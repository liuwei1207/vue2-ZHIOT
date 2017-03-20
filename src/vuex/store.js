import Vue from 'vue';
import Vuex from 'vuex';
import * as types from "./types.js";
Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const state = {
    // 主题皮肤设置
    theme: 'dark'
};

export const mutations = {
    [types.THEME_CHANGE](state) {
        if (state.theme === 'dark') {
            state.theme = 'light';
        } else {
            state.theme = 'dark';
        }
    }
};

const store = new Vuex.Store({
    state,
    mutations
})

export default store
