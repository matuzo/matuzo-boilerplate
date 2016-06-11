var gulp = require('gulp'),
    replace = require('gulp-replace-path'),
    chmod = require('gulp-chmod');
/**
* Copy all PHP includes
*/

gulp.task('copyphp', function() {
    gulp.src(['app/index.php', 'app/config.php', 'app/functions.php'])
        .pipe(replace("ENV = 'dev'", "ENV = 'prod'"))
        .pipe(gulp.dest('dist/'));
    gulp.src(['app/content/**/*.php', '!app/content/views/master.blade.php', '!app/content/cache'])
        .pipe(gulp.dest('dist/content'));
    gulp.src(['app/content/cache'])
        .pipe(chmod({
            owner: {
                read: true,
                write: true,
                execute: true
            },
            group: {
                execute: true
            },
            others: {
                execute: true
            }
        }))
        .pipe(gulp.dest('dist/content/'));
})	

/**
*  Copy misc files
*/

gulp.task('copyother', function() {
    gulp.src(['app/.htaccess', 'app/favicon.ico'])
        .pipe(gulp.dest('dist'))
    gulp.src('app/assets/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'))
    gulp.src(['app/assets/images/*', '!app/assets/images/sprites'])
        .pipe(gulp.dest('dist/assets/images'))
    gulp.src('app/assets/styles/sprite.png')
        .pipe(gulp.dest('dist/assets/styles'))
});

/**
*  Adjust paths when copying, if necessary
*/

// gulp.task('adjustPaths', function() {
//     gulp.src('dist/contact.php')
//         .pipe(replace('../vendor/', 'vendor/'))
//         .pipe(gulp.dest('dist'));
// });