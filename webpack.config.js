const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const presetConfig = require('./build-utils/loadPresets');
const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge({
    entry: './src/index.js',
    mode,
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
};
