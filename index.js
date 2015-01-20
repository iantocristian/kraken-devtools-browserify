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

    //load transforms if specified
    if (options.transform) {
      var transforms = options.transform;
      for (var i = 0, n = transforms.length; i < n; i++) {
        var t = transforms[i];
        if (Array.isArray(t)) {
          b.transform(t[0], t[1]);
        } else {
          b.transform(t);
        }
      }
    }

    b.add(path.join(args.context.srcRoot, args.context.filePath));
    b.bundle(callback);
  };
};