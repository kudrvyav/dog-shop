const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBaseConfig = require('./webpack.base.config');

const WebpackDevConfig = merge(WebpackBaseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: WebpackBaseConfig.externals.paths.dist,
        port: 8083,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(WebpackDevConfig)
});