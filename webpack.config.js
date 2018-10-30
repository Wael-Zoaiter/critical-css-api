// webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
	},
  module: {
    rules: [
      {
      	test: /\.css$/,
      	use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
      	]
      }
    ]
  },
  plugins: [
  	new CleanWebpackPlugin('dist', {}),
  	new HtmlWebpackPlugin({
  		inject: false,
  		hash: false,
  		template: './src/index.html',
  		filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
  		filename: 'style.css'
  	}),
  	new HtmlCriticalWebpackPlugin({
  		base: path.resolve(__dirname, 'dist'),
  		src: 'index.html',
  		dest: 'critical.css',
  		inline: false,
  		minify: false,
  		extract: false,
  		width: 0,
  		height: 0,
  		penthouse: {
  			blockJSRequests: false,
  		}
  	})
  ]
};
