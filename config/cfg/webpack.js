"use strict";

const path    = require("path");
const webpack = require("webpack");
const aprefix = require("autoprefixer");
const envs    = require("./environments");

const isWatch = envs.isWatch;

module.exports = function(root) {

  let options = {
    watch: isWatch,
    context: root,
    entry: {
      app: ["./client/js/index.js"],
      vendor: ["angular"]
    },
    output: {
      path: path.join(root, "./server/public/assets/js/"),
      filename: "[name].js",
      chunkFilename: "[id].js",
      publicPath: "",
      pathinfo: isWatch
    },
    debug: isWatch,
    devtool: isWatch ? "inline-source-map" : null,
    resolve: {
      modules: [ root, "node_modules" ],
      extensions: [".js"],
      enforceModuleExtension: false,
      enforceExtension: false,
      mainFields: ["main"],
      descriptionFiles: ["package.json"]
    },
    resolveLoader: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".loader.js", ".js"],
      moduleTemplates: ["*-loader", "*"]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity
      })
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          path.join(root, "./client")
        ],
        query: {
          presets: ["es2015"]
        }
      }, {
        test: /\.html$/,
        loader: "html-loader",
        include: [
          path.join(root, "./client")
        ],
        query: {
          attrs: false
        }
      }, {
        test: /\.styl$/,
        loader: "style-loader!css-loader!postcss-loader!stylus-loader?resolve url"
      }],
      noParse: [
        /angular\/angular.js/
      ]
    },
    postcss: function () {
      return [aprefix({
        browsers: ["last 2 versions", "Firefox ESR", "ie >= 9"]
      })];
    }
  };

  return options;
};
