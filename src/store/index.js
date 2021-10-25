import Vue from "vue";
import Vuex from "vuex";

import { event } from "@/store/event.js";

Vue.use(Vuex);


export default new Vuex.Store({
	modules: {
		event
	},
	// stateは参照専用、直接変更はNG
	state: {
		isOpenSideBar: true,
		createEventDialog: false
	},
	// mutationsはstateを変更のみを行う
	mutations: {
		updateIsOpenSideBar(state, value) {
			state.isOpenSideBar = value;
		},
		updateCreateEventDialog(state, value) {
			state.createEventDialog = value;
		}
	},
	//
	actions: {
		switchSideBar({ commit }, payload) {
			// commit("mutations名", 引数)でmutations名を実行できる
			commit("updateIsOpenSideBar", payload);
		},
		switchCreateEventDialog({ commit }, payload) {
			commit("updateCreateEventDialog", payload);
		}
	}
});
