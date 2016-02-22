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
        browser: ['firefoxdeveloperedition', 'google chrome canary']
    });

    /**
    *  refresh browser if .php, .less or .js files change
    *  compile less to css
    *  lint js
    */

    gulp.watch(['app/**/*.php'], reload);
    gulp.watch(['app/assets/styles/*.less'], ['styles', reload]);
    gulp.watch(['app/assets/js/*.js'], ['hintjs']);
});

/**
* Dist Task
*/

gulp.task('dist', function(callback) {
    runSequence('copyphp', 'usemin', 'copyother', 'adjustPaths', callback);
});