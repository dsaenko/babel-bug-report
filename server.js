const path = require('node:path');
const express = require('express');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const compiler = webpack({
    context: process.cwd(),
    devtool: false,
    entry: path.resolve(process.cwd(), './src/bootstrap.tsx'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|tsx?)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            configFile: path.resolve(process.cwd(), './babel.config')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                './index.html'
            )
        }),
    ],
    name: 'client',
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: process.env.PUBLIC_PATH || '/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    target: ['es5', 'web']
});

const app = express();

app.use(
    require('webpack-dev-middleware')(compiler, {
        publicPath: '/',
        stats: {
            colors: true,
            chunkModules: false,
            chunks: false,
            hash: false,
            version: false
        },
        writeToDisk: false
    })
);

app.listen(
    3100,
    console.log(`Listening at http://localhost:3100`)
);
