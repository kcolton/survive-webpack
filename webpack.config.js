
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const parts = require('./webpack.parts.js');

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'SurviveJS Webpack',
      }),
    ],
  }
]);

const productionConfig = merge([
  parts.extractCSS(),
  parts.extractSASS()
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadSASS()
]);


// Receives "--env" param parsed by yargs package
// expecting "production" or "development"
module.exports = function(env) {
  console.log('configuring webpack for --env:', env);

  if (env === "production") {
    // merge common + production + { mode: "production" }
    return merge(commonConfig, productionConfig, { mode: "production" });
  }

  return merge(commonConfig, developmentConfig, { mode: "development" });
};
