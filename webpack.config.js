const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // will still get entry and output defaults
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SurviveJS Webpack',
    }),
  ]
};
