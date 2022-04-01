import { createStore } from "vuex";

export default createStore({
	state: {
		authModalShow: false,
	},
	mutations: {
		//mutations are a way to change state inside of a vuex store
		toggleAuthModal: (state) => {
			state.authModalShow = !state.authModalShow;
		},
	},
	getters: {
		//getters are how to show a state value
		authModalShow: (state) => state.authModalShow,
	},
});
