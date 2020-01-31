// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    preset: 'react-native',
    transform: {
        ...tsjPreset.transform,
        '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    transformIgnorePatterns: ['node_modules/(?!(react-native|my-project|react-native-button)/)'],
    testPathIgnorePatterns: ['e2e', 'node_modules'],
    setupFilesAfterEnv: ['./__mocks__/mockFirebase.ts'],
};
