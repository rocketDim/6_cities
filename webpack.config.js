const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8081,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        }
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      devtool: 'source-map',
};