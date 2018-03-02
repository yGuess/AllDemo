const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: {
        common: ['react','react-dom','react-router'],
        main: './scripts/app.js'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: 'dist/',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]-[local]-[hash:base64:5]'
                        }
                    },
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(jpg|png)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true,
        port: 8888
    },
    performance: {
        hints: false
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new HtmlWebpackPlugin({
            title: 'wy严选',
            template: 'index.html',
            filename: 'index.html',
            inject: "body" // true,head,body 指定插入的js文件位置,true与body表示在body内底部
        })
    ]
}

module.exports = config;