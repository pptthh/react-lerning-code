const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'coverage']),
        new HtmlWebpackPlugin({
            title :'React-Typescript Training App - Movie Search',
        }),
    ],
});