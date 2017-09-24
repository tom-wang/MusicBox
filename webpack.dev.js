const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].bundle.[hash:8].js',
        chunkFilename: '[name].chunk.[hash:8].js',
        path: path.join(__dirname, './dist/')
    },
});
