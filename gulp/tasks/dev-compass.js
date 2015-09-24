var gulp = require ('gulp');
var compass = require('gulp-compass');
var path = require('path');
var config = require('../config').devCompass;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-compass', function() {
    gulp.src(config.src)
    //    .pipe(sourcemaps.init())
        .pipe(compass({
            css: config.dest,
            sass: 'src',
            sourcemap: true
        }))
        .on('error', function(error) {
            // Would like to catch the error here
            console.log(error);
            this.emit('end');
        })
        //.pipe(autoprefixer({
        //    browsers: ['last 5 versions'],
        //    cascade: false
        //}))
        ////.pipe(concat(config.concatFile))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}))
    ;
});