var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function () {
  return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCSS())
    .pipe(rename({ extname : '.min.css'} ))
    .pipe(gulp.dest('./css/'));
});

gulp.task('normalize', function () {
  return gulp.src('./node_modules/normalize.css/normalize.css')
    .pipe(minifyCSS())
    .pipe(rename({ extname : '.min.css'} ))
    .pipe(gulp.dest('./css/'));
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});
