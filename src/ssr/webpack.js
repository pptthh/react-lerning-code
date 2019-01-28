var path = require('path')
var webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/ssr/client.tsx',
    output: {
        path: path.resolve('public/generated/'),
        publicPath: '/',
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
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
}
