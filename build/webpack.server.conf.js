const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = merge({
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, '../server/app.js'),
  output: {
    filename: 'app.[chunkhash:16].js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '../server'),
  },
  // 服务端打包的时候忽略外部的npm包
  externals: nodeExternals({
    // 当然外部的css还是可以打进来的
    whitelist: /\.css$/,
  }),
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
      },
    }),
  ],
});
