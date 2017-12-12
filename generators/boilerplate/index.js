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
      default: '',
      desc: 'Relocate the location of the generated files.'
    });
  }

  writing() {
    const pkg = this.fs.readJSON(
      this.destinationPath(this.options.generateInto, 'package.json'),
      {}
    );

    extend(pkg, {
      devDependencies: {
        '@types/node': '^8.0.47',
        'ts-node': '^3.3.0',
        typescript: '^2.5.3'
      },
      scripts: {
        build: 'tsc',
        watch: 'tsc -w'
      }
    });

    this.fs.writeJSON(
      this.destinationPath(this.options.generateInto, 'package.json'),
      pkg
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath(this.options.generateInto, '.gitignore')
    );
    this.fs.copy(
      this.templatePath('env.example'),
      this.destinationPath(this.options.generateInto, '.env.example')
    );
    this.fs.copy(
      this.templatePath('index.ts'),
      this.destinationPath(this.options.generateInto, 'src/index.ts')
    );
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath(this.options.generateInto, 'tsconfig.json')
    );
  }
};
