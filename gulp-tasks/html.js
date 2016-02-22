var gulp = require('gulp'),
usemin = require('gulp-usemin'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css');

/**
 * Concat and minify/uglify all js and css files
 */

gulp.task('usemin', function() {
	 return gulp.src(['app/inc/header.php','app/inc/footer.php'])
	.pipe(usemin({
		// html: [ minifyHtml({ empty: true }) ],
		js: [ uglify() ],
		js1: [ uglify() ],
		assetsDir: 'app',
		outputRelativePath: '../',
		css: [ minifyCss(), 'concat' ]
	}))
	.pipe(gulp.dest('dist/inc'));
});