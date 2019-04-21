const path = require('path');
const package = require('./package.json');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, package.main),
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: dist
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: dist
    }
};
