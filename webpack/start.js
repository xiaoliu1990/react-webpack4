const webpack=require("webpack");
const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development', //开发环境还是正是环境
    devtool: 'eval-source-map', 
    entry:{//入口
        app: path.resolve(__dirname, "../src/app.jsx")
    },
    output:{//打包出口
        path: path.resolve(__dirname, "../dist"),
		publicPath: "/",
		filename: "[name]-[hash].js"
    },
    devServer:{//webpack-dev-server 配置
        compress: true,
        port: 8888,
        historyApiFallback:true //本地启动
    },
    resolve: {
		extensions: [".web.js",".js", ".json", ".jsx", ".less", ".css", ".scss"]
	},
    module:{
        rules: [{
            test: /\.(jsx|js)$/,
            use: {
              loader: "babel-loader",
            },
            exclude: /node_modules/
        },{
            test: /\.(less|css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                }, "css-loader"
            ]
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }]
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }]
        }]
    },
    plugins:[
        new webpack.BannerPlugin("谢谢使用"),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, "../dist"),
            template: "template/index.html",
        })
    ]
}