var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    mode:'development',
    entry: APP_DIR + '/index.jsx',
    output: {
        // options related to how webpack emits results
        path: BUILD_DIR, // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "bundle.js", // string    // the filename template for entry chunks
     },



    module: {

      rules: [
        {

          test: /\.jsx$/,
          include: [
            APP_DIR
          ],
          exclude: /node_modules/,
          loader: "babel-loader",
          // the loader which should be applied, it'll be resolved relative to the context
          // -loader suffix is no longer optional in webpack2 for clarity reasons
          // see webpack 1 upgrade guide
          
          options: {
            presets: ["es2015"]
          },
        },
        {
            test: /\.css$/,
            
            use: [
              { loader: "style-loader" },
              { loader: "file-loader" }
            ]

          },
     
          {test: /\.(png|jpg)$/, loader: "file-loader?name=images/[name].[ext]"},
      


        
      ],

    },
    plugins: [htmlPlugin],

  };