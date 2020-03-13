const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pluginsConfig = [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './index.html',
		hash: false,
		minify: process.env.MODE == 'production'?{
			removeAttributeQuotes: true,//删除html的双引号
			collapseWhitespace: true,//折叠成一行
		}:false,//html压缩
	}),
	new MiniCssExtractPlugin({
		filename: './css/[name][hash].css',
		chunkFilename: './css/[id].[hash:8].css',
		ignoreOrder: false,
	}),
	new webpack.NamedModulesPlugin(),//打印更新的模块路径
	new webpack.HotModuleReplacementPlugin(),//热更新插件
];
if (process.env.MODE == 'production') {
	pluginsConfig.push(
		new CleanWebpackPlugin()
	)
	console.log('CleanWebpackPlugin---[清除dist目录]------------>')
}
module.exports = pluginsConfig;

console.log('pluginsConfig--------[导出插件]---------------->')
