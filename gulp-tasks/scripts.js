var gulp = require('gulp'),
    jshint = require('gulp-jshint');

/**
 * JS lint
 * jshint-stylish: nicer output
 */

gulp.task('hintjs', function() {
    return gulp.src('app/assets/js/scripts.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});