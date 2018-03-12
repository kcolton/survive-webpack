const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // will still get entry and output defaults
  devServer: {
    // Output only errors
    stats: "errors-only",

    // Show error overlays
    // overlay: true is equivalent
    overlay: {
      errors: true,
      warnings: true,
    },

    // Parse host and port from env to allow customization.
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || "0.0.0.0";
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'SurviveJS Webpack',
    }),
  ]
};
