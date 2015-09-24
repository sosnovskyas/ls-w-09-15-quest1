var gulp = require ('gulp');
var compass = require('gulp-compass');
var path = require('path');
var config = require('../config').devCompass;
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-compass', function() {
    //return gulp.src(config.src)
    return gulp.src('./src/custom.scss')
        //.pipe(sourcemaps.init())
        .pipe(compass({
            //project: path.join(__dirname, 'assets'),
            css: 'css',
            sass: 'sass'
        }))
        //.pipe(autoprefixer({
        //    browsers: ['last 5 versions'],
        //    cascade: false
        //}))
        //.pipe(concat(config.concatFile))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dest))
        //.pipe(browserSync.reload({stream:true}))
    ;
});