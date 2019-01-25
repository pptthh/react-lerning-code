const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const path = require('path');

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
              test: /\.(ts|tsx)?$/,
              loader: 'ts-loader',
              exclude: /node_modules/
            },{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
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
        historyApiFallback: true,
        index: 'index.html',
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'coverage']),
        new HtmlWebpackPlugin({
            favicon: 'public/movie.ico',
            title :'React-Typescript Training App - Movie Search',
            inject: true,
        }),
        new HtmlWebpackRootPlugin(),
    ],
}

module.exports = config;