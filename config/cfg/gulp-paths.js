"use strict";

module.exports = {

  clean: {
    dest: "./server/public/assets/*"
  },

  svgSprite: {
    src: "./client/img/svg-sprite/**/*.svg",
    dest: "./server/public/assets/img/"
  },

  css: {
    src: "./client/css/*.styl",
    dest: "./server/public/assets/css/"
  },

  watch: {
    css: "./client/css/**/*.styl",
    svgSprite: "./client/img/svg-sprite/**/*.svg"
  }

};
