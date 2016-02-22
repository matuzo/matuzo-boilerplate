var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

/**
 * Compile less to CSS
 */

gulp.task('styles', function() {
    gulp.src('app/assets/styles/styles.less')
    .pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 3 versions']
	}))
    .pipe(gulp.dest('app/assets/styles/'))
});