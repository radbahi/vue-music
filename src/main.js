import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import "./assets/tailwind.css";
import "./assets/main.css";

let app;

//we load firebase before the app below to check auth stuff/keep the user logged in
//firebase handles saving token to localstorage
auth.onAuthStateChanged(() => {
	if (!app) {
		app = createApp(App);

		app.use(store);
		app.use(router);
		//register veevalidate globally because we will be using it in multiple areas
		app.use(VeeValidatePlugin);

		app.mount("#app");
	}
});
