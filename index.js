'use strict';

var gulpDi = require('dependency-install'),
  args = require('yargs').argv;

var init = function (path) {
  gulpDi.init(path);
};

var install = function (paths) {
  return gulpDi.install(paths || [args.dir]);
};

module.exports = {
  init: init,
  install: install
};
