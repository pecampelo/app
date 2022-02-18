const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
	mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
	entry: path.join(__dirname, 'src', 'index.tsx'),
	performance: {
		hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
	},
	output: {
		filename: 'bundle[fullhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: process.env.NODE_ENV === 'production' ? 3000 : 8080,
	},
	devtool: process.env.NODE_ENV === 'production'
		? undefined
		: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new CleanWebpackPlugin(),

		// clean
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: /src/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
}
