const path = require('path');
// eslint-disable-next-line import/no-unresolved
const webpack = require('webpack');
// eslint-disable-next-line import/no-unresolved
const Stylish = require('webpack-stylish');


module.exports = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new Stylish(),
  ],
};
