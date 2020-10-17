const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.jsx'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  mode: process.env.NODE_ENV || 'development',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
