module.exports = {
  publicPath: '/',
  outputDir: 'sworkPage',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 4001,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,

  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-chile-page1`,
    }
  },
}
