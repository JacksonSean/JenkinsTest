/*
Authors: Sean Jackson, Alex Barganier, Grant Dever
Date: 6/24/15
*/

var gulp = require('gulp-help')(require('gulp'));
/* bytediff tells us the before&after size of minified files */
var bytediff = require('gulp-bytediff');
var browserSync = require('browser-sync');
var cdnizer = require("gulp-cdnizer");
var changed = require('gulp-changed');
var concat = require('gulp-concat');
/* csso minifies CSS */
var csso = require('gulp-csso');
var debug = require('gulp-debug');
var del = require('del');
var gutil = require('gulp-util');
var inject = require("gulp-inject");
var jshint = require('gulp-jshint');
var karma = require('karma').server;
var less = require('gulp-less');
var merge = require('merge-stream');
var minifyHtml = require("gulp-minify-html");
var ngAnnotate = require('gulp-ng-annotate');
var ngHtml2Js = require("gulp-ng-html2js");
/* If plumber is passed into a steam of files
 * it will allow the stream to continue even if 
 * one of the `pipe()`'d in tasks fail, and 
 * output the error to console. */
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var confirm = require('gulp-confirm');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('jshint-stylish');
var uglify = require("gulp-uglify");
var vinylPaths = require('vinyl-paths');
var watch = require('gulp-watch');
var wrap = require("gulp-wrap");

/* require package.json and our build configuration. */
var pkg = require('./package.json');
var config = require('./gulpbuild.config.js');


/* Here we list the naming convention for our minified JS/CSS files. */
var prodFileName = pkg.name + '-' + pkg.version;

var prodOutputFiles = {
    js: prodFileName + '.min.js',
    css: prodFileName + '.css'
};


var jenkins = require('gulp-jenkins');
 
jenkins.init({
  username: 'admin',
  password: 'pass',
  url: 'http://localhost:8080'
});

gulp.task('jenk', function() {
  return gulp.src('./*')
    .pipe(jenkins.build('Test', {
      target_env: 'prod',
      tag_name: 'tags/v0.07/trunk'
    }));
});