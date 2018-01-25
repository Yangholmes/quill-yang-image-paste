/**
 * [webpack description]
 * @file
 * @author Yangholmes
 */
const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const config = {
    entry: './src/imagePaste.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {},
    plugins: []
};

module.exports = config;
