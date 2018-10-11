const gulp  = require('gulp'),
iconfont    = require('gulp-iconfont'),
consolidate = require('gulp-consolidate')


gulp.task("build:icons", function() {
  return gulp.src(["./assets/icon-font/**/*.svg"]) //path to svg icons
  .pipe(iconfont({
    fontName: "myicons",
    formats: ["ttf", "eot", "woff", "svg"],
    fontWeight: 'normal',
    centerHorizontally: true,
    normalize: true,
    fontHeight: 1500
  }))
  .on("glyphs", (glyphs) => {
      gulp.src("./assets/icon-font/util/*.scss") // Template for scss files
        .pipe(consolidate("lodash", {
          glyphs: glyphs,
          fontName: "myicons",
          fontPath: "~@/assets/fonts/"
        }))
        .pipe(gulp.dest("./assets/styles/layout/")); // generated scss files with classes
      })
    .pipe(gulp.dest("./assets/fonts/")); //icon font destination
  })