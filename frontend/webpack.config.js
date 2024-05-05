// webpack.config.js
const path = require('path');

module.exports = {
  devtool: 'eval-source-map', // Use 'source-map' for production
  entry: './src/index.js', // path to your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // name of the output bundle
  },
  mode: 'development', // or 'production'
  module: {
    rules: [
      {
        test: /\.js$/, // for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // using babel-loader for transpiling
          options: {
            presets: ['@babel/preset-env'] // preset for compiling ES2015+
          }
        }
      }
    ]
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Example of adding a custom middleware at the beginning
      devServer.app.get('/some-path', function(req, res) {
        res.json({ custom: 'response' });
      });
      return middlewares; // Make sure to return the middlewares array
    }
  }
};
