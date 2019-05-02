const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:16].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: {
        html5: true,
      },
      hash: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
      },
    }),
  ],
  devServer: {
    port: '1234',
    contentBase: path.join(__dirname, '../'),
    compress: true,
    historyApiFallback: true,
    hot: true, // 启动webpack热模块替换特性
    inline: true, // 自动刷新
    https: false,
    noInfo: true,
    open: true,
    proxy: {
      '/api': {
        secure: false,
        changeOrigin: true,
        target: 'https://api.douban.com',
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
