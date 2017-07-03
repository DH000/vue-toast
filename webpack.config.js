var path = require('path');
var webpack = require('webpack');
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: "./src/lib/index.js",
  output: {
    path: path.join(__dirname,"./dist"),
    publicPath: "/dist/",
    filename: "vue-toast-m.js"
  },
  resolve: {
      extensions: ['.js', '.vue', '.css']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          loaders:{
            scss: 'vue-style-loader!css-loader!sass-loader',
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
  ],
  devtool:"#source-map"
}