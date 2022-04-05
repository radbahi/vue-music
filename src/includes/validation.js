import {
	Form as VeeForm,
	Field as VeeField,
	defineRule,
	ErrorMessage,
} from "vee-validate";
import {
	required,
	min,
	max,
	alpha_spaces as alphaSpaces,
	email,
	min_value as minVal,
	max_value as maxVal,
	confirmed,
	not_one_of as excluded,
} from "@vee-validate/rules";
//vee-validate is a third party library for validating forms
//we also need to install the rules separately. you can do so in the vue ui
//https://vee-validate.logaretm.com/v4/

export default {
	//plugins are objects with a method called install. this is how we insert them into our app
	install(app) {
		app.component("VeeForm", VeeForm);
		app.component("VeeField", VeeField);
		app.component("ErrorMessage", ErrorMessage);

		defineRule("required", required);
		defineRule("min", min);
		defineRule("max", max);
		defineRule("min_value", minVal);
		defineRule("max_value", maxVal);
		defineRule("alpha_spaces", alphaSpaces);
		defineRule("email", email);
		defineRule("confirmed", confirmed);
		defineRule("excluded", excluded);
	},
};
