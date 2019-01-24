const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function(webpackConfig) {
  console.log(webpackConfig);
  webpackConfig.entry = './index.js';
  webpackConfig.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  };
  webpackConfig.plugins = [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html'
    }),
  ];
  webpackConfig.devServer = {
    contentBase: './'
  };
  console.log(webpackConfig);
  return webpackConfig;
};