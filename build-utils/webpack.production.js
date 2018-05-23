// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  output: {
    filename: 'bundle.[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

// .css or .scss ???
// plugins: [MiniCssExtractPlugin({ filename: '[name].scss', chunkFilename:'[id.scss' ]
