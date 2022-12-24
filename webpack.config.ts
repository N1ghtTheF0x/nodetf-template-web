import { Configuration } from "webpack"
import HtmlWebpackPlugin = require("html-webpack-plugin")
import NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

import { resolve } from "node:path"

function configure(): Configuration
{
    const config: Configuration = {
        entry: "./source/index.ts",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.m?ts$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env',"@babel/preset-typescript"]
                        }
                    }
                },
                {
                    test: /\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env',"@babel/preset-react"]
                        }
                    }
                },
                {
                    test: /\.tsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env',"@babel/preset-typescript","@babel/preset-react"]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: [".ts",".js",".tsx",".jsx"]
        },
        output: {
            assetModuleFilename: "[name].[contenthash][ext][query]",
            filename: "[name].[contenthash].js",
            path: resolve(__dirname,"www"),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin(), new NodePolyfillPlugin()
        ]
    }

    return config
}

export default configure