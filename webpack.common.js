const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        main: './src/main.js',
        vendor: ['vue'],
    },
    resolve: {
        alias: {
            //'vue$': 'vue/dist/vue.esm.js'
        }
    },
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders')
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'}
                ]
            },
            {
                test: /\.mp3$/,
                use: [
                    {loader: 'file-loader'}
                ]
            },
        ]
    },
    plugins: [
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
    ]
};

module.exports = config;
