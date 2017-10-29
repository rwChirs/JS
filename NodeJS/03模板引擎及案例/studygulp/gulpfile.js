

var gulp = require('gulp');

var less = require('gulp-less');

var concat = require('gulp-concat');

// 可以将压缩CSS作为一个任务
// 也可以将 LESS转成 CSS 当成一个任务
// 也可以将 JS 进行合并当成一个任务

// 将LESS转成CSS
gulp.task('less2css',function(){

      // 只要将任务执行就可以实现
      console.log('css 转换成功');

      // 通过 gulp.src 指定需要将哪些资源进行转换（路径）
      
      // 通过模块 gulp-less 来实现真正的转换
      gulp.src('./less/*.less').pipe( less() ).pipe( gulp.dest('./css') );
      // pipe管子的意思
      // 具体解释：gulp通过src找到('./less/*.less')这些资源，通过管子传给了（less()），less通过这些资源进行转换，转换完毕后打包装存起来dest，存到 当前下的css下


})

// 合并JS
gulp.task('hebing', function() {

      // 通过 gulp.src 指定需要合并的资源（路径）

      // 通过模块 gulp-concat 可以实现 js 的合并 （需要传一个参数，告诉它合并后叫什么名字，如a.js）
      gulp.src('./libs/*.js').pipe( concat('a.js') ).pipe( gulp.dest('./js') );

})

// 通过全局安装的 gulp来执行任务
// 




