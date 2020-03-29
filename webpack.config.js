const path = require('path');

module.exports = {
	entry: './src/index.js',
	watch: true,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			// babel is currently not working
			// {
			// test: /\.m?js$/,
			// exclude: /(node_modules|bower_components)/,
			// use: {
			//     loader: 'babel-loader',
			//     options: {
			//             presets: ['@babel/preset-env']
			//         }
			//     }
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					// eslint options (if necessary)
				},
			},
		],
	},
};
