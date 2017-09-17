const test = require('ava');

const omitCommonFields = require('../');

const keys = ['underscored', 'camelCased'];

test('returns arrays, strings, and objects for both types', t => {
  keys.forEach(key => {
    // console.log(`omitCommonFields.${key}.keys`);
    // console.log(omitCommonFields[key].keys);
    // console.log(`omitCommonFields.${key}.str`);
    // console.log(omitCommonFields[key].str);
    // console.log(`omitCommonFields.${key}.obj`);
    // console.log(omitCommonFields[key].obj);
    t.true(Array.isArray(omitCommonFields[key].keys));
    t.true(typeof omitCommonFields[key].str === 'string');
    t.true(typeof omitCommonFields[key].obj === 'object');
  });
});
