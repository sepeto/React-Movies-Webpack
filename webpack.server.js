const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
      },
      {
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader"
          }
        ],
        test: /\.css$/,
      }
    ]
  }
};