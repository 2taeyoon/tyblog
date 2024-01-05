const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");

module.exports = (argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/build"),
      filename: "index.js",
			publicPath: '/'
    },
    devServer: {
      port: 8761,
      hot: true,
			historyApiFallback: true
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        Pub: path.resolve(__dirname, "public/")
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"]
        },
        {
          test: /\.css$/,
          exclude: /node_modules\/(?!swiper)/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react"
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
				favicon: "./public/favicon/favicon.ico",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true,
                removeComments: true
              }
            : false
      }),
			new CopyPlugin({
				patterns: [
					{ from: './public/images', to: 'images' },
					{ from: './public/favicon', to: 'favicon' },
					{ from: './public/manifest.json', to: 'manifest.json' },
					{ from: './public/robots.txt', to: 'robots.txt' },
				],
			}),
      new CleanWebpackPlugin()
    ]
  };
};
