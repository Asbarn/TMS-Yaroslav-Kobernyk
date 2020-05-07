const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        },],

       }
     ]
   },
   devServer: {
         contentBase: './dist',
       },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Search'
    })
  ]
};