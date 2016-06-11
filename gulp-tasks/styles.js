var gulp = require('gulp'),
    less = require('gulp-less');
/**
 * Compile less to CSS
 */

gulp.task('styles', function() {
    gulp.src('app/assets/styles/styles.less')
        .pipe(less())
        .pipe(gulp.dest('app/assets/styles/'))
});