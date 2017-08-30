var gulp = require('gulp'),
	concat = require('gulp-concat'),
	changed = require('gulp-changed'),
	connect = require('gulp-connect'),
	historyApiFallback = require('connect-history-api-fallback'),
	typescript = require('gulp-tsc'),
	bowerSrc = require('main-bower-files'),
	sass = require('gulp-sass'),
	cssmin = require('gulp-cssmin'),
	importCss = require('gulp-import-css'),
	es = require('event-stream'),
	bourbon = require('node-bourbon').includePaths,
	RUN_SEQUENCE = require('run-sequence'),
	SOURCEMAPS = require("gulp-sourcemaps"),
	rename = require('gulp-rename'),
	iconfont = require('gulp-iconfont'),
	consolidate = require('gulp-consolidate'),
	autoprefixer = require('gulp-autoprefixer'),
	env = process.env.NODE_ENV || 'dev';
var urlModule = require("url");
var http = require('http');
var querystring = require('querystring');
var fs = require('fs');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var pathDist = './../../dist/ui-kit';
var strip = require('gulp-strip-comments');

gulp.task('copyIndex', function () {
	return gulp.src(['../index.html'])
		.pipe(gulp.dest('target'))
		.pipe(connect.reload());
});

gulp.task('templates', function () {
	console.log('templates');
	gulp.src('../ui-kit/**/*.html')
		.pipe(changed('target/ui-kit'))
		.pipe(gulp.dest('target/ui-kit'));

	gulp.src('../pages/**/*.html')
		.pipe(changed('target/pages'))
		.pipe(gulp.dest('target/pages'))
		.pipe(connect.reload());


});

gulp.task('first', function () {
	return gulp.src('../app.ts')
		.pipe(typescript({
			module :"amd",
			out:"app.js"
		}))
		.pipe(gulp.dest('target/js/'))
});

gulp.task('scripts.app', ['first'], function () {
	source = [
		'target/js/app.js'
	];

	return gulp.src(source)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('target/js/'))
		.pipe(connect.reload());
});

gulp.task('scripts.vendor', function () {
	return gulp.src(bowerSrc())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('target/js/'))
		.pipe(connect.reload());
});

gulp.task('sass', function () {
	return gulp.src('../themes/theme.scss')
		.pipe(sass({
			sync: true
			//	errLogToConsole: true
		}))
		.pipe(importCss())
		.pipe(autoprefixer({
			browsers: ['Firefox >=24'],
			cascade: false
		}))
		// .pipe(cssmin())
		.pipe(gulp.dest('target/css'))
		.pipe(connect.reload());
});

gulp.task('sassDist', function () {
	return gulp.src('../ui-kit/**/*.scss')
		.pipe(sass({
			sync: true
			//	errLogToConsole: true
		}))
		.pipe(importCss())
		.pipe(autoprefixer({
			browsers: ['Firefox >=24'],
			cascade: false
		}))
		.pipe(concat("ui-kit.min.css"))
		.pipe(cssmin())
		.pipe(gulp.dest(pathDist));
});

gulp.task('server', function () {

	var base = function (req, res, next) {
		req.url = req.url.replace('web/', '');
		next();
	}
	connect.server({
		root: 'target',
		port: 3336,
		livereload: false,
		middleware: function () {
			return [
				historyApiFallback,
				base
			]
		}
	});
});

gulp.task('tsTojs', function () {
	return gulp.src('../ui-kit/kpi/index.ts')
		.pipe(typescript({
			module :"amd",
			out:"app.js",
			declaration: true
		}))
		.pipe(gulp.dest('target/js/'))
});

gulp.task('ngHtml2Js', function () {
	return gulp.src('../ui-kit/**/*.html')
		.pipe(minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(ngHtml2Js({
			prefix: "ui-kit/",
			moduleName: "ui-kit-kpi"
		}))
		.pipe(concat("js/app.tpl.js"))
		.pipe(gulp.dest("target"));
});


gulp.task('concatJs', function () {
	return gulp.src(['./target/js/app.js', './target/js/app.tpl.js'])
		.pipe(concat("ui-kit.min.js"))
        .pipe(strip())
		.pipe(gulp.dest(pathDist));
});

gulp.task('typingDist', function () {
	return gulp.src('./target/js/*.d.ts')
		.pipe(concat("ui-kit.d.ts"))
        .pipe(strip({ignore: /\/\*\*\s*\n([^\*]*(\*[^\/])?)*\*\//g}))
		.pipe(gulp.dest(pathDist));
});

gulp.task('fontToDist', function () {
	return gulp.src(['./target/css/**/*.svg', './target/css/**/*.eot', './target/css/**/*.ttf', './target/css/**/*.woff'], {base: './target/css'})
		.pipe(gulp.dest(pathDist));
});

gulp.task('_watch', function () {
	gulp.watch(['../ui-kit/**/*.scss'], {
		interval: 500
	}, ['sass']);
	gulp.watch(['../ui-kit/**/*.html'], {
		interval: 500
	}, ['templates']);
	gulp.watch(['../ui-kit/**/*.ts'], {
		interval: 500
	}, ['scripts.app']);


});

gulp.task('iconfont', function () {
	return gulp.src(['../ui-kit/kpi/_icons/font-icons/*.svg'])
		.pipe(iconfont({
			fontName: 'icons'
		}))
		.on('codepoints', function (codepoints, options) {
			gulp.src('../ui-kit/kpi/_icons/font-icons/_icons.scss')
				.pipe(consolidate('lodash', {
					glyphs: codepoints,
					fontName: 'icons',
					fontPath: 'iconfont/',
					className: 'icon',
					timeStamp: function () {
						return Date.now();
					}
				}))
				.pipe(gulp.dest('../ui-kit/kpi/_icons/build-font-icons'));

		})
		.pipe(gulp.dest('../ui-kit/kpi/_icons/build-font-icons/iconfont'))
		.on('codepoints', function (codepoints, options) {
			gulp.src('../ui-kit/kpi/_icons/font-icons/_icons.scss')
				.pipe(consolidate('lodash', {
					glyphs: codepoints,
					fontName: 'icons',
					fontPath: 'iconfont/',
					className: 'icon',
					timeStamp: function () {
						return Date.now();
					}
				}))
				.pipe(gulp.dest('../ui-kit/kpi/_icons/build-font-icons'));

		})
		.pipe(gulp.dest('target/css/iconfont'));
});

gulp.task('dev', [ 'copyIndex', 'iconfont'], function () {
	gulp.start( 'scripts.vendor', 'scripts.app', 'server', 'templates', 'sass', '_watch');
});

gulp.task('build', ['copyIndex', 'iconfont'], function () {
	gulp.start('scripts.vendor', 'scripts.app', 'templates', 'sass');
	
});

gulp.task('watch', [ 'copyIndex'], function () {
	gulp.start( 'scripts.vendor', 'scripts.app', 'server', 'templates', 'sass', '_watch');
});


var gulpSequence = require('gulp-sequence');
var rimraf = require('rimraf');
gulp.task('dist', function (cb) {
	rimraf.sync('target');
	rimraf.sync(pathDist);
	gulpSequence('tsTojs', 'ngHtml2Js', 'concatJs', 'iconfont','sassDist', 'typingDist', 'fontToDist') (cb);
});
