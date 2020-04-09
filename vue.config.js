const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MyWebsite/'
    : '/'
}


module.exports = {
  publicPath: './',
  chainWebpack: config => {
    // 解决ie11兼容ES6
    config.entry('main').add('babel-polyfill')
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin')
        .use(new CompressionPlugin({
          test: /\.js$|\.html$|.\css/,
          threshold: 1024,
          deleteOriginalAssets: false
        }))
    }
  },
  transpileDependencies: [
    'biyi-admin',
  ]
}
