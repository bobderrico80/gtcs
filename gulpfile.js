var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('serve', ['sass'], function () {
  browserSync({
    proxy: 'localhost/gtcs'
  });
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('./*').on('change', reload);
});

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCSS())
    .pipe(rename({ extname : '.min.css'} ))
    .pipe(gulp.dest('./css/'))
    .pipe(reload( {stream: true} ));
});

gulp.task('normalize', function () {
  return gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(minifyCSS())
    .pipe(rename({ extname : '.min.css'} ))
    .pipe(gulp.dest('./css/'));
});


