'use strict';

const browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    nunjucksRender = require('gulp-nunjucks-render'),
    plumber = require('gulp-plumber'),
    stylus = require('gulp-stylus'),
    terser = require('gulp-terser');
/*
|--------------------------------------------------------------------------
| Nunjucks Tasks
|--------------------------------------------------------------------------
*/
gulp.task('nunjucks', () => {
    return gulp.src('app/*.html')
        .pipe(plumber())
        .pipe(nunjucksRender({ path: ['app/views/'] }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('public/'));
});
/*
|--------------------------------------------------------------------------
| Stylus Tasks
|--------------------------------------------------------------------------
*/
gulp.task('stylus', () => {
    gulp.src("app/stylus/main.styl")
        .pipe(plumber())
        .pipe(stylus({ compress: true }))
        .pipe(gulp.dest("public/css"));
});
/*
|--------------------------------------------------------------------------
| Uglify and Concat JS
|--------------------------------------------------------------------------
*/
gulp.task('javascript', () => {
    return gulp.src('app/javascript/**/*.js')
        .pipe(plumber())
        .pipe(terser())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('public/js'))
});
/*
|--------------------------------------------------------------------------
| Images Tasks
|--------------------------------------------------------------------------
*/
gulp.task('images', () => {
    gulp.src('app/images/**/*')
        .pipe(plumber())
        .pipe(imagemin({ interlaced: true, progressive: true, optimizationLevel: 2 }))
        .pipe(gulp.dest('public/images'));
});
/*
|--------------------------------------------------------------------------
| Watching Tasks
|--------------------------------------------------------------------------
|
| They look for the files changes and runs building tasks.
| We're watching each domain and recompiling separetly
| for better performance.
|
*/
gulp.task('watch', () => {
    gulp.watch('app/**/*.html', ['nunjucks']);
    gulp.watch('app/stylus/**/*.styl', ['stylus']);
    gulp.watch('app/javascript/**/*.js', ['javascript']);
    gulp.watch('app/images/**/*.{jpg,png,gif}', ['imagemin']);
});
/*
|--------------------------------------------------------------------------
| Browsesync
|--------------------------------------------------------------------------
|
| BrowserSync and starts a localhost development. Compiled
| files are outputted into `public` directory, so we are
| telling BrowserSync to use it as a base.
|
*/
gulp.task('browser-sync', () => {
    const files = [
        'public/**/*.html',
        'public/css/**/*.css',
        'public/images/**/*',
        'public/js/**/*.js'
    ];

    browserSync({
        files: ['./public/**/*.*'],
        port: 8000,
        server: {
            baseDir: './public/'
        }
    });
});
/*
|--------------------------------------------------------------------------
| default task
|--------------------------------------------------------------------------
*/
gulp.task('default', ['nunjucks', 'stylus', 'javascript', 'images', 'watch', 'browser-sync']);
/*
|--------------------------------------------------------------------------
| deploy
|--------------------------------------------------------------------------
*/
gulp.task('build', ['nunjucks', 'stylus', 'javascript', 'images']);
