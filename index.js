'use strict';
var typeCheck = require('type-check').typeCheck;

module.exports = function (input) {
	return {
		is: function (type) {
			var valid;
			var err;

			if (typeof type === 'function') {
				err = input + ' did not pass the test' + (type.name && ' of function `' + type.name + '`');
				valid = type(input);
			} else {
				err = input + ' is not of type ' + type;
				valid = typeCheck(type, input);
			}

			if (!valid) {
				throw new TypeError(err);
			}
		},
		isOptional: function (type) {
			if (input === undefined) {
				return;
			}

			this.is(type);
		}
	};
};
