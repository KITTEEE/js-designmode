const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node-modules)/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new htmlwebpackplugin({
            template: './index.html',
        }),
    ],
    devServer: {
        contentBase: path.join('__dirname', './release'), // 根目录
        open: true, // 自动打开浏览器
        port: 9000,
    },
};
