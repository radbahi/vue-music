import {
	Form as VeeForm,
	Field as VeeField,
	defineRule,
	ErrorMessage,
	configure,
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
		//we can add another rule to make a specific error message

		defineRule("tos", required);
		defineRule("min", min);
		defineRule("max", max);
		defineRule("min_value", minVal);
		defineRule("max_value", maxVal);
		defineRule("alpha_spaces", alphaSpaces);
		defineRule("email", email);
		defineRule("confirmed", confirmed);
		defineRule("excluded", excluded);
		//we can add another rule to make a specific error message
		defineRule("country_excluded", excluded);

		//this function is how we configure certain things with vee-validator
		configure({
			generateMessage: (context) => {
				const messages = {
					required: `The ${context.field} field is required.`,
					min: `The ${context.field} field is too short.`,
					max: `The ${context.field} field is too long.`,
					alpha_spaces: `The ${context.field} field may only contain alphabetic characters and spaces.`,
					email: `The ${context.field} field must be a valid email.`,
					min_value: `The ${context.field} field is too low.`,
					max_value: `The ${context.field} field is too high.`,
					excluded: `You are not allowed to use this value for the ${context.field} field.`,
					country_excluded:
						"Due to restrictions, we do not accept users from this location.",
					confirmed: "The passwords don't match.",
					tos: "You must accept the terms of service.",
				};
				const message = messages[context.rule.name]
					? messages[context.rule.name]
					: `The ${context.field} field is invalid.`;
				return message;
			},
			validateOnBlur: true, //true by default
			validateOnChange: true, //true by default
			validateOnInput: false, //false by default
			validateOnModelUpdate: true, //true by default
		});
	},
};
