'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ts:editorconfig', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/editorconfig'));
  });

  it('creates files', () => {
    assert.file(['.editorconfig']);
  });
});
