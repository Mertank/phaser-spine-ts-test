const path = require('path');

module.exports = {
  entry: './example/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'bin')
  }
};