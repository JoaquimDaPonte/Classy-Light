'use strict';

let gulp = require( 'gulp' );
let sass = require( 'gulp-sass' )( require( 'sass' ) );
let prefix = require( 'gulp-autoprefixer' );
let notify = require( 'gulp-notify' );
let cleanCSS = require('gulp-clean-css');

gulp.task( 'autoprefixer', () =>
    gulp.src( 'css/main.css' )
        .pipe( prefix( {
            browsers: ['last 2 versions'],
            cascade: false
        } ) )
        .pipe( gulp.dest( 'css' ) )
);
gulp.task( 'minify', () =>
    gulp.src( 'css/main.css' )
        .pipe( cleanCSS( {compatibility: 'ie8'} ) )
        .pipe( gulp.dest( 'css' ) )
);
gulp.task( 'sass', function () {
    return gulp.src( 'core/main.scss' )
        .pipe( sass( {errLogToConsole: false,} ) )
        .on( 'error', function ( err ) {
            notify().write( err );
            this.emit( 'end' );
        } )
        .pipe( gulp.dest( 'css' ) )
        .pipe( notify( {message: 'SCSS Compiled'} ) );
} );

gulp.task( 'default', gulp.series( ['sass', 'autoprefixer', 'minify'], function () {
    gulp.watch( 'core/**/*.scss', gulp.series( ['sass', 'autoprefixer', 'minify'] ) );
} ) );