const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    stats: "minimal",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        port: 9010,
        contentBase: path.join(__dirname, "dist"),
        stats: "minimal"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: path.join(__dirname, "tsconfig.json")
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}