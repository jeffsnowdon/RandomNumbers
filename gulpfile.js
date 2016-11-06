const browserify = require('browserify'),
  watchify = require('watchify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  gutil = require('gulp-util'),
  stringify = require('stringify'),
  babel = require('babelify'),
  sourceFile = './src/main.js',
  destFolder = './build/',
  destFile = 'bundle.js';


function rebundle(b) {
  return b
    .transform(babel, { presets: ["es2015"]})
    .transform(stringify, {
      appliesTo: { includeExtensions: ['.html'] }
    })
    .bundle()
    .on('error', function (err) {
      gutil.log(err.toString());
      this.emit("end");
    })
    .pipe(source(destFile))
    .pipe(gulp.dest(destFolder));
}

gulp.task('browserify', function () {
  var b = browserify(sourceFile,
    {
      cache: {},
      packageCache: {},
      debug: true,
      paths: ['./node_modules', './assets/']
    });
  return rebundle(b);
});

gulp.task('watch', function () {
  var b = browserify(sourceFile,
    {
      cache: {},
      packageCache: {},
      debug: true,
      plugin: [watchify],
      paths: ['./node_modules', './assets/']
    });
  b.on('update', function () {
    return rebundle(b);
  });
  b.on('log', function (msg) {
    gutil.log(msg);
  });
  //watchify requires bundle to be run once before updates will work
  return rebundle(b);
});

gulp.task('default', ['watch']);
