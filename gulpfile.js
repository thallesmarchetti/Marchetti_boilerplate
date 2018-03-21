'use strict';

const   browserSync =   require('browser-sync'),
        babel       =   require('gulp-babel'),
        cache       =   require('gulp-cache'),
        concat      =   require('gulp-concat'),
        env         =   require('minimist')(process.argv.slice(2)),
        ghPages     =   require('gulp-gh-pages'),
        gulp        =   require('gulp'),
        gulpif      =   require('gulp-if'),
        gutil       =   require('gulp-util'),
        imagemin    =   require('gulp-imagemin'),
        minifyHtml  =   require('gulp-minify-html'),
        nunjucks    =   require('gulp-nunjucks-html'),
        plumber     =   require('gulp-plumber'),
        stylus      =   require('gulp-stylus'),
        uglify      =   require('gulp-uglify');

// Nunjucks
gulp.task('nunjucks', () => {
    return gulp.src('src/templates/*.html')
        .pipe(plumber())
        .pipe(nunjucks({
            searchPaths: ['src/templates/']
        }))
        .pipe(gulpif(env.p, minifyHtml()))
        .pipe(gulp.dest('build/'));
});

// Stylus
gulp.task('stylus', () => {
    gulp.src('src/styl/main.styl')
    .pipe(plumber())
    .pipe(stylus({compress: true}))
    .pipe(gulp.dest('build/css'));
});

// Uglify and Concat JS
gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build/js/'))
});

// Imagemin
gulp.task('images', () => {
    gulp.src('src/img/**/*')
        .pipe(plumber())
        .pipe(imagemin({interlaced: true, progressive: true, optimizationLevel: 2}))
        .pipe(gulp.dest('build/img'));
});

// Watch
gulp.task('watch', () => {
    gulp.watch('src/templates/**/*.html', ['nunjucks']);
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

// Browsesync
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

// ghpages
gulp.task('pages', () => {
    return gulp.src('./build/**/*')
    .pipe(
        ghPages({
          branch: 'master',
          cacheDir: '.deploy'
        })
      )
});

// default
gulp.task('default', ['nunjucks', 'js', 'stylus', 'images', 'watch', 'browser-sync']);
// deploy-gh
gulp.task('deploy-gh', ['nunjucks', 'js', 'stylus', 'images', 'pages']);
