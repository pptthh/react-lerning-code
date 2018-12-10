const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const path = require('path');

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              use: 'babel-loader',
              exclude: /node_modules/
            },
            {
              test: /\.(ts|tsx)?$/,
              loader: 'ts-loader',
              exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts'
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'coverage']),
        new HtmlWebpackPlugin({
            favicon: 'public/movie.ico',
            title :'React-Typescript Training App - Movie Search',
            // template: require('html-webpack-template'),
            inject: false,
            appMountId: 'app',
        }),
        new HtmlWebpackRootPlugin(),
    ],
}

module.exports = config;