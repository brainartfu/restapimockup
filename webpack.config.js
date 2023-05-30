const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isLocal = slsw.lib.webpack.isLocal;
module.exports = {
  mode: isLocal ? 'development' : 'production',
  entry: "./src/lambda.js", //slsw.lib.entries,
  externals: [nodeExternals()],
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      "src": path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, "../", '.webpack'),
    filename: 'lambda.js'
  },
  target: 'node',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    cacheDirectory: path.resolve('.webpackCache')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};