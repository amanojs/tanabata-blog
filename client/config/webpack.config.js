const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html'
})

module.exports = {
  entry: {
    index: './client/src/index.js'
  },
  output: {
    path: path.resolve('client/dist'),
    filename: '[name].bundle.js'
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
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  plugins: [htmlWebpackPlugin]
}
