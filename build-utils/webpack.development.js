const webpack = require('webpack');

module.exports = () => ({
  devtool: "source-map",
  module: {
    rules: [
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin]
})
