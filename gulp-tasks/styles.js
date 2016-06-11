var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps');
/**
 * Compile less to CSS
 */

gulp.task('styles', function() {
    gulp.src('app/assets/styles/styles.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/assets/styles/'))
});