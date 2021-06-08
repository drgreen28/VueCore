const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/scripts/index.ts",
    output: {
        path: path.resolve(__dirname, "wwwroot/webpack"),
        filename: "[name].[chunkhash].js",
        publicPath: "/webpack/"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [".js", ".ts"]
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.html$/,
                loader: "vue-template-loader",
                exclude: /index.html/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "../../Views/Shared/_Layout.cshtml"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "*", to: "../../wwwroot/css/", context: "./src/css" },
            ],
        })
    ]
};
