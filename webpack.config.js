/**
 * [webpack description]
 * @file
 * @author Yangholmes
 */
const path = require('path');

const config = {
    entry: './src/imagePaste.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
    // module: {
        // rules: [{
        //     test: /\.js$/,
        //     exclude: /(node_modules|bower_components)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env']
        //         }
        //     }
        // }]
    // }
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         },
    //         sourceMap: true
    //     })
    // ]
};

module.exports = config;
