import { createStore } from "vuex";
import { auth, usersCollection } from "@/includes/firebase";

export default createStore({
	state: {
		authModalShow: false,
		userLoggedIn: false,
	},
	mutations: {
		//mutations are a way to change state inside of a vuex store. they are synchronous functions.
		toggleAuthModal: (state) => {
			state.authModalShow = !state.authModalShow;
		},
		toggleAuth(state) {
			state.userLoggedIn = !state.userLoggedIn;
		},
	},
	getters: {
		//getters are how to show a state value
		// authModalShow: (state) => state.authModalShow,
	},
	actions: {
		//remember that actions tend to be async
		async register({ commit }, payload) {
			const userCred = await auth.createUserWithEmailAndPassword(
				payload.email,
				payload.password
			);

			//password is already stored in auth above so we don't need to add it to collection
			//email is also stored in auth, but we add it here for ease of sorting
			//.doc(userCred.user.uid) assigns the user's id to this collection
			//replaced add with set. set creates or modifies data
			await usersCollection.doc(userCred.user.uid).set({
				name: payload.name,
				email: payload.email,
				age: payload.age,
				country: payload.country,
			});

			//we can add a display name and profile picture by using below
			await userCred.user.updateProfile({
				displayName: payload.name,
			});

			//commit comes from destructuring context, the first param
			commit("toggleAuth");
		},
		async login({ commit }, payload) {
			await auth.signInWithEmailAndPassword(payload.email, payload.password);

			commit("toggleAuth");
		},
		init_login({ commit }) {
			const user = auth.currentUser;

			if (user) {
				commit("toggleAuth");
			}
		},
	},
});

// if you want a change to affect the component or its children, use mutations
// if you want a change to affect the store/state, use actions
// apparently, always use actions to commit mutations
