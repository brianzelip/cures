
var gulp = require('gulp');
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(uncss({
      html: ['./*.html', './_layouts/*.html', './_includes/*.html']
    }))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('devCss', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('dev', ['devCss', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['devCss']);
});

gulp.task('prod', ['css', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['css']);
  gulp.watch(['./index.html', './_layouts/*.html'], ['css']);
});
