'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  svgmin = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  svgsprite = require('gulp-svg-sprite'),
  concat = require('gulp-concat'),
  gcmq = require('gulp-group-css-media-queries'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  notify = require("gulp-notify"),
  browserSync  = require('browser-sync');

var path = {
  src: {
    pug: './_source/**/*.pug',
    noPugComponents: '!./_source/pages/components/**/*.pug',
    js: './_source/js/**/*.js',
    style: './_source/css/**/*\.scss',
    css: './_source/css/**/*\.css',
    img: './_source/img/**/*.*',
    svg: './_source/svg/**/*\.svg',
    font: './_source/font/**/*\.*',
    module: './_source/module/**/*.*',
    favicon: './_source/favicon/*.*'
  },
  build: {
    html: './_assets/',
    js: './_assets/js/',
    style: './_assets/css/',
    css: './_assets/css/',
    img: './_assets/img/',
    svg: './_assets/svg/',
    font: './_assets/font/',
    module: './_assets/module/',
    favicon: './_assets/favicon/'
  }
};

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: '_assets'
    },
    notify: false
  });
});

gulp.task('pug:build', function() {
  return gulp.src([path.src.noPugComponents,path.src.pug])
    .pipe(plumber({
      errorHandler: notify.onError()
    }))
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(path.build.html))
});

gulp.task('js:work:build', function ()
{
  return gulp.src(path.src.js)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(path.build.js));
});

gulp.task('js:build', function ()
{
  return gulp.src(path.src.js)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(path.build.js));
});

gulp.task('style:build', function ()
{
  return gulp.src(path.src.style)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefixer({browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'], cascade: false}))
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(gulp.dest(path.build.style));
});

gulp.task('css:build', function ()
{
  return gulp.src(path.src.css)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(prefixer({browsers: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'], cascade: false}))
    .pipe(cssnano())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('img:build', function ()
{
  return gulp.src(path.src.img)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(imagemin())
    .pipe(rename(function (path)
    {
      path.extname = (path.extname + "").toLowerCase();
    }))
    .pipe(gulp.dest(path.build.img));
});

gulp.task('img:work:build', function ()
{
  return gulp.src(path.src.img)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(rename(function (path)
    {
      path.extname = (path.extname + "").toLowerCase();
    }))
    .pipe(gulp.dest(path.build.img));
});

gulp.task('svg:build', function ()
{
  return gulp.src(path.src.svg)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($)
      {
        //$('[fill]').removeAttr('fill');
        //$('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(svgsprite({
      mode: {
        symbol: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest(path.build.svg));
});

gulp.task('font:build', function ()
{
  return gulp.src(path.src.font)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(gulp.dest(path.build.font));
});

gulp.task('module:build', function ()
{
  return gulp.src(path.src.module)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(gulp.dest(path.build.module));
});

gulp.task('favicon:build', function ()
{
  return gulp.src(path.src.favicon)
    .pipe(plumber({
        errorHandler: notify.onError()
    }))
    .pipe(gulp.dest(path.build.favicon));
});

gulp.task('build', [
  'pug:build',
  'js:build',
  'style:build',
  'css:build',
  'img:build',
  'svg:build',
  'font:build',
  'module:build',
  'favicon:build'
]);

gulp.task('watch', ['browser-sync'], function ()
{
  gulp.watch([path.src.pug], function ()
  {
    gulp.start('pug:build',browserSync.reload);
  });
  gulp.watch([path.src.js], function ()
  {
    gulp.start('js:work:build', browserSync.reload);
  });
  gulp.watch([path.src.style], function ()
  {
    gulp.start('style:build', browserSync.reload);
  });
  gulp.watch([path.src.css], function ()
  {
    gulp.start('css:build', browserSync.reload);
  });
  gulp.watch([path.src.img], function ()
  {
    gulp.start('img:work:build', browserSync.reload);
  });
  gulp.watch([path.src.svg], function ()
  {
    gulp.start('svg:build', browserSync.reload);
  });
  gulp.watch([path.src.font], function ()
  {
    gulp.start('font:build', browserSync.reload);
  });
  gulp.watch([path.src.module], function ()
  {
    gulp.start('module:build', browserSync.reload);
  });
});

gulp.task('default', ['build', 'watch']);