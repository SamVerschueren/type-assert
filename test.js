'use strict';

// module dependencies
var chai = require('chai'),
    assert = require('./');

chai.should();

describe('type-assert', function() {

    function fn(id) {
        assert(id).is('Number');
    }

    it('Should throw an error if the type is not correct', function() {
        (function() {
            fn('hello');
        }).should.throw(Error);
    });

    it('Should not throw an error if the type is not correct', function() {
        (function() {
            fn(5);
        }).should.not.throw(Error);
    });
});
