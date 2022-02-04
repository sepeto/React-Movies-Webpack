const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "umd",
    globalObject: "this",
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
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
  ],
}