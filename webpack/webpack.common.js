const Webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "..", "./src/App.tsx"),
    output: {
        path: path.resolve(__dirname, "..", "build"),
        filename: "bundle.js"
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
        }, {
            test: /\.(?:jpg|jpeg|png|ico|gif)$/i,
            use: "asset/resource"
        }, {
            test: /\.(svg|ttf|otf|woff|woff2)$/,
            use: "asset/inline"
        }]
    },
    devServer: {
        compress: true,
        port: 7000,
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "..", "public/index.html")})
    ],
}