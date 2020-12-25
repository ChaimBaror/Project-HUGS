module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-console': 'off',
        'linebreak-style': 'off',
    },
};
