var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    require('require-dir')('gulp-tasks');

/**
 * Open project in browser
 */

gulp.task('serve', function() {
    browserSync.init({
        proxy: "boilerplate.dev",
        browser: ['google chrome canary']
    });

    /**
    *  Refresh browser if .php, .less or .js files change
    *  Compile less to css
    */

    gulp.watch(['app/**/*.php'], reload);
    gulp.watch(['app/assets/styles/**/*.less'], ['styles', reload]);
});

/**
* Dist Task
* Copy all necessary files from /app and concat and minify JS & CSS
*/

gulp.task('dist', function(callback) {
    runSequence('copyphp', 'copyother', 'usemin', callback);
});