'use strict';
var typeCheck = require('type-check').typeCheck;

module.exports = function (input) {
	return {
		is: function (type) {
			if (!typeCheck(type, input)) {
				throw new TypeError(input + ' is not of type ' + type);
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
