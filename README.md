# type-assert

[![Build Status](http://img.shields.io/travis/SamVerschueren/type-assert.svg)](https://travis-ci.org/SamVerschueren/type-assert)

> Type assertion library for NodeJS.

## Installation

```bash
npm install --save type-assert
```

## Usage

```JavaScript
var assert = require('type-assert');

module.exports = function(id, msg, active) {
    assert(id).is('Number');
    assert(msg).is('String');
    assert(active).isOptional('Boolean')

    // Do the usual
}
```

If `id` or `msg` is not the correct type, it will throw an error. Because the `active` property is
optional, it will only check the type if the value is not `undefined`.

The error that is thrown is of the type `TypeAssertionError`.

## Related

It uses [`type-check`](https://www.npmjs.com/package/type-check) as core library to do the asserts.

## Author

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren
