import { Form as VeeForm, Field as VeeField, defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";
//vee-validate is a third party library for validating forms
//we also need to install the rules separately. you can do so in the vue ui
//https://vee-validate.logaretm.com/v4/

export default {
	//plugins are objects with a method called install. this is how we insert them into our app
	install(app) {
		app.component("VeeForm", VeeForm);
		app.component("VeeField", VeeField);

		defineRule("required", required);
	},
};
