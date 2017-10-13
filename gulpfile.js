var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var configs = {
    watch: {
        css: 'css/*.css',
        html: 'index.html',
        scripts: 'scripts/*.js'
    }
};

gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch([configs.watch.html, configs.watch.css]).on('change', browserSync.reload)
});
