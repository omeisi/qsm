var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var simpleVars = require('postcss-simple-vars');
var nestCss = require('postcss-nested');
var postcssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([postcssImport, mixins, simpleVars, nestCss,hexrgba ,autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString())
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});