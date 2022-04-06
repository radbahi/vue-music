module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		quotes: ["off"],
		indent: ["off"],
		"spaced-comment": ["off"],
		"max-len": ["off"],
		"vuejs-accessibility/label-has-for": ["off"],
		"vuejs-accessibility/click-events-have-key-events": ["off"],
		"implicit-arrow-linebreak": ["off"],
		"operator-linebreak": ["off"],
		"no-tabs": ["off"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				jest: true,
			},
		},
	],
};
