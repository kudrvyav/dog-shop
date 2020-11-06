const merge = require('webpack-merge');
const WebpackBaseConfig = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WebpackBuildConfig = merge(WebpackBaseConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(WebpackBuildConfig)
});