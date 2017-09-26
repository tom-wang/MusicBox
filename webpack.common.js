const path = require('path');

const config = {
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
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
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
};

module.exports = config;
