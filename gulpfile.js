var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

    require('require-dir')('gulp-tasks');

/**
 * Open project in browser
 */

gulp.task('serve', ['js'], function() {
    browserSync.init({
        proxy: "boilerplate.dev",
        browser: ['google chrome canary']
    });

    /**
     * Copy stylesheets from node_modules folder
     */

    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('app/assets/styles/'))

    /**
    *  Refresh browser if .php, .less or .js files change
    *  Compile less to css
    */

    gulp.watch(['app/**/*.php'], reload);
    gulp.watch(['app/assets/styles/**/*.less'], ['styles', reload]);
    gulp.watch(['app/assets/js/**/*.js'], ['js', reload]);
});

/**
* Dist Task
* Copy all necessary files from /app and concat and minify JS & CSS
*/

gulp.task('dist', function(callback) {
    runSequence('copyphp', 'copyother', 'usemin', callback);
});