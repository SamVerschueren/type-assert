# type-assert

> Type assertion library for NodeJS.

## Installation

```bash
npm install --save type-assert
```

## Usage

```JavaScript
var assert = require('type-assert');

module.exports = function(id, msg) {
    assert(id).is('Number');
    assert(msg).is('String');

    // Do the usual
}
```

If ```id``` or ```msg``` is not of the correct type, it will throw an error.

## Related

It uses [`type-check`](https://www.npmjs.com/package/type-check) as core library to do the asserts.

## Author

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren
