var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var pug = require("gulp-pug");
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
      // .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest("pm/"))
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