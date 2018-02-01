var gulp = require('gulp');
	browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});
});


gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('src/css/main.css', browserSync.reload);
	gulp.watch('src/index.html', browserSync.reload);
	gulp.watch('src/js/main.js', browserSync.reload);
});

gulp.task('default', ['watch']);