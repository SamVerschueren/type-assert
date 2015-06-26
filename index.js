'use strict';

/**
 * Type assertion library for NodeJS.
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  27 April 2015
 */

// module dependencies
var util = require('util'),
    typeCheck = require('type-check').typeCheck,
    NestedErrorStacks = require('nested-error-stacks'),
    objectAssign = require('object-assign');

// Create custom TypeAssertError object
function TypeAssertError(message, nested) {
    NestedErrorStacks.call(this, message, nested);
    objectAssign(this, nested, {nested: this.nested});
};

util.inherits(TypeAssertError, NestedErrorStacks);
TypeAssertError.prototype.name = 'TypeAssertError';

module.exports = function(input) {

    return {
        is: function(type) {
            if(!typeCheck(type, input)) {
                throw new TypeAssertError(input + ' is not of type ' + type);
            }
        },
        isOptional: function(type) {
            if(input === undefined) {
                return;
            }

            this.is(type);
        }
    };
};

module.exports.TypeAssertError = TypeAssertError;
