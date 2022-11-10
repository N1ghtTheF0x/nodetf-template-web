import { Configuration } from "webpack"
import HtmlWebpackPlugin = require("html-webpack-plugin")
import NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

import { resolve } from "node:path"

function configure(env: Record<string,any>): Configuration
{
    const WEBPACK_MODE: Configuration["mode"] = env.mode
    const config: Configuration = {
        entry: "./index.ts",
        mode: WEBPACK_MODE,
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
                }
            ]
        },
        resolve: {
            extensions: [".ts",".js"]
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