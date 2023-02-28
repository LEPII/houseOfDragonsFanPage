const path = require("path");

module.exports = {
  mode: "development",
  entry: { main: path.resolve(__dirname, "./src/index.js") },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "./public"),
    port: 3001,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(png|webp|jpeg)$/, type: "asset/resource" },
    ],
  },
};