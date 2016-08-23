"use strict";

const path = require("path");
const root = process.cwd();

const environments= require("./cfg/environments");
const tasksConfig   = require("./cfg/gulp-paths");
const pluginsConfig = require("./cfg/gulp-plugins")(root);
const webpackConfig = require("./cfg/webpack")(root);

let config = module.exports = {};

config.root = root;
config.env = environments;
config.gulp = {
  plugins: pluginsConfig,
  tasks: tasksConfig
};

config.webpack = webpackConfig;
