var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var processhtml = require('gulp-processhtml');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
var ngTemplate = require('gulp-ng-template');
var version = require('gulp-version-number');
var compress = require('compression');
var path = require('path');
var swPrecache = require('sw-precache');
var rename = require('gulp-rename');


//Task to build minified version for deployment
gulp.task('build-dev', function(callback) {
    runSequence('x_minifyTemplates', 'clean', 'x_copyStatic', 'x_devEnvVars', 'x_concatUglify', 'x_resetTemplates', 'x_generateSW', callback);
});

//Task to build for staging
gulp.task('build-stg', function(callback) {
    runSequence('x_minifyTemplates', 'clean', 'x_copyStatic', 'x_stgEnvVars', 'x_concatUglify', 'x_resetTemplates', 'x_generateSW', callback);
});

//Task to build for prdocution
gulp.task('build-prod', function(callback) {
    runSequence('x_minifyTemplates', 'clean', 'x_copyStatic', 'x_prodEnvVars', 'x_concatUglify', 'x_resetTemplates', 'x_generateSW', callback);
});

//Task to clean build folder
gulp.task('clean', function() {
    del.sync(['WebContent/resources/',
        'WebContent/index.html',
        'WebContent/manifest.json',
        'WebContent/sw.js',
        'WebContent/icon.*.*',
    ]);
});

// task for serving during development
gulp.task('debug', function() {
    browserSync.init({
        server: {
            baseDir: 'WebContentSrc',
            middleware: [historyApiFallback(), compress()]
        },
        port: 80,
        files: ['WebContentSrc/**/*.html', 'WebContentSrc/**/*.js', 'WebContentSrc/**/*.css']
    });
});









// Internal tasks for build

gulp.task('x_minifyTemplates', function() {
    return gulp.src('WebContentSrc/resources/app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true, conservativeCollapse: true }))
        .pipe(ngTemplate({
            moduleName: 'selfcare',
            filePath: 'app.run.templates.js',
            prefix: 'resources/app/'
        }))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('WebContentSrc/resources/app/config/'));
});

gulp.task('x_copyStatic', function() {
    gulp.src('WebContentSrc/resources/assets/images/*.*')
        .pipe(gulp.dest('WebContent/resources/assets/images/'));

    gulp.src('WebContentSrc/resources/assets/static/**/*.*')
        .pipe(gulp.dest('WebContent/resources/assets/static/'));

    gulp.src('WebContentSrc/resources/error/*.*')
        .pipe(gulp.dest('WebContent/resources/error/'));

    gulp.src('WebContentSrc/resources/mockData/*.*')
        .pipe(gulp.dest('WebContent/resources/mockData/'));

    gulp.src('WebContentSrc/resources/assets/fonts/*.*')
        .pipe(gulp.dest('WebContent/resources/fonts/'));

    gulp.src('WebContentSrc/manifest.json')
        .pipe(gulp.dest('WebContent/'));

    return gulp.src('WebContentSrc/icon.*.*')
        .pipe(gulp.dest('WebContent/'));
});

gulp.task('x_concatUglify', function() {
    return gulp.src('WebContentSrc/index.html')
        .pipe(useref())
        .pipe(gulpIf('index.html', processhtml({})))
        // .pipe(gulpIf('index.html', version({
        //     'value': '%MDS%',
        //     'append': {
        //         'key': 'v',
        //         'to': ['css', 'js'],
        //     },
        // })))
        .pipe(gulpIf('index.html', htmlmin({ collapseWhitespace: true, conservativeCollapse: true, minifyCSS: true, removeComments: true })))
        .pipe(gulpIf('*/assets/js/app.min.js', babel({
            presets: ['es2015'],
            compact: false
        })))
        .pipe(gulpIf('*.js', uglify()))
        // .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('WebContent'));
});

gulp.task('x_resetTemplates', function() {
    return gulp.src('WebContentSrc/resources/app/config/backup/app.run.templates.js')
        .pipe(gulp.dest('WebContentSrc/resources/app/config/'));
});


gulp.task('x_generateSW', function() {

    let options = {
        cacheId: 'selfcare',
        staticFileGlobs: [
            'WebContent/' + '/**/*.{html,js,css,png,jpg,jpeg,json,woff2}',
        ],
        runtimeCaching: [{
            urlPattern: /.*fonts\.gstatic\.com.*/,
            handler: 'cacheFirst'
        }, {
            urlPattern: /.*fonts\.googleapis\.com.*/,
            handler: 'cacheFirst'
        }],
        navigateFallback: '/usc/index.html',
        replacePrefix: '/usc/',
        stripPrefix: 'WebContent/'
    }

    let outPath = path.join('WebContent/', 'sw.js');


    return swPrecache.write(outPath, options, () => {})
        .then(function() {
            return gulp.src('WebContent/sw.js')
                .pipe(uglify())
                .pipe(gulp.dest('WebContent/'));
        });
});


gulp.task('x_devEnvVars', function(){
    return gulp.src('WebContentSrc/resources/ENV_VARS_DEV.js')
        .pipe(rename('ENV_VARS.js'))
        .pipe(uglify())
        .pipe(gulp.dest('WebContent/resources/'));
})

gulp.task('x_stgEnvVars', function(){
    return gulp.src('WebContentSrc/resources/ENV_VARS_STG.js')
        .pipe(rename('ENV_VARS.js'))
        .pipe(uglify())
        .pipe(gulp.dest('WebContent/resources/'));
})

gulp.task('x_prodEnvVars', function(){
    return gulp.src('WebContentSrc/resources/ENV_VARS_PROD.js')
        .pipe(rename('ENV_VARS.js'))
        .pipe(uglify())
        .pipe(gulp.dest('WebContent/resources/'));
})