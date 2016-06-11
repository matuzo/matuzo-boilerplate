var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

const spriteConfig = {
    mode: {
        css: {
            render: {
                less: {
                    dest: '../styles/other/sprite.less'
                }
            },
            dest: 'assets',
            sprite: '../images/sprite.svg',
        }
    }
};

gulp.task('sprite', function () {
    gulp.src('app/assets/images/sprites/*.svg')
        .pipe(svgSprite(spriteConfig))
        .pipe(gulp.dest('app/assets'));
});
