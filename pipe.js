/**
 * Abstraction of lodash _.flow method (https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L5110)
 * Variadic function that applies a reduce function to each accumulator
 * Usage:
 * const example = pipe(function1, function2, function3);
 * NOTE: the result/return from function1, will be passed to function2 and so on
*/

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
