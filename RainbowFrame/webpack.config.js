const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "bundle.css",
});

module.exports = {
  entry: './App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, )
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: ["css-loader"]
        })
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};