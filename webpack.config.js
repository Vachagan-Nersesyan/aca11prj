const path = require('path')
const webpack = require('webpack')
const HTMLWebpack = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'js-loader',
                exclude: '/mode_modules/'
            }
        ]
    },
    plugins: [
        new HTMLWebpack({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin()
    ],
    resolve: {
        extensions: ['js']
    }
}