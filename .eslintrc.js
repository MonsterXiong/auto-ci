module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
        es6: true,
        commonjs: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: ['prettier'],
    rules: {
        // 'no-unused-vars': 0,
        'no-console': 'off',
        'prettier/prettier': 'off',
        'new-cap': 'off',
        'class-methods-use-this': 'off',
    },
}
