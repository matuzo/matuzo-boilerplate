var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream');

gulp.task('sprite', function () {
  var spriteData = gulp.src('app/assets/images/*').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.less',
    padding: 10
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('app/assets/styles'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest('app/assets/styles/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});