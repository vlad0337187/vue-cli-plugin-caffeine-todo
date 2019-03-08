module.exports = function(API) {
  return API.configureWebpack(function() {
    return {
      resolve: {
        extensions: ['.caf']
      },
      module: {
        rules: [
          {
            test: /\.caf$/,
            loader: 'caffeine-mc/webpack-loader'
          }
        ]
      }
    };
  });
};
