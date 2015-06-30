var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/app.js'
  },

  output: {
    path: './build/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // precompile es6
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel?cacheDirectory'] },

      // require('.scss')
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap') },

      // the file loader works its magic
      // https://github.com/webpack/file-loader#usage
      { test: /\.(png|jpg)$/, loader: 'url?limit=10000' },

      // fonts
      // try to put the font in a url(....) mess unless it's bigger than 10k
      // otherwise, the file-loader will then copy paste this to the output directory
      { test: /\.woff2?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ],
  },

  plugins: [
    // prevent fouc (flash of unstyled content)
    new ExtractTextPlugin('bundle.css'),

    // copy index.html and inject the bundle.css and bundle.js into them
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    })
  ],

  devtool: 'eval',

  devServer: {
    contentBase: './app',
    inline: true,
    colors: true,
    port: 8081
  }
};
