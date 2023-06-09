/* eslint-disable prettier/prettier */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        '@unocss',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',

    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
}
