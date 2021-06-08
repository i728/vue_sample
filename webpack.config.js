const path = require("path");
var webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    entry: path.join(__dirname, "src", "js", "app.js"),
    output: {
        path: path.join(__dirname, "dist", "js"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "style-laoder",
                    "css-loader",
                ],
            },
            {
                test: /.(png|jpe?g|gif)S/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "../images/[name.[ext]"
                    }

                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".js"],
        alias: {
            jquery: path.join(__dirname, 'node_modules', 'jquery')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery":"jquery"
        })
    ]
}