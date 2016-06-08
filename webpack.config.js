var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: path.join( __dirname, 'public' ),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: [ 'node_modules', 'src' ],
    extension: [ '', '.js']
  },
  module: [
    {
      test: /\.js$/,
      exclude: /node-modules/,
      loader: 'babel',
      query: {
        presets: [ 'es2015' ]
      }
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://localhost:3000'
    }
  }
};