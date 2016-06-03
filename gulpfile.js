'use strict';

var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    uglify = require('gulp-uglify');

var VERSION = "2.0.2";

gulp.task('compress', function() {
    return gulp.src('dist/tlogin.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/min'));
});

gulp.task('copy', function() {
    return gulp
        .src(['src/index.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(done) {
    return del(['tmp'], done);
});

gulp.task('style', function() {
    return gulp.src("style/tlogin.scss")
        .pipe(sass().on('error', sass.logError))
        //.pipe(autoprefixer('last 2 versions'))
        .pipe(rename(`tlogin-${VERSION}.css`))
        .pipe(gulp.dest("dist/css"))
});

gulp.task('compileTS', function() {
    return gulp.src(['src/**/*.{ts,tsx}', "typings/**/*.ts"])
        .pipe(typescript({ removeComments: true, outDir: 'tmp', module: 'commonjs', jsx: "react" }))
        .pipe(gulp.dest('tmp'))
        .on('error', function(err) { console.error(err.message); process.exit(1) });
});

gulp.task('compile', ["clean", "compileTS"], function() {
    var b = browserify('tmp/main.js');
    return b.bundle()
        .pipe(source('tlogin.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename(`tlogin-${VERSION}.js`))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ["compile", "style"], function() {
    return gulp.src("dist");
});