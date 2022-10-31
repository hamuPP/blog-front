/**
 * @author: ty
 * @date: 2022-07-20
 * @description: 配置文件
 */
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
  // 使用 HTML5 history时，避免使用相对路径
  publicPath: '/',
  // 生产环境构建文件的目录，默认 dist
  outputDir: 'dist',
  assetsDir: 'static',
  // 是否开启eslint
  lintOnSave: process.env.NODE_ENV === 'development',
  // 设置为false，则不需要 source map，默认为true
  productionSourceMap: false,
  transpileDependencies: [
    // /[/\\]node_modules[/\\](.+?)?element-ui(.*)[/\\]src/,
    /[/\\]node_modules[/\\](.+?)?sockjs-client(.*)[/\\]dist/,
    // '/node_modules/sockjs-client/dist/sockjs.js'
  ],
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // // 配置mock 若不需要注释掉即可
    // before: require('./mock/mock-server.js'),
    // // 配置代理 若不需要注释掉即可
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.13.68:18002/', // 接口的域名
    //     // secure: false,  // 如果是https接口，需要配置这个参数
    //     changOrigin: true,//允许跨域
    //     pathRewrite: {
    //       '^/api': ''//请求的时候使用这个api就可以
    //     }
    //   },
    // }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
};
