'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ts:cli', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/cli'));
  });

  it('creates files', () => {
    assert.file(['bin/cli.js']);
  });
});
