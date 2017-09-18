# mongoose-omit-common-fields

[![build status](https://img.shields.io/travis/ladjs/mongoose-omit-common-fields.svg)](https://travis-ci.org/ladjs/mongoose-omit-common-fields)
[![code coverage](https://img.shields.io/codecov/c/github/ladjs/mongoose-omit-common-fields.svg)](https://codecov.io/gh/ladjs/mongoose-omit-common-fields)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ladjs/mongoose-omit-common-fields.svg)](<>)

> Array of common fields to emit for Mongoose toObject/toJSON (helpful for security)


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [String notation](#string-notation)
  * [Object notation](#object-notation)
  * [Reference](#reference)
* [API](#api)
  * [omitCommonFields.underscored.keys](#omitcommonfieldsunderscoredkeys)
  * [omitCommonFields.underscored.str](#omitcommonfieldsunderscoredstr)
  * [omitCommonFields.underscored.obj](#omitcommonfieldsunderscoredobj)
  * [omitCommonFields.camelCased.keys](#omitcommonfieldscamelcasedkeys)
  * [omitCommonFields.camelCased.str](#omitcommonfieldscamelcasedstr)
  * [omitCommonFields.camelCased.obj](#omitcommonfieldscamelcasedobj)
* [Tips](#tips)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install mongoose-omit-common-fields
```

[yarn][]:

```sh
yarn add mongoose-omit-common-fields
```


## Usage

```js
const mongoose = require('mongoose');
const jsonSelect = require('mongoose-json-select');
const omitCommonFields = require('mongoose-omit-common-fields');

const Schema = new mongoose.Schema();

Schema.plugin(
  jsonSelect,
  // if your database fields are camelCased then
  // you will need to use `omitCommonFields.camelCased` variation
  // (e.g. `omitCommonFields.camelCased.str`)
  omitCommonFields.underscored.str
);
```

### String notation

If you want to add additional keys to be omitted using String notation:

```js
Schema.plugin(
  jsonSelect,
  [
    ...omitCommonFields.underscored.keys.map(key => `-${key}`),
    '-some_other_field',
    '-another_field_to_ignore'
  ].join(' ')
);
```

> For older versions you can use `Array.concat`:

```js
Schema.plugin(
  jsonSelect,
  omitCommonFields.underscored.keys.concat([
    'some_other_field',
    'another_field_to_ignore'
  ]).map(key => `-${key}`).join(' ')
);
```

### Object notation

If you want to add additional keys to be omitted using Object notation:

```js
Schema.plugin(
  jsonSelect,
  Object.assign({}, omitCommonFields.underscored.obj, {
    some_other_fields: 0,
    another_field_to_ignore: 0
  })
);
```

### Reference

For more information on `-` and object notation, please see <http://mongoosejs.com/docs/api.html#query_Query-select>.


## API

### omitCommonFields.underscored.keys

```js
[ '_id',
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
  'google_refresh_token' ]
```

### omitCommonFields.underscored.str

```js
"-_id -__v -ip -last_ips -email -api_token -group -attempts -last -hash -password -salt -reset_token_expires_at -reset_token -google_profile_id -google_access_token -google_refresh_token"
```

### omitCommonFields.underscored.obj

```js
{ _id: 0,
  __v: 0,
  ip: 0,
  last_ips: 0,
  email: 0,
  api_token: 0,
  group: 0,
  attempts: 0,
  last: 0,
  hash: 0,
  password: 0,
  salt: 0,
  reset_token_expires_at: 0,
  reset_token: 0,
  google_profile_id: 0,
  google_access_token: 0,
  google_refresh_token: 0 }
```

### omitCommonFields.camelCased.keys

```js
[ 'id',
  'v',
  'ip',
  'lastIps',
  'email',
  'apiToken',
  'group',
  'attempts',
  'last',
  'hash',
  'password',
  'salt',
  'resetTokenExpiresAt',
  'resetToken',
  'googleProfileId',
  'googleAccessToken',
  'googleRefreshToken' ]
```

### omitCommonFields.camelCased.str

```js
"-id -v -ip -lastIps -email -apiToken -group -attempts -last -hash -password -salt -resetTokenExpiresAt -resetToken -googleProfileId -googleAccessToken -googleRefreshToken"
```

### omitCommonFields.camelCased.obj

```js
{ id: 0,
  v: 0,
  ip: 0,
  lastIps: 0,
  email: 0,
  apiToken: 0,
  group: 0,
  attempts: 0,
  last: 0,
  hash: 0,
  password: 0,
  salt: 0,
  resetTokenExpiresAt: 0,
  resetToken: 0,
  googleProfileId: 0,
  googleAccessToken: 0,
  googleRefreshToken: 0 }
```


## Tips

Note that this package is already built-in to [mongoose-common-plugin][].


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/

[mongoose-common-plugin]: https://github.com/ladjs/mongoose-common-plugin
