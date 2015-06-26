'use strict';

// module dependencies
var chai = require('chai'),
    assert = require('./');

chai.should();

describe('type-assert', function() {

    function fn(id) {
        assert(id).is('Number');
    }

    function fnOptional(id) {
        assert(id).isOptional('Number');
    }

    it('Should throw an error if the type is not correct', function() {
        (function() {
            fn('hello');
        }).should.throw(Error);
    });
    
    it('Should throw a TypeAssertError if the type is not correct', function() {
        (function() {
            fn('hello');
        }).should.throw(assert.TypeAssertError);
    });

    it('Should not throw an error if the type is not correct', function() {
        (function() {
            fn(5);
        }).should.not.throw(assert.TypeAssertError);
    });

    it('Should not throw an error if the parameter is optional and the parameter is undefined', function() {
        (function() {
            fnOptional();
        }).should.not.throw(assert.TypeAssertError);
    });

    it('Should throw an error if the parameter is optional but the type is not correct', function() {
        (function() {
            fnOptional('hello');
        }).should.throw(assert.TypeAssertError);
    });
});
