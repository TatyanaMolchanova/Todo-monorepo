module.exports = {
	name: 'shared-util-logging',
	preset: '../../../../jest.config.js',
	transform: {
		'^.+\\.[tj]sx?$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
	coverageDirectory: '../../../../coverage/libs/shared/util/util-logging',
};
