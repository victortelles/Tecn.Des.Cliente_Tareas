//Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const copy = require('gulp-copy');
const replace = require('gulp-replace');
//BrowserSync
const browserSync = require('browser-sync');
//Typescript
const tsc = require('gulp-typescript');
//cpx
const { exec } = require('child_process');

//scripts
gulp.task('scripts', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            moduleResolution: 'node',
            target: 'ES6',
            isolatedModules: true,
            esModuleInterop: true,
            strict: true
        }))
        .pipe(replace(/\sfrom '(\.\/[^']+)'/g," from 'index.js'"))
        .pipe(gulp.dest("dist/scripts"));
});

gulp.task('scripts:dev', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            moduleResolution: "node",
            target: 'ES6',
            isolatedModules: true,
            esModuleInterop: true,
            strict: true
        }))
        .pipe(replace(/\sfrom '(\.\/[^']+)'/g," from 'index.js'"))
        .pipe(gulp.dest("dist/scripts"));
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
gulp.task('assets', (done) => {
    exec('cpx "src/assets/**/*.{jpg,jpeg,png,gif,svg,mp3,mp4,mov}" "dist/assets"', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${stderr}`);
            done(err);
        } else {
            console.log(`Output: ${stdout}`);
            done();
        }
    });
    //return gulp.src('src/assets/**/*.{jpg,jpeg,png,gif,svg}')
        //.pipe(copy('dist', { prefix: 1 }))
        //.pipe(gulp.dest('dist/assets'));
});

//HTML
gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(replace('./assets/', 'assets/'))
        .pipe(replace('main.css', 'main.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('html:dev', () => {
    return gulp.src('src/*.html')
            .pipe(gulp.dest('dist'));
});

//server para dev
gulp.task('server:dev', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src/**/*.html', gulp.series('html:dev')).on('change', browserSync.reload);
    gulp.watch('src/sass/**/*.scss', gulp.series('styles:dev')).on('change', browserSync.reload);
    gulp.watch('src/scripts/**/*.ts', gulp.series('scripts:dev')).on('change', browserSync.reload);
    gulp.watch('src/assets/**/*', gulp.series('build:dev')).on('change', browserSync.reload);
});

//builds
gulp.task('build:dev', gulp.series('html:dev','styles:dev', 'scripts:dev', 'assets','server:dev'));

gulp.task('default', gulp.series('html','styles','assets','scripts', (done) => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    done();
}));