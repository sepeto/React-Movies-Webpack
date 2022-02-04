const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",
  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, "dist/")
    },
    port: 3000,
    // publicPath
    devMiddleware:{
      publicPath: "https://localhost:3000/",
    },
    // hotOnlys
    hot: "only",
    historyApiFallback: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);