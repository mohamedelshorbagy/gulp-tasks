const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoPrefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const less = require('gulp-less');
var LessAutoPrefixer = require('less-plugin-autoprefix');
var lessPrefixer = new LessAutoPrefixer({
	browsers:['last 2 versions']
});




/*
	# Gulp Tasks
		- Message : Test Task
		- images : Minify Images with Lossely Algorithm
		- styles : Autoprefix styles in css
		- scripts : Minify Js Files
		- default : Run All Tasks


*/
// Test Task
gulp.task('test' , () => {
	console.log('Test Task');
});



// Optimizing Images Task

gulp.task('images' , function() {

	return gulp.src('src/images/*')
		.pipe(imagemin(
			[
				imagemin.gifsicle(),
				imagemin.jpegtran(),
				imagemin.optipng(),
				imagemin.svgo(),
				imageminPngquant(),
				imageminJpegRecompress()
			]
		))
		.pipe(gulp.dest('dist/images'))

})

// Optimizing CSS Task

gulp.task('styles' , function() {
	gulp.src('src/css/*.css')
		.pipe(concat('styles.css'))
		.pipe(autoPrefixer())
		.pipe(minifyCss())
		.pipe(cleanCss({debug: true}, (details) => {
			console.log(details.name + ' ->  Original ' + ': ' + details.stats.originalSize);
			console.log(details.name + ' -> Minified ' + ': ' + details.stats.minifiedSize);
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('dist/css'))

})


// Sass Task

gulp.task('sass',function() {

	gulp.src('src/scss/*.scss')
		.pipe(autoPrefixer())
		.pipe(sass())
		.pipe(gulp.dest('dist/scss'))

})


// Less Task

gulp.task('less',function() {
	gulp.src('src/less/*.less')
		.pipe(less({
			plugins:[lessPrefixer]
		}))
		.pipe(autoPrefixer())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/less'))
})





// Optimizing JS Task
gulp.task('scripts' , function() {
	return gulp.src('src/js/*.js')
		   .pipe(uglify())
		   .pipe(rename({ extname: 'min.js' }))
		   .pipe(gulp.dest('dist/js'))
})

// Gulp Default Tasks 
gulp.task('default', ['test','images','styles','scripts','sass','less']);


// Watch Mode Task
gulp.task('watch',function() {
	console.log('Gulp is Watching Files and Execute the Following Tasks [ scripts , styles , sass , less ]');
	gulp.watch('src/js/**/*.js',['scripts']);
	gulp.watch('src/css/**/*.css',['styles']);
	gulp.watch('src/scss/**/*.scss',['sass']);
	gulp.watch('src/less/**/*.less',['less']);

})



