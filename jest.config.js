module.exports = {
	verbose: true,
	preset: '@vue/cli-plugin-unit-jest',
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'^.+\\.vue$': '@vue/vue2-jest',
		'^.+\\.js$': 'babel-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	collectCoverage: true,
	coverageReporters: ['html', 'text-summary'],
	testMatch: ['**/src/components/**/*.spec.[jt]s?(x)'],
};
