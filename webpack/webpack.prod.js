const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    mode: 'production',
    output: {
        filename: '[hash].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\\/]node_modules[\\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        minimizer: [
            // fix me: with this it does not bulds :( temporary removed
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true,
            // })
        ]
    },
});