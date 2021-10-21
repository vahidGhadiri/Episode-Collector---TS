const Webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "..", "build"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [{
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: [{loader: "babel-loader"}]
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    devServer: {
        port: 7000,
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "..", "public/index.html")})
    ],
}