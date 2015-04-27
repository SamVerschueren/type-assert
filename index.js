'use strict';

/**
 * Type assertion library for JavaScript.
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  27 April 2015
 */

// module dependencies
var typeCheck = require('type-check').typeCheck;

module.exports = function(input) {

    return {
        is: function(type) {
            if(!typeCheck(type, input)) {
                throw new Error(input + ' is not of type ' + type);
            }
        }
    };
};
