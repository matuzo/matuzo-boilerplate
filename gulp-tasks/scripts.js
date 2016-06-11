var gulp = require('gulp'),
    webpack = require('gulp-webpack');

/**
 * JS lint
 * jshint-stylish: nicer output
 */

gulp.task('js', function() {
    return gulp.src('app/assets/js/scripts.js')
        .pipe(webpack( require('../webpack.config.js') ))
        .pipe(gulp.dest('app/assets/js/'));
})