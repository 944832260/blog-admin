
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//依赖
const path = require('path');
const moduleConfigDev = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.css$/,
            include: [
              path.resolve(__dirname, "../src"),
              path.resolve(__dirname, "../node_modules/antd")
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader', //@import 解析路径
                'postcss-loader',
            ],
        },
        {
            test: /\.less$/,
            include: [
              path.resolve(__dirname, "../src"),
              path.resolve(__dirname, "../node_modules/antd")
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
        }, {
            test: /\.scss$/,
            include: [
              path.resolve(__dirname, "../src"),
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(png|jpg|gif|ico)$/,
            loader: "file-loader",
            exclude: /node_modules/,
            query: {
                limit: 5000,
                name: "image/[name].[hash:8].[ext]"
            }
        },
        {
            test: /\.(woff|svg|ttf|eot|woff2)(\?.*)?$/,
            loader: "url-loader",
            exclude: /node_modules/,
            query: {
                limit: 5000,
                name: "font/[name].[hash:8].[ext]"
            }
        }
    ]
};
const moduleConfigProd = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.css$/,
            include: [
              path.resolve(__dirname, "../src"),
              path.resolve(__dirname, "../node_modules/antd")
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader', //@import 解析路径
                'postcss-loader',
            ],
        },
        {
            test: /\.less$/,
            include: [
              path.resolve(__dirname, "../src"),
              path.resolve(__dirname, "../node_modules/antd")
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
        }, {
            test: /\.scss$/,
            include: [
              path.resolve(__dirname, "../src"),
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(png|jpg|gif|ico)$/,
            loader: "url-loader",
            exclude: /node_modules/,
            query: {
                limit: 5000,
                name: "image/[name].[hash:8].[ext]"
            }
        },
        {
            test: /\.(woff|svg|ttf|eot|woff2)(\?.*)?$/,
            loader: "url-loader",
            exclude: /node_modules/,
            query: {
                limit: 5000,
                name: "font/[name].[hash:8].[ext]"
            }
        }
    ]
};
if (process.env.MODE == 'development') {
    module.exports = moduleConfigDev;
    console.log('moduleConfigDev------[开发环境]---------------->')
} else if (process.env.MODE == 'production') {
    module.exports = moduleConfigProd;
    console.log('moduleConfigProd-----[生产环境]---------------->')
}
