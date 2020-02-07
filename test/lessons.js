var assert = require('assert');
var jp = require('../');

var data = require('./data/store.json');

suite('orig-google-code-issues', function() {
  test('member names with dots', function() {
    var data = { 'www.google.com': 42, 'www.wikipedia.org': 190 };
    var results = jp.query(data, "$['www.google.com']");
    assert.deepEqual(results, [ 42 ]);
  });

  test('negative slices', function() {
    var results = jp.query(data, "$..book[-1:].title");
    assert.deepEqual(results, ['The Lord of the Rings']);
  });

});

