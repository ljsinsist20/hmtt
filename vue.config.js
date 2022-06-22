const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://ttapi.research.itcast.cn', // 后端接口地址
        //         changeOrigin: true, // 是否允许跨越
        //         // ws: true,
        //         pathRewrite: {
        //             '^/api': '/' // 重写,
        //         }
        //     }
        // }
    }
})