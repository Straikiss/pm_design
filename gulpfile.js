let Gulp = require("gulp");
let CssNano = require("gulp-cssnano");
let HtmlMin = require("gulp-htmlmin");
let BrowserSync = require("browser-sync").create();

function MinifyHtml(){
  return(
    Gulp
      .src(["dev/*.html", "dev/create-company/*.html", "dev/created-company/*.html"])
      .pipe(HtmlMin({collapseWhitespace: true}))
      .pipe(Gulp.dest("prod/"))
  );
}

function MinifyCss(){
  return(
    Gulp
    .src("dev/css/main.css")
    .pipe(CssNano())
    .pipe(Gulp.dest("prod/css/"))
  );
}

function prod(){
  MinifyHtml();
  MinifyCss();
}

function dev(){
  BrowserSync.init({server: {baseDir: "dev/"}});
  Gulp.watch("dev/*.html").on('change', BrowserSync.reload);
  Gulp.watch("dev/css/*.css").on('change', BrowserSync.reload);
}

exports.dev = dev;
exports.prod = prod;