const HtmlWebPackPlugin = require('html-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html'
})

module.exports = {
  mode: 'production',
  entry: {
    index: './client/src/index.js'
  },
  output: {
    path: path.resolve('client/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'//変えた
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|react-syntax-highlighter)/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|react-syntax-highlighter)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  plugins: [htmlWebpackPlugin, new HardSourceWebpackPlugin()]
}
