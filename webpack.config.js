const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
