const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: {
    news:'./js/index.js', 
    order:'./js/detail.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',   
          'sass-loader'   
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',              
          'less-loader'          
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource', 
        generator: {
          filename: 'img/[name][ext][query]' 
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css' 
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'news.html',
      chunks: ['news'] ,
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: './detail.html',
      filename: 'order.html',
      chunks: ['order'],
      minify: false 
    })
  ]
};