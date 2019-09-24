let gulp = require('gulp');
let pug = require('gulp-pug');
let htmlbeautify = require('gulp-html-beautify');
let browserSync = require('browser-sync').create();

function buildHtml(cb) {

    gulp.src('src/*.pug')
        .pipe(pug())
        .pipe(htmlbeautify())
        .pipe(gulp.dest("public"));

    cb();
}

function watch(cb) {

    browserSync.init({
        server: {
            baseDir: "public"
        },
    });

    gulp.watch([ "src/**.pug" ], buildHtml).on('change', browserSync.reload);
    cb();
}

exports.watch = watch;
exports.default = buildHtml
