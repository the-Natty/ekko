const path = require("path")
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: (config)=>{
    return {
      name: 'ekko125'
    }
  },
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .end()
  },
  // 公共样式
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "./src/common/style/variable.less")
      ]
    }
  },
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