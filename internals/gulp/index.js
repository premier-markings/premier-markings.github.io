/**
 * Main project gulpfile
 */

const gulp = require('gulp');
const path = require('path');

const SvgSymbols = require('./svg-symbols');
const UpdateHtml = require('./update-html');
const CopyImgs = require('./copy-imgs');
const Style = require('./style');
const Autoprefixer = require('./autoprefixer');
const MinifyCss = require('./minify-css');
const CombineSass = require('./combine-sass.js');

const BASE = path.resolve(__dirname + '/../..');

const paths = {
  sass: `${BASE}/sass/**/*.scss`,
  sassEntry: `${BASE}/sass/autobuild.scss`,
  appSass: `${BASE}/app/**/*.scss`,
  svgs: `${BASE}/assets/svg/*.svg`,
  symbols: `${BASE}/assets/svg-symbols.html`,
  imgs: `${BASE}/assets/imgs/**/*`,
  imgsDest:`${BASE}/build/assets/imgs`,
  buildCss: `${BASE}/build/main.css`,
  html: `${BASE}/app/index.html`,
  build: `${BASE}/build`,
  assets: `${BASE}/assets/`,
};

gulp.task('svg-symbols', SvgSymbols({src:paths.svgs,dest:paths.assets}));
gulp.task('update-html', ['svg-symbols'], UpdateHtml({src:paths.symbols,dest:paths.html}));
gulp.task('copy-imgs', CopyImgs({src:paths.imgs,dest:paths.imgsDest}));
gulp.task('style', Style({src:paths.sassEntry,dest:paths.build}));
gulp.task('autoprefixer', ['style'], Autoprefixer({src:paths.buildCss,dest:paths.build}));
gulp.task('minify-css', ['autoprefixer'], MinifyCss({src:paths.buildCss,dest:paths.build}));

gulp.task('watch', () => {
  gulp.watch(paths.symbols, ['update-html']);
  gulp.watch(paths.imgs, ['copy-imgs']);
  gulp.watch(paths.sass, ['autoprefixer']);
  gulp.watch(paths.appSass, ['style']);
});

(new CombineSass({baseDirectory:BASE})).buildFile();

gulp.task('default', [
  'svg-symbols',
  'update-html',
  'copy-imgs',
  'style',
  'autoprefixer',
  'watch',
]);

gulp.task('prod',[
  'update-html',
  'copy-imgs',
  'minify-css',
]);
