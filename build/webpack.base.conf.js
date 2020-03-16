const path = require('path');

const APP_PATH = path.resolve(__dirname, '../app');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: './app/index.jsx',
    framework: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    filename: 'js/bundle.js',
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // 在html中插入<style>标签
          },
          {
            loader: 'css-loader', // 获取引用资源，如@import,url()
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 version'],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader', // 自动加前缀
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 version'],
                }),
              ],
            },
          },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 version'],
                }),
              ],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            publicPath: '/',
            name: '[path][name].[ext]',
            limit: 500, // 是把小于500B的文件打成Base64的格式，写入JS
          },
        }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      Images: path.resolve(__dirname, '../static/images'),
      appPath: APP_PATH,
    },
    extensions: ['.js', '.jsx', 'css', '.json'],
  },
};
