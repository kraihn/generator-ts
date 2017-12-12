'use strict';
const _ = require('lodash');
const extend = _.merge;
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('generateInto', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Relocate the location of the generated files.'
    });
  }

  writing() {
    const pkg = this.fs.readJSON(
      this.destinationPath(this.options.generateInto, 'package.json'),
      {}
    );

    extend(pkg, {
      bin: 'bin/cli.js',
      dependencies: {
        meow: '^3.7.0'
      }
    });

    this.fs.writeJSON(
      this.destinationPath(this.options.generateInto, 'package.json'),
      pkg
    );

    this.fs.copyTpl(
      this.templatePath('cli.js'),
      this.destinationPath(this.options.generateInto, 'bin/cli.js'),
      {
        pkgName: pkg.name,
        pkgSafeName: _.camelCase(pkg.name)
      }
    );
  }
};
