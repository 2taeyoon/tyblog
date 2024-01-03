const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");
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
      port: 8755,
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
        },
        // {
        //   test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        //   use: [
        //     {
        //       loader: "file-loader",
				// 			options: {
				// 				name: "images/[name].[ext]"
				// 			}
        //     }
        //   ]
        // },
				// {
				// 	test: /\.(webp)$/i,
				// 	use: [
				// 		{
				// 			loader: 'file-loader',
				// 			options: {
				// 				name: 'images/[name].[ext]'
				// 			},
				// 		},
				// 		{
				// 			loader: 'image-webpack-loader',
				// 			options: {
				// 				webp: {
				// 					quality: 75
				// 				}
				// 			},
				// 		},
				// 	],
				// }
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
				],
			}),
      new CleanWebpackPlugin()
    ]
  };
};
