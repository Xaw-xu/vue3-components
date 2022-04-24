const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    mode:'production',
    entry: path.resolve(__dirname,'../packages/z-ui/index.ts'),
    output:{
        path:path.resolve(__dirname,'../lib'),
        filename:'index.js',
        libraryTarget:'umd', // 可以支持commonjs 和 amd 不支持es6，可以在浏览器中使用
        library:'z-ui',
    },
    externals:{
        vue:{// 忽略组件引用的vue变量
            root:'Vue',
            commonjs:'vue',
            commonjs2:'vue'
        }
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.vue'],
    },
    module:{
        rules:[
            {
                test:/\.(js|ts)x?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ]
}