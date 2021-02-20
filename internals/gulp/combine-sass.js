/**
 * Combine Sass
 *
 * Searches specified path for sass files
 * and then writes out an scss file with
 * `@import` statements for each scss file
 *
 * @author Campbell Morgan <campbellmorgan@gmail.com>, 2016
 *
 * @example
 *
 *  const CombineSass = require('./combineSass');
 *
 *  const combineSass = new CombineSass({
 *    scssFiles: './app/*.scss',
 *  });
 *
 *  // build it once
 *  combineSass.buildFile();
 *
 *  // create a gulp watch
 *  combineSass.watch()
 */

const Glob = require('glob');
const gulp = require('gulp');
const async = require('async');
const gutil = require('gulp-util');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

/**
 * @param {Object} config: {
 *   watch: <boolean> watch for changes in file system
 *   outputFile: <string> file path of generated file
 *   ignored: [<string>, ...] paths of files to ignore
 *   baseDirectory: <string> base path of project
 *   scssFiles: <string> glob compatible with github.com/node-glob
 * }
 */
const CombineSass = function CombineSass(config) {

  console.log(`process.cwd()`,process.cwd());

  const defaults = {
    outputFile: 'sass/autobuild.scss',
    ignore: [],
    baseDirectory: process.cwd(),
    scssFiles: 'app/**/*.scss',
  };

  this.options = Object.assign({}, defaults, config);
};

/**
 * @param {Array} paths of file relative to output
 * @return {String} output template
 */
CombineSass.prototype.composeTemplate = function composeTemplate(paths) {
  const timeStamp = (new Date()).toString();
  const fileContents = `
/**
  * This file is generated automatically by
  * the Combine-Sass webpack plugin
  * DO NOT EDIT
  *
  */
`;

  return _.reduce(
    paths,
    (output, p) => `${output}\n@import '${p}';`,
    fileContents
  );
};

/**
 * Search directory
 * @param {Function} callback (optional)
 * @return {Array|Object}
 */
CombineSass.prototype.searchDir = function searchDir(cb) {

  const globFunc = cb ? _.partialRight(Glob, cb) : Glob.sync;

  return globFunc(this.options.scssFiles,{
    cwd: this.options.baseDirectory,
    absolute: true,
  });
};

/**
 * Assembles template file paths and data
 * @param {Array} glob result files
 * @return {Object}
 */
CombineSass.prototype.assembleTemplate = function assembleTemplate(files) {
  gutil.log(`[CombineSass] Found ${files.length} files`);
  // make paths relative to output file
  const outputFile = path.join(
    this.options.baseDirectory,
    this.options.outputFile
  );

  const absoluteOutputDir = path.dirname(outputFile);

  // filter out output file
  // and any ignored files
  const filtered = files.filter((file) => {
    const ignored = _.map(
      this.options.ignore,
      (f) => path.join(this.options.baseDirectory, f)
    ).concat(outputFile);

    return _.indexOf(ignored, file) === -1;
  });


  const paths = _.map(filtered, (file) =>
    path.relative(absoluteOutputDir, file).replace(/\\/g, '/')
  );

  const template = this.composeTemplate(paths);

  return {
    path: outputFile,
    template,
  }
}

/**
 * Compiles the file
 * from the glob pattern
 */
CombineSass.prototype.buildFile = function buildFile(cb) {

  if(cb) {
    // async
    return async.waterfall([
      // find sass files
      this.searchDir.bind(this),
      // compose the template file
      ((files, callback) => callback(
        null,
        this.assembleTemplate(files)
      )),
      // write the template file
      ((output, callback) => fs.writeFile(
        output.path,
        output.template,
        callback
      )),
    ], cb);
  }
  // sync
  const files = this.searchDir();
  const {path,template} = this.assembleTemplate(files);
  // save the template
  return fs.writeFileSync(path, template);
};

/**
 * Gulp watch callback
 */
CombineSass.prototype.onWatch = function onWatch(event) {
  if (event.type && event.type.match(/(added|deleted)/)) {
    gutil.log(
      `CombineSass: scss file ${event.path} ${event.type} - rebuilding scss`
    ); // eslint-disable-line

    return this.buildFile();
  }
}

/**
 * Executes and returns a gulp watch
 * instance auto-building the scss file
 */
CombineSass.prototype.watch = function watch() {
  return gulp.watch(
    this.options.scssFiles,
    this.onWatch.bind(this)
  );
}

module.exports = CombineSass;
