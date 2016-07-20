module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: "./index.js",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
