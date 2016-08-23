"use strict";

const path = require("path");

module.exports = function(root) {

  return {
    autoprefixer: {
      browsers: ["last 2 versions", "Firefox ESR", "ie >= 9"]
    },

    browserSync: {
      server: {
        baseDir: "server/public/",
        index: "index.html"
      },
      ghostMode: false,
      ui: false,
      notify: false,
      open: false
    },

    stylus: {
      compress: false
    },

    spriteSvg: {
      mode: {
        symbol: {
          dest: "./",
          bust: false,
          sprite: "sprite.svg"
        }
      },
      shape: {
        spacing: {
          box: "padding"
        }
      }
    },

    webpackOutput: {
      hash: true,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      chunkModules: false,
      children: false,
      reasons: false,
      source: false,
      errorDetails: true,
      chunkOrigins: false,
      modules: true,
      cached: true,
      colors: true
    }
  };

};
