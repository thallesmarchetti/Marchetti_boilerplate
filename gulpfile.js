"use strict";

const   browserSync     =   require('browser-sync'),
        babel           =   require('gulp-babel'),
        concat          =   require('gulp-concat'),
        env             =   require('minimist')(process.argv.slice(2)),
        gulp            =   require('gulp'),
        htmlmin         =   require('gulp-htmlmin'),
        imagemin        =   require('gulp-imagemin'),
        message         =   require('./src/message'),
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
    return gulp.src('src/templates/*.html')
        .pipe(plumber())
        .pipe(nunjucksRender({ path: ['src/templates/']}))
        .on('error', message.error('NUNJUCKS: Compilation'))
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
        .on('error', message.error("stylus: building"))
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
        .on('error', message.error("JAVASCRIPT: Bundling"))
        .pipe(uglify())
        .on('error', message.error('JAVASCRIPT: Minification'))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build/js/'))
});
/*
|--------------------------------------------------------------------------
| Images Tasks
|--------------------------------------------------------------------------
*/
gulp.task('images', () => {
    gulp.src('src/img/**/*')
        .pipe(plumber())
        .pipe(imagemin({interlaced: true, progressive: true, optimizationLevel: 2}))
        .on('error', message.error('IMAGE: Minification'))
        .pipe(gulp.dest('build/img'));
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
    gulp.watch('src/templates/**/*.html', ['nunjucks'])
    .on('error', message.error('WATCH: Views'));

    gulp.watch('src/styl/**/*.styl', ['stylus'])
    .on('error', message.error('WATCH: Stylus'));

    gulp.watch('src/js/**/*.js', ['javascript'])
    .on('error', message.error('WATCH: Javascript'));

    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin'])
    .on('error', message.error('WATCH: Images'));
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
      'build/img/**/*',
      'build/js/**/*.js'
   ];

   browserSync({
        files: ['./build/**/*.*'],
        port : 8080,
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
gulp.task('deploy', ['nunjucks', 'javascript', 'stylus', 'images']);
