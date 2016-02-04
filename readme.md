# type-assert [![Build Status](https://travis-ci.org/SamVerschueren/type-assert.svg?branch=master)](https://travis-ci.org/SamVerschueren/type-assert)

> Type assertion library for NodeJS.


## Installation

```
npm install --save type-assert
```


## Usage

```javascript
const assert = require('type-assert');

function foo(id, msg, active) {
	assert(id).is('Number');
	assert(msg).is('String');
	assert(active).isOptional('Boolean');
}

try {
	foo(5, 5);
} catch (err) {
	console.error(err.message);
	//=> 5 is not of type String
}
```


## API

### is(type)

Throw `TypeError` if the input is not of type `type`.

### isOptional(type)

Throw `TypeError` if the input is not of type `type`, only if the input is provided.

#### type

Type: `string`

The [`type-check`](https://github.com/gkz/type-check) type.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
