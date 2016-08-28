var path = require('path');

module.exports = {
  entry: "./vlr-ce.js",
  output: {
    path: __dirname + '/dist',
    filename: "vlr-ce.min.js"
  },
  resolve: {
    root: path.resolve('.'),
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc")
    }
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    }, {
      test: /\.jpg$/,
      loader: "file-loader"
    }, {
      test: /\.html$/,
      loader: "mustache-loader"
    }, {
      test: /\.modernizrrc$/,
      loader: "modernizr-loader"
    }, {
      test: /\.jsx?/,
      loader: 'babel-loader'
    }, {
      test: /\.js?/,
      loader: 'babel-loader'
    }]
  }
};