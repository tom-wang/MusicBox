const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(common, {
    entry: {
        entry_client: './src/entry_client.js',
        vendor: ['vue', 'vuex', 'vue-router'],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['./dist']),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['runtime'],
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        // 此插件在输出目录中
        // 生成 `vue-ssr-client-manifest.json`。
        new VueSSRClientPlugin()
    ],
    output: {
        filename: '[name].bundle.[hash:8].js',
        chunkFilename: '[name].chunk.[hash:8].js',
        path: path.join(__dirname, './dist/')
    },
});
