const path = require('path');

module.exports = {
 mode: 'none',
 devtool: 'source-map',
 entry: './src/index.js',
 output: {
 filename: 'bundle.js',
 //path: path.resolve(__dirname, 'dist')
 path: path.resolve(__dirname, 'public')//change made for vercel deployment
},
module: {
 rules: [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
           loader: 'babel-loader'
         }
  }
        ]
}
};