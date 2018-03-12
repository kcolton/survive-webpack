exports.devServer = function({ host, port } = {}) {
  return {
    devServer: {
      stats: "errors-only",
      host, // Defaults to `localhost`
      port, // Defaults to 8080
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  }
};

exports.loadCSS = function({ include, exclude } = {}) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          include,
          exclude,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    }
  }
};
