/**
 * [webpack description]
 * @file
 * @author Yangholmes
 */
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/imagePaste.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;
