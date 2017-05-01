const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
     entry: './src/app.js',
     output: {
         path: './',
         filename: 'scripts.js'
     },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['webpack-traceur?runtime', 'ng-annotate']}
        ]
    }
}