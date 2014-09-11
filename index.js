/* Copyright (c) 2014 Cristian Ianto, MIT License */
/* jshint node:true */
'use strict';

var path = require('path');
var browserify = require('browserify');

module.exports = function (options) {

  options.ext = options.ext || 'js';

  return function (data, args, callback) {
    //console.log(JSON.stringify(args, null, 4));

    var b = browserify({ debug: true });
    b.add(path.join(args.context.srcRoot, args.context.filePath));
    b.bundle(callback);
  };
};