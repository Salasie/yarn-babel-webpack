'use strict';

const path = require('path');

// Path build
var PATH_BUILD = path.resolve(__dirname, 'dist');

// Path src
var PATH_SRC = path.resolve(__dirname, 'src');


var config = {
	entry: PATH_SRC + '/index.js',
	output: {
		path: PATH_BUILD,
		filename:'app.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				include: PATH_SRC,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]

	}
};


module.exports = config;