const SentryPlugin = require('@sentry/webpack-plugin');
const path = require('path');
const git = require('git-rev-sync');
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const gitHash = git.long();

// const htmlPlugin = new HtmlWebPackPlugin({
//   inject: 'head',
//   template: "./src/index.html",
//   filename: "./index.html",
//   gitHash: gitHash
// });

console.log(process.env.GIT_SHA);

const StylableWebpackPlugin = require('@stylable/webpack-plugin');
var exportBuild = {
    entry: {
        "app": "./src/index.js"
    },

    module: {
        rules: [
            {
                // test: /\.(png|jpg|gif|ico)$/,
                test: /\.(jpe?g|png|gif|ico|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["node_modules"]
                        }
                    }
                ],
            },
            // {
            //     test: /\.scss$/,
            //     include: [
            //         path.join(__dirname, 'node_modules/wix-animations'),
            //         path.join(__dirname, 'node_modules/wix-style-react'),
            //         path.join(__dirname, 'src/scss'),
            //         path.join(__dirname, 'src')
            //     ],
            //     loaders: [
            //         'style-loader',
            //         // 'css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]',
            //         'css-loader',
            //         'sass-loader'
            //     ],
            // }
        ]
    },
    output: {
        publicPath: "/",
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new StylableWebpackPlugin(),
        new htmlWebpackPlugin({
            // inject: 'head',
            template: "./src/index.html",
            filename: "./index.html",
            //gitHash: gitHash
        }),
        new webpack.DefinePlugin({
            gitHash: JSON.stringify(gitHash),
        }),
        //htmlPlugin,
    ],
    devtool: 'source-map'
};

if (typeof process.mainModule !== "undefined") {
    var regex = /webpack-dev-server\.js$/
    if (regex.exec(process.mainModule.filename) == null) {
        // definitely we are running webpack-dev-server
        exportBuild.plugins.push(
            new SentryPlugin({
                //release: git.long(),
                release: gitHash,
                include: './dist',
                debug: true,
                ignore: ['node_modules', 'webpack.config.js'],
                configFile: 'sentry.properties',
                sourceMapReference: false,
                stripCommonPrefix: true,
                validate: true,
                //urlPrefix: 'http://localhost:8888/'
            }),)
    }
}

module.exports = exportBuild;