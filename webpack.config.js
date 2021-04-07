const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  target: 'web',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 4000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bootstrap/dist/css/bootstrap.min.css'),
          path.resolve(__dirname, 'src', 'assests', 'scss')
        ],
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new Dotenv({
      ignoreStubs: true
    })
  ],
  devtool: 'inline-source-map'
}
