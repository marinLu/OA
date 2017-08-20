import Vue from 'vue'
import Vuex from 'vuex'
import mockData from '../mockData/oaData';
Vue.use(Vuex)
	//状态对象
const state = {
	app: mockData.app,
	home: mockData.home,
	chat: mockData.chat,
	projects: mockData.projects,
}

export default new Vuex.Store({
	state,

})