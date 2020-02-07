var Browserify = require('browserify');
var bresolve = require('browser-resolve');
patchResolve();

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        outputFolder: ".",

        browserify: {
            main: {
                src: ['index.js'],
                dest: '<%= outputFolder %>/<%= pkg.name %>.js',
                options: {
                    browserifyOptions: { standalone: '<%= pkg.name %>' },
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
                    alias: {
                        "jsonpath": "./index.js"
                    },
                    require: [],
                    ignore: [
                        'file',
                        'system',
                        'source-map',
                        'estraverse',
                        'escodegen',
                        'underscore',
                        'reflect',
                        'JSONSelect',
                    ],
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
            },
            build: {
                src: '<%= outputFolder %>/<%= pkg.name %>.js',
                dest: '<%= outputFolder %>/<%= pkg.name %>.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default', ['browserify', 'uglify']);

};

function patchResolve() {
  var _createDeps = Browserify.prototype._createDeps;
  Browserify.prototype._createDeps = function() {
    var returnValue = _createDeps.apply(this, arguments);
    this._bresolve = function(id, opts, cb) {
      opts.browser = 'alias';
      return bresolve(id, opts, cb);
    };
    return returnValue;
  }
}
