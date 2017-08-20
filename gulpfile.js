//  //////////////////////////////////////////
//  -----------------REQUIRED-----------------
//  //////////////////////////////////////////


var gulp = require('gulp');							//gulp init
var sass = require('gulp-sass');					//sass init
var browserSync = require('browser-sync').create();	//browser-sync init
var useref = require('gulp-useref');				//useref init
var uglify = require('gulp-uglify');				//uglify init
var gulpIf = require('gulp-if');					//IF init
var cssnano = require('gulp-cssnano');				//cssnano init
var imagemin = require('gulp-imagemin');			//imagemin init
var cache = require('gulp-cache'); 					//cache init
var del = require('del');							//del init
var runSequence = require('run-sequence');			//run-seq init
var bourbon = require('node-bourbon');				//bourbon init

//  //////////////////////////////////////////
//  ------------------TASKS-------------------
//  //////////////////////////////////////////


// SAAS task
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({
		includePaths: require('node-normalize-scss').includePaths
	}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


//Browser Sync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


//Useref task
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
	// Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});


//Imagemin task
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});


//Moving font files task
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


//Delete task
gulp.task('clean:dist', function() {
  return del.sync('dist');
})


//Build task

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images', 'fonts'],
    callback
  )
})


//  //////////////////////////////////////////
//  ------------------WATCH-------------------
//  //////////////////////////////////////////

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
