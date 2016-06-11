# matuzo boilerplate

A combination of [Web Startet Kit](https://github.com/google/web-starter-kit), [Mobile Boilerplate](https://html5boilerplate.com/mobile/) and my own settings.

## Installation

### Virtual hosts (on OSX 10.11)

Add the following snippet to `httpd-vhosts.conf`

`sudo nano /etc/apache2/extra/httpd-vhosts.conf`

Replace [DOMAIN] with your domain, eg. `myproject.dev`  
Replace [USER] with your OSX username  
Replace [MYPROJECT] with the name of your project folder

    <VirtualHost *:80>
        ServerName [DOMAIN]
        ServerAlias www.[DOMAIN]
        DocumentRoot "/Users/[USER]/Sites/[MYPROJECT]/app"
        ErrorLog "/private/var/log/apache2/[MYPROJECT].com-error_log"
        CustomLog "/private/var/log/apache2/[MYPROJECT].com-access_log" common
        ServerAdmin manuel@matuzo.at
    </VirtualHost>

Save and exit. Then

`sudo nano /etc/hosts`

and add

`127.0.0.1 [DOMAIN] www.[DOMAIN]``

Save and exit. Restart apache

`sudo apachectl restart`


For the initial setup on OSX and complete instructions check <https://coolestguidesontheplanet.com/how-to-set-up-virtual-hosts-in-apache-on-mac-osx-10-11-el-capitan/>

### Dependencies

1. `npm install`

	Includes:  
	
	**Dependencies**
	
    * [normalize.css](https://github.com/necolas/normalize.css/)
    * [picturefill](https://github.com/scottjehl/picturefill)
    * [Apache Server Configs](https://github.com/h5bp/server-configs-apache)
    
    **Dev dependencies**

    * [babel-core](https://www.npmjs.com/package/babel)
    * [babel-loader](https://www.npmjs.com/package/babel-loader)
    * [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)
    * [browser-sync](https://github.com/BrowserSync/browser-sync)
    * [eslint](https://www.npmjs.com/package/eslint)
    * [eslint-loader](https://github.com/MoOx/eslint-loader), 
    * [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
    * [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
    
    **Gulp**

    * [gulp](https://github.com/gulpjs/gulp)
    * [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
    * [gulp-chmod](https://www.npmjs.com/package/gulp-chmod)
    * [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries)
    * [gulp-less](https://github.com/plus3network/gulp-less)
    * [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
    * [gulp-replace-path](https://www.npmjs.com/package/gulp-replace-path) 
    * [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
    * [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite)
    * [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
    * [gulp-usemin](https://www.npmjs.com/package/gulp-usemin)
    * [gulp-webpack](https://www.npmjs.com/package/gulp-webpack)
    * [requireDir](https://github.com/aseemk/requireDir)
    * [run-sequence](https://www.npmjs.com/package/run-sequence)

1. `composer install`

    Includes:

    * [Laravel-Blade](https://github.com/PhiloNL/Laravel-Blade)

### Gulp 

1. Update Line 14 in the [gulpfile](gulpfile.js) and change `proxy` to your local virtual host.

2. Launch the project with `gulp serve`

### Sublime

This has to be done only once per project.

If you're working with [Sublime Text](http://www.sublimetext.com/) you have to change some project settings. If not, simply ignore or delete the file `matuzo-boilerplate.sublime-project`.

1. Rename `matuzo-boilerplate.sublime-project` to the name of your project and open it.
2. If you are using [AutoFileName](https://github.com/BoundInCode/AutoFileName) change `afn_proj_root` to your project root.