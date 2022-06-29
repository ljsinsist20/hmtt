module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: 0, // 缩进
        'eol-last': 0, // 最后可以有空格
        'vue/multi-word-component-names': 0,
        // semi: 0
        camelcase: 0, // 关闭驼峰
        'space-before-function-paren': 0
    }
}
