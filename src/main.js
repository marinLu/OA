// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import store from './store/'

import App from './App'

const app = new Vue({
	store,
	router
}).$mount('#app')