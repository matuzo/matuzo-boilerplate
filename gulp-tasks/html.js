var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    gcmq = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer');

/**
 * Concat and minify/uglify all js and css files
 */

gulp.task('usemin', function() {
    gulp.src(['app/content/views/master.blade.php'])
        .pipe(usemin({
            js: [ uglify() ],
            css: [ gcmq(), autoprefixer({ browsers: ['last 3 versions'] }), minifyCss(), 'concat' ],
            assetsDir: 'app',
            outputRelativePath: '../../',
           }))
        .pipe(gulp.dest('dist/content/views'));
});