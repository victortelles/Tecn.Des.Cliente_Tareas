const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const copy = require('gulp-copy');
const replace = require('gulp-replace');
const browserSync = require('browser-sync');

const tsc = require('gulp-typescript')

//scripts
gulp.task('scripts', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            target: 'ES6',
            isolatedModules: true,
        }))
        .pipe(remplace(/\sfrom '(\.\/[^']+)'/g," from 'main.js'"))
        .pipe(gulp.dest(dist/scripts));
});

gulp.task('scripts:dev', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            target: 'ES6',
            isolatedModules: true
        }))
        .pipe(remplace(/\sfrom '(\.\/[^']+)'/g," from 'main.js'"))
        .pipe(gulp.dest(dist/scripts));
});

//styles
gulp.task('styles', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('styles:dev', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/styles'));
});

//assets
gulp.task('assets', () => {
    return gulp.src('src/assets/**/*')
        .pipe(copy('dist', { prefix: 1 }))
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('html:dev', () => {
    return gulp.src('src/*.html')
            .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(replace('main.css', 'main.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src', gulp.series('build:dev')).on('change', browserSync.reload);
});

//builds
gulp.task('build:dev', gulp.series('styles:dev', 'scripts:dev', 'assets', 'html:dev'));

gulp.task('default', gulp.series('html','styles','assets','scripts'));