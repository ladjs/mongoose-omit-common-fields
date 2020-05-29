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
  'login_attempts',
  'last',
  'last_login_at',
  'hash',
  'password',
  'salt',
  'reset_token_expires_at',
  'reset_token',
  'google_profile_id',
  'google_access_token',
  'google_refresh_token'
];

const camelCasedKeys = keys.map((key) => camelCase(key));

module.exports = {
  underscored: {
    keys,
    str: keys.map((key) => `-${key}`).join(' '),
    obj: Object.assign({}, ...keys.map((key) => ({ [key]: 0 }))),
    // for use with mongoose-hidden
    objTrue: Object.assign({}, ...keys.map((key) => ({ [key]: true })))
  },
  camelCased: {
    keys: camelCasedKeys,
    str: camelCasedKeys.map((key) => `-${key}`).join(' '),
    obj: Object.assign({}, ...camelCasedKeys.map((key) => ({ [key]: 0 }))),
    // for use with mongoose-hidden
    objTrue: Object.assign(
      {},
      ...camelCasedKeys.map((key) => ({ [key]: true }))
    )
  }
};
