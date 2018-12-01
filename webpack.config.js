const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT = path.resolve(__dirname, 'dist');

const babelOptions = {
	'presets': [
		'@babel/preset-env',
		'@babel/preset-react'
	]
};

module.exports = {
	mode: 'development',
	entry: './src/app/index.tsx',
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
	module: {
		rules: [{
			test: /\.ts(x?)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					options: babelOptions
				},
				{
					loader: 'ts-loader'
				}
			]
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'less-loader']
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					options: babelOptions
				}
			]
		}]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	}
}; 