var gulp = require('gulp'),
    less = require('gulp-less'),
    cleanCss = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    changed = require('gulp-changed'),
    include = require('gulp-html-tag-include'),
    rename = require('gulp-rename'),
    // jshint = require('gulp-jshint'),
    replace = require('gulp-replace'),
    zip = require('gulp-zip'),
    gulpif = require('gulp-if'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    injectString = require('gulp-inject-string'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var pkg = require('./package.json');
var basePath = 'src/';
var outPath = 'dist/';
var backupPath = 'backup/';

/**
    isCommon：是否属于公共文件，默认false
    isRelease：是否为发布环境，默认false
*/
var isCommon = false, isRelease = false;
var version = '20160719';

/*错误提示*/
function errorHandler(){
    var arges = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile error',
        message: '<%=error.message %>'
    }).apply(this, args); //替换为当前对象
    this.emit(); //提交
}

/*html*/
gulp.task('html',function(){
    return gulp.src(basePath + 'view/*.html')
        .pipe(gulpif(!isCommon,changed(outPath + '*.html')))
        .pipe(replace('{include}','module'))
        .pipe(include()).on('error',errorHandler)
        .pipe(replace('{version}',version))
        .pipe(gulp.dest(outPath))
        .pipe(gulpif(isRelease,livereload()));
});

/*less*/
gulp.task('less',function(){
    return gulp.src(basePath + 'less/*.less')
        .pipe(changed(outPath + 'css'))
        .pipe(less()).on('error',errorHandler)
        .pipe(gulp.dest(outPath + 'css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(outPath + 'css'))
        .pipe(gulpif(isRelease,livereload()));
});

/*js*/
gulp.task('js',function(){
    return gulp.src(basePath + 'js/*.js')
        // .pipe(jshint())
        // .pipe(jshint.reporter())
        // .pipe(jshint.reporter('fail')).on('error',errorHandler)
        .pipe(changed(outPath + 'js'))
        .pipe(gulp.dest(outPath + 'js'))
        .pipe(gulpif(isRelease,livereload()));
});

/*script*/
gulp.task('script',function(){
    return gulp.src(basePath + 'script/*.js')
        .pipe(changed(outPath + 'js'))
        .pipe(gulp.dest(outPath + 'js'))
        .pipe(gulpif(isRelease,livereload()));
});

/*img*/
gulp.task('img',function(){
    return gulp.src(basePath + '/img/**')
        .pipe(changed(outPath + '/img'))
        .pipe(gulp.dest(outPath + '/img'))
        .pipe(gulpif(isRelease,livereload()));
});

/*font*/
gulp.task('fonts',function(){
    return gulp.src(basePath + 'fonts/**')
        .pipe(changed(outPath + 'fonts'))
        .pipe(gulp.dest(outPath + 'fonts'))
        .pipe(gulpif(isRelease,livereload()));
});

/*监听*/
gulp.task('watch',function(){
    livereload.listen();

    //监听html
    gulp.watch(basePath + 'view/*html',function(){
        isCommon = false;
        gulp.run(['html']);
    });
    gulp.watch(basePath + 'view/module/*.html',function(){
        isCommon = true;
        gulp.run(['html']);
    });

    //监听less
    gulp.watch([basePath + 'less/' + '*.less',basePath + 'less/module/*.less'],['less']);  

    //js
    gulp.watch(basePath + 'js/*.js',['js']);

    //监听script
    gulp.watch(basePath + 'script/*.js',['script']);

    //监听img
    gulp.watch(basePath + 'img/**',['img']);

    //监听fonts
    gulp.watch(basePath + 'fonts/**',['fonts']);

    //监听sound
    gulp.watch(basePath + 'sound/**',['sound']);

});

/*清除*/
gulp.task('clean',function(){
    return gulp.src(outPath,{read:false})
        .pipe(clean());
});

/*开发环境*/
gulp.task('build',['clean'],function(){
    isRelease = false;
    gulp.run(['html','less','js','script','img','fonts','watch'],function(){
        console.log("\n\tCompile complete！Watching……\n");
    });
});

/*生产环境*/
gulp.task('release',['clean'],function(){
    isRelease = true;
    gulp.run(['html','less','js','script','img','fonts'],function(){
        console.log("\n\tCompile complete！Watching……\n");
    });
});

/*default*/
gulp.task('default',function(){
    console.log("gulp-build ：开发环境");
    console.log("gulp-release ：生产环境");
});

/*项目备份*/
gulp.task('backup',function(){
    gulp.src(basePath+'**/*')
        .pipe(zip(pkg.name))
        .pipe(gulp.dest(backupPath));
});