const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin(),
        new webpack.HashedModuleIdsPlugin(), //覆盖默认的自增数字用于模块ID
    ],
    output: {
        filename: '[name].bundle.[chunkhash:8].js',
        chunkFilename: '[name].chunk.[chunkhash:8].js',
        path: path.join(__dirname, './dist/')
    },
});
