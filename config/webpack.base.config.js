const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.sass$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                }, {
                    loader: 'postcss-loader',
                    options: {sourceMap: true, config: {path: `${PATHS.src}/config/postcss.config.js`}}
                }, {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                }
            ]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.(gif|png|jpe?g|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/pug/index.pug`,
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/pug/uikit.pug`,
            filename: './uikit.html'
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`},
            {from: `${PATHS.src}/images`, to: `${PATHS.assets}images`},
            {from: `${PATHS.src}/static`, to: ''}
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
};