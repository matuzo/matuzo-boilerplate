var gulp = require('gulp'),
replace = require('gulp-replace-path');
/**
* Copy all PHP includes
*/

gulp.task('copyphp', function() {
    return gulp.src(['app/**/*.php'])
        .pipe(gulp.dest('dist/'));
})	

/**
*  Copy misc files
*/

gulp.task('copyother', function() {
    gulp.src(['app/.htaccess', 'app/favicon.ico'])
        .pipe(gulp.dest('dist'))
    gulp.src('app/files/**/*')
        .pipe(gulp.dest('dist/files'))
    gulp.src('app/assets/icons/*')
        .pipe(gulp.dest('dist/assets/icons'))    
    gulp.src('app/assets/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'))
    gulp.src('app/assets/styles/sprite.png')
        .pipe(gulp.dest('dist/assets/styles'))
    gulp.src('vendor/**/*')
        .pipe(gulp.dest('dist/vendor'))
});

/**
*  Adjust paths when copying, if necessary
*/

gulp.task('adjustPaths', function() {
	  // gulp.src('dist/contact.php')
	  // .pipe(replace('../vendor/', 'vendor/'))
   //    .pipe(gulp.dest('dist'));
});