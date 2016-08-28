module.exports = {
  entry: "./vlr-ce.js",
  output: {
    path: __dirname + '/dist',
    filename: "vlr-ce.min.js"
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
    }]
  }
};