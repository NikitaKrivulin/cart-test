let gulp = require('gulp');
let pug = require('gulp-pug');

function buildHtml(cb) {

    gulp.src('src/*.pug')
        .pipe(pug())
        .dest("public");

    cb();
}

exports.default = buildHtml
