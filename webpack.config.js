const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry:  [
        './index.js',
        './scss/index.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: ExtractTextPlugin.extract(
                    {
                        use: [{loader: "css-loader"},{loader:"sass-loader"}]
                    })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath:'../',
                            name:'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '../',
                        name: 'fonts/[name].[ext]',
                    }
                }]
            },
            {
                test: /\.ico$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }]
            }

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),

    },
    plugins: [
        new ExtractTextPlugin(
            {filename: './css/style.bundle.css'}
            ),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        }),
        new CopyWebpackPlugin([
            {
                from: './json_data',
                to: './json_data'
            },
            {
                from: './images',
                to: './images'
            },
            {
                from: './favicon',
                to: './'
            }

        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]
};