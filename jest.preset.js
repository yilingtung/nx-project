const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  moduleNameMapper: { '^.+\\.svg$': 'jest-svg-transformer' },
};
