module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
    env: {
        jest: true,
        jasmine: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/extensions': ['.ts', '.tsx'],
        'import/core-modules': ['react', 'react-native'],
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        optionalChaining: true,
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: [['builtin', 'external'], ['internal', 'sibling', 'parent', 'index'], 'unknown'],
            },
        ],
    },
};
