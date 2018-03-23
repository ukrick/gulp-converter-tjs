var gulp = require('gulp');
var converterTjs = require('./src/converter-tjs-transform.js');

gulp.task('default', function () {
  // gulp.src('./test/files/haarcascade_fullbody.xml')
  //   .pipe(converterTjs())
  //   .pipe(gulp.dest('./out'));

  // gulp.src('./test/files/haarcascade_upperbody.xml')
  //   .pipe(converterTjs())
  //   .pipe(gulp.dest('./out'));

  gulp.src('./test/files/haarcascade_licence_plate_rus_16stages.xml')
    .pipe(converterTjs())
    .pipe(gulp.dest('./out'));
});
