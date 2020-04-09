
const webpack = require("webpack");
const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin  = require('uglifyjs-webpack-plugin')
const {MODE} = process.env;
const IsDevelopment = MODE === "development"; //true 开发环境  false 生产环境
const outputFilename = IsDevelopment?'js/[name].js':'js/[name][hash:8].min.js'; //输出文件名字
const devConfig = require("./webpack_config/dev.config");
let moduleConfig = require('./webpack_config/module.config')
let pluginsConfig = require('./webpack_config/plugins.config')

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    devtool: IsDevelopment ?"source-map" : "cheap-module-source-map" ,
    output: {
        path: path.resolve(__dirname, "blog"),
        filename:outputFilename,
        chunkFilename: 'js/chunk/[name]_[chunkhash].js',
        publicPath: "/",
    },  // 打包出口文件
    resolve: {
        extensions: ['.js'],//自动解析确定的扩展,省去你引入组件时写后缀的麻烦，
        alias: {
            '@components': path.resolve(__dirname, "src/components"),
            '@public': path.resolve(__dirname, "src/public"),
            '@http': path.resolve(__dirname, "src/http"),
            '@router': path.resolve(__dirname, "src/router"),
            '@store': path.resolve(__dirname, "src/store"),
            '@assets': path.resolve(__dirname, "src/assets"),
            '@pages': path.resolve(__dirname, "src/pages"),
          },//配置短路径
        modules: ['node_modules'],//webpack 解析模块时应该搜索的目录，
    },
    module:moduleConfig,    // 处理对应模块
    plugins:pluginsConfig,  // 对应的插件
    devServer: {
        port:devConfig.port,// 端口
        contentBase: path.join(__dirname, 'blog'), //服务器根路径
        proxy: devConfig.proxy.map(item => (
            {
            context: item.path,
            target: item.target,
            changeOrigin: true,
            secure: false
            }
        )),
        disableHostCheck: IsDevelopment?true:false,
        // hot: true,
        // inline: false,
        host: devConfig.ip, //ip
        compress: true, // 服务端压缩
        historyApiFallback: true,//不添加这个路由刷新会没页面
    },  // 开发服务器配置
    optimization: {//优化项
        minimizer:[//压缩的
            new UglifyJsPlugin({
                cache: true,//是否应用缓存
                parallel: true,//是否并发，一起打包多个
                sourceMap:IsDevelopment?true:false,//源码映射，为了更好的调试
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks:{//分割代码块
            cacheGroups:{//缓存组
                common:{//公共的模块
                    chunks:'initial',//从入口处开始
                    minSize:0,
                    minChunks:2,//只要引用2次以上就抽离
                },
                vendor:{
                    priority:1,//提高权重，先把第三方模块抽离出来，在去抽离公共代码（common），如果不设置的话，common抽离完了，就不再执行vendor抽离。
                    test:/node_modules/,//把你抽离出来
                    chunks:'initial',//从入口处开始
                    minSize:0,
                    minChunks:2,//只要引用2次以上就抽离
                }
            }
        }
    },
}