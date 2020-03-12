const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const mapjson = require('src/views/dp/firstdp/map/chinamaincity')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */

  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new BundleAnalyzerPlugin(),
      new CopyWebpackPlugin([{
        from: 'node_modules/@liveqing/liveplayer/dist/component/crossdomain.xml'
      },
      {
        from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer.swf'
      },
      {
        from: 'node_modules/@liveqing/liveplayer/dist/component/liveplayer-lib.min.js',
        to: 'js/'
      }
    ])
    ],
    externals: {
      'vue': 'Vue',
      'ant-design-vue': 'antd',
      'BMap': 'BMap'
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@layout', resolve('src/layout'))
      .set('@static', resolve('src/static'))
      .set('@utils', resolve('src/utils'))
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */

          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
          'font-size-base': '13px'
        },
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    https: false,
    disableHostCheck: true,
    proxy: {
      '/apiUrl': {
        target: 'http://192.168.0.149:8088/switch-monitor', // 郝景宗
        // target: 'http://192.168.0.185:8088/switch-monitor', // 张洁27
        // target: 'http://192.168.0.20:8082/switch-monitor', // 张洁20
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apiUrl': ''
        }
      },
      '/qukuai': {
        target: 'http://115.236.28.76:59000', //
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/qukuai': ''
        }
      },
      '/ddkj': {
        target: 'http://115.236.28.77:10000', //
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ddkj': ''
        }
      },
      '/sms': {
        target: 'http://115.236.28.77:10000', //
        ws: true,
        changeOrigin: true,
      },
    }
  },
  lintOnSave: false,
  productionSourceMap: false
}