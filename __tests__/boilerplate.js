'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ts:boilerplate', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/boilerplate'));
  });

  it('creates files', () => {
    assert.file(['.gitignore', 'tsconfig.json', 'src/index.ts']);
  });
});
