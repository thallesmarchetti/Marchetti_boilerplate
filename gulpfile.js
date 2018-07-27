'use strict';

const   browserSync     =   require('browser-sync'),
        babel           =   require('gulp-babel'),
        concat          =   require('gulp-concat'),
        env             =   require('minimist')(process.argv.slice(2)),
        gulp            =   require('gulp'),
        htmlmin         =   require('gulp-htmlmin'),
        imagemin        =   require('gulp-imagemin'),
        nunjucksRender  =   require('gulp-nunjucks-render'),
        plumber         =   require('gulp-plumber'),
        stylus          =   require('gulp-stylus'),
        uglify          =   require('gulp-uglify');
/*
|--------------------------------------------------------------------------
| Nunjucks Tasks
|--------------------------------------------------------------------------
*/
gulp.task('nunjucks', () => {
    return gulp.src('src/*.html')
        .pipe(plumber())
        .pipe(nunjucksRender({ path: ['src/templates/']}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/'));
});
/*
|--------------------------------------------------------------------------
| Stylus Tasks
|--------------------------------------------------------------------------
*/
gulp.task('stylus', () => {
    gulp.src("src/styl/main.styl")
        .pipe(plumber())
        .pipe(stylus({compress: true }))
        .pipe(gulp.dest("build/css"));
});
/*
|--------------------------------------------------------------------------
| Uglify and Concat JS
|--------------------------------------------------------------------------
*/
gulp.task('javascript', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build/js/'))
});
/*
|--------------------------------------------------------------------------
| Images Tasks
|--------------------------------------------------------------------------
*/
gulp.task('images', () => {
    gulp.src('src/images/**/*')
        .pipe(plumber())
        .pipe(imagemin({interlaced: true, progressive: true, optimizationLevel: 2}))
        .pipe(gulp.dest('build/images'));
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
    gulp.watch('src/**/*.html', ['nunjucks']);
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['javascript']);
    gulp.watch('src/images/**/*.{jpg,png,gif}', ['imagemin']);
});
/*
|--------------------------------------------------------------------------
| Browsesync
|--------------------------------------------------------------------------
|
| BrowserSync and starts a localhost development. Compiled
| files are outputted into `build` directory, so we are
| telling BrowserSync to to use it as a base.
|
*/
gulp.task('browser-sync', () => {
   let files = [
      'build/**/*.html',
      'build/css/**/*.css',
      'build/images/**/*',
      'build/js/**/*.js'
   ];

   browserSync({
        files: ['./build/**/*.*'],
        port : 8000,
        server: {
            baseDir: './build/'
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
