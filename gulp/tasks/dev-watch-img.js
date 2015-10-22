var gulp = require('gulp');
var config = require('../config').devImage;

gulp.task('dev-watch-images', function () {
    gulp.watch(config.watch, ['dev-images']);
});