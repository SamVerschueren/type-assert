import test from 'ava';
import m from './';

const fn = function (id) {
	m(id).is('Number');
};

const fnOptional = function (id) {
	m(id).isOptional('Number');
};

test('throw error if type is incorrect', t => {
	t.throws(fn.bind(undefined, 'foo'), TypeError);
});

test('not throws error if type is correct', t => {
	t.doesNotThrow(fn.bind(undefined, 5));
});

test('not throws error if parameter is optional and not provided', t => {
	t.doesNotThrow(fnOptional.bind());
});

test('throw error if parameter is optional and type is incorrect', t => {
	t.throws(fnOptional.bind(undefined, 'foo'), 'foo is not of type Number');
});
