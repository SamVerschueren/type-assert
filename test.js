import test from 'ava';
import m from './';

function fn(input, optional) {
	if (optional) {
		m(input).isOptional('Number');
	} else {
		m(input).is('Number');
	}
}

function biggerThenTen(x) {
	return x > 10;
}

const fnFunction = (input, fn) => m(input).is(fn || (x => x > 10));

test('throw error if type is incorrect', t => {
	t.throws(fn.bind(undefined, 'foo'), TypeError);
});

test('not throws error if type is correct', t => {
	t.notThrows(fn.bind(undefined, 5));
});

test('not throws error if parameter is optional and not provided', t => {
	t.notThrows(fn.bind(undefined, undefined, true));
});

test('throw error if parameter is optional and type is incorrect', t => {
	t.throws(fn.bind(undefined, 'foo', true), 'foo is not of type Number');
});

test('validate function', t => {
	t.throws(fnFunction.bind(undefined, 5), '5 did not pass the test');
	t.throws(fnFunction.bind(undefined, 5, biggerThenTen), '5 did not pass the test of function `biggerThenTen`');
	t.notThrows(fnFunction.bind(undefined, 15));
});
