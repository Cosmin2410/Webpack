const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', //production or development

  // Where to look for one or more files to compile
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },

  // Where to create the file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },

  // For debuggin
  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },

    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      // Sass module
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // Babel module
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // Images in JS
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    // Create HTML template
    new HtmlWebpackPlugin({
      title: 'WebPack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};

// npm init -y
// npm i -D webpack webpack-cli
// npm i -D sass style-loader css-loader sass-loader
// npm i -D html html-webpack-plugin
// npm i -D babel-loader @babel/core @babel/preset-env
