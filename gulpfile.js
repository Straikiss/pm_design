var gulp = require("gulp");
var {series} = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var pug = require("gulp-pug");
var concat = require("gulp-concat")
var minify = require("gulp-minify")
var browserSync = require("browser-sync").create();

function SassToCss(){
  return(
    gulp
      .src("pm/sass/main.sass")
      .pipe(sass())
      .pipe(cssnano())
      .pipe(gulp.dest("pm/css"))
  );
}

function PugToHtml(){
  return(
    gulp
      .src("pm/pug/*.pug")
      .pipe(pug({pretty: true}))
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest("pm/"))
  );
}

function JsMinify(){
  return(
    gulp
      .src("pm/js/*.js")
      .pipe(minify())
      .pipe(gulp.dest('pm/js'))
  );
}

function JsConcat(){
  return(
    gulp
      .src("pm/js/*min.js")
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('pm/js'))
  );
}

function watch(){
  browserSync.init({server: {baseDir: "pm/"}});
  gulp.watch("pm/sass/main.sass", SassToCss);
  gulp.watch("pm/pug/*.pug", PugToHtml);
  gulp.watch("pm/sass/main.sass").on('change', browserSync.reload);
  gulp.watch("pm/pug/*.pug").on('change', browserSync.reload);
}

exports.watch = watch;
exports.build = series(JsMinify, JsConcat);