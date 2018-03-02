var gulp = require('gulp');
var jslint = require('gulp-jslint');
var cleanCSS = require('gulp-clean-css');

gulp.task('jslint',function() {
    return
    gulp.src('js/script.js')
        .pipe(jslint())
        .pipe(jslint.reporter());
});
gulp.task('cleanCSS',function(){
    gulp.src('style/main.css')
               .pipe(cleanCSS())
               .pipe(gulp.dest('dist/style'))
});

gulp.task('default',function(){

});
