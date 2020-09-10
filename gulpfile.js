const { src, dest } = require('gulp');

function defaultTask(cb) {
    return src('src/*').pipe(dest('dist/'));
  }

function clean(cb) {
    // body omitted
    cb();
  }
  

  function build(cb) {
    // body omitted
    return src('src/*.js')
        .pipe(dest('dist/'))
  }
  
exports.build = build;
exports.default = defaultTask;
//exports.default = series(clean, build);
