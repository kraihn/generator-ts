'use strict';
const Generator = require('yeoman-generator');
const rootPkg = require('../../package.json');

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
    const pkgJson = {
      devDependencies: {
        tslint: '^5.8.0',
        husky: rootPkg.devDependencies.husky,
        'lint-staged': rootPkg.devDependencies['lint-staged']
      },
      'lint-staged': {
        '*.ts': ['tslint --autofix', 'git add']
      },
      scripts: {
        pretest: 'tslint',
        precommit: rootPkg.scripts.precommit,
        lint: 'tslint'
      }
    };

    this.fs.extendJSON(
      this.destinationPath(this.options.generateInto, 'package.json'),
      pkgJson
    );

    this.fs.copy(
      this.templatePath('tslint.json'),
      this.destinationPath(this.options.generateInto, 'tslint.json')
    );
  }
};
