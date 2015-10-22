var gulp = require('gulp');
var config = require('../config').devJsDirect;
var browserSync  = require('browser-sync');

gulp.task('dev-js-direct', function() {
  debugger;
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
  ;
});
