const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT = path.resolve(__dirname, 'dist');

module.exports = {
	mode: 'development',
	entry: './src/app/index.js',
	output: {
		filename: 'bundle.js',
		path: OUTPUT
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin([OUTPUT]),
		new HtmlWebpackPlugin({
			title: 'Project',
			template: './src/app/index.html'
		})
	],
};