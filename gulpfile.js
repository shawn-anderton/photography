var gulp = require('gulp'),

     server = require('tiny-lr')(),
    refresh = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    notify      = require('gulp-notify');


var paths = {
  html: [
    './client/index.html'
  ]
}



gulp.task('html', function(){
  return gulp.task('html', function(){
    gulp.src('paths.html')
      .pipe(refresh())
      .pipe(notify({message: 'Views refreshed'}));
  });
});

gulp.task('watch', function(){
  gulp.watch(paths.html, ['html']);
});


gulp.task('demon', function () {
  nodemon({
    script: 'server/app.js',
    ext: 'html',
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

// Default Task
gulp.task('default', ['demon']);
