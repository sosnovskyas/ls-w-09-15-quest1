var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function (callback) {
    runSequence(
        //'dev-clean',
        [
            'dev-markup',
            'dev-compass',
            'dev-css-vendor',
            'dev-fonts'
        ],
        [
            'dev-scss-custom',
            'dev-img'
        ],
        'dev-browsersync',
        'dev-watch',
        callback);
});
/*
*  НАДО ПЕРЕНЕСТИ НАСТРОЙКУ ПОСЛЕДОВАТЕЛЬНОСТИ В КОНФИГ
*  в такой конфигурайии почему-то не работает
*/

//
//var gulp = require('gulp');
//var config = require('../config').devMain;
//var runSequence = require('run-sequence');
//
//gulp.task('dev', function (callback) {
//    runSequence(
//        config.sequence,
//        callback);
//});