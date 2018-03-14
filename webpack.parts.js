const ExtractTextPlugin = require("extract-text-webpack-plugin");


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
      ],
    }
  }
};

exports.loadSASS = function({ include, exclude } = {}) {
  return {
    module: {
      rules: [
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



exports.extractCSS = function({ include, exclude } = {}) {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as well.
    allChunks: true,
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: plugin.extract({
            use: ['css-loader', 'postcss-loader'],
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.extractSASS = function({ include, exclude } = {}) {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as well.
    allChunks: true,
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,

          use: plugin.extract({
            use: ['css-loader', 'postcss-loader', 'sass-loader'],
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.loadImagesWithUrlAndFileLoader = function({include, exclude, inlineMaxSizeLimit, name} = {}) {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|jpe?g|png|svg)$/i,
          include,
          exclude,
          use: {
            loader: 'url-loader',
            options: {
              limit: inlineMaxSizeLimit,
              name
            }
          }
        }
      ]
    }
  };
};


