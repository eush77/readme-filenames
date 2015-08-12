'use strict';

var readmeFilenames = require('..');

var test = require('tape');


test(function (t) {
  t.ok(readmeFilenames.indexOf('README.md') >= 0);
  t.ok(readmeFilenames.indexOf('LICENSE') < 0);
  t.end();
});
