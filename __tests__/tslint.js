'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ts:tslint', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/tslint'));
  });

  it('creates files', () => {
    assert.file(['tslint.json']);
  });
});
