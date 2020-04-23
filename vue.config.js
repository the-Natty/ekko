const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //代码压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')  //开启gzip压缩
const path = require("path")
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: (config)=>{
    if(process.env.NODE_ENV == 'production') {
      // === 代码压缩 ===
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除console
            compress: {
              // warnings: false, // 若打包错误，则注释这行
              drop_debugger: true,
              drop_console: process.env.NODE_ENV == 'production' ? true : false,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      
      // === 开启gzip压缩 ===
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
    }
  },
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .end()

    // === 图片压缩 ===
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
  },
  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "less",
  //     patterns: [
  //       path.resolve(__dirname, "./src/common/style/variable.less")
  //     ]
  //   }
  // },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  productionSourceMap: false,
  lintOnSave: false,
  publicPath: './',
}