const test = require('ava');
const isArray = require('lodash.isarray');
const isObject = require('lodash.isobject');

const omitCommonFields = require('../');

const keys = ['underscored', 'camelCased'];

test('returns arrays, strings, and objects for both types', t => {
  keys.forEach(key => {
    t.true(isArray(omitCommonFields[key].keys));
    t.true(typeof omitCommonFields[key].str === 'string');
    t.true(isObject(omitCommonFields[key].obj));
  });
});
