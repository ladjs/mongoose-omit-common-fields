const camelCase = require('camelcase');

const keys = [
  '_id',
  '__v',
  'ip',
  'last_ips',
  'email',
  'api_token',
  'group',
  'attempts',
  'last',
  'hash',
  'password',
  'salt',
  'reset_token_expires_at',
  'reset_token',
  'google_profile_id',
  'google_access_token',
  'google_refresh_token'
];

// TODO: we cannot use the following shorthand line due to this bug:
// <https://github.com/sindresorhus/camelcase/issues/28>
// const camelCasedKeys = keys.map(camelCase);

const camelCasedKeys = keys.map(key => camelCase(key));

module.exports = {
  underscored: {
    keys,
    str: keys.map(key => `-${key}`).join(' '),
    obj: Object.assign({}, ...keys.map(key => ({ [key]: 0 })))
  },
  camelCased: {
    keys: camelCasedKeys,
    str: camelCasedKeys.map(key => `-${key}`).join(' '),
    obj: Object.assign({}, ...camelCasedKeys.map(key => ({ [key]: 0 })))
  }
};
