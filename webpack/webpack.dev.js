const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash].js',
    },
});
