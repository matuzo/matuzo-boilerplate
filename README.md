# matuzo boilerplate

A combination of [Web Startet Kit](https://github.com/google/web-starter-kit), [Mobile Boilerplate](https://html5boilerplate.com/mobile/) and my own settings.

## Installation

### Dependencies

1. Bower dependencies  

	`bower install`
	
	Includes: [normalize.css](https://github.com/necolas/normalize.css/), [picturefill](https://github.com/scottjehl/picturefill), [Apache Server Configs](https://github.com/h5bp/server-configs-apache)
	
2. `npm install`

	Includes: [gulp](https://github.com/gulpjs/gulp), [browser-sync](https://github.com/BrowserSync/browser-sync), [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer), [run-sequence](https://www.npmjs.com/package/run-sequence), [requireDir](https://github.com/aseemk/requireDir), [merge-stream](https://www.npmjs.com/package/merge-stream), [shint-stylish](https://www.npmjs.com/package/jshint-stylish), [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith), [gulp-usemin](https://www.npmjs.com/package/gulp-usemin), [gulp-uglify](https://www.npmjs.com/package/gulp-uglify), [gulp-replace-path](https://www.npmjs.com/package/gulp-replace-path), [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css), [gulp-less](https://github.com/plus3network/gulp-less), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)
	
### Gulp 

1. Update Line 11 in the [gulpfile](gulpfile.js) and change `proxy` to your local virtual host.

2. Launch the project with `gulp serve`



### Sublime

This has to be done only once per project.

If you're working with [Sublime Text](http://www.sublimetext.com/) you have to change some project settings. If not, simply ignore or delete the file `matuzo-boilerplate.sublime-project`.

1. Rename `matuzo-boilerplate.sublime-project` to the name of your project and open it.
2. If you are using [AutoFileName](https://github.com/BoundInCode/AutoFileName) change `afn_proj_root` to your project root.