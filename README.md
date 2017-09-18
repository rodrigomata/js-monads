# Javascript Monads
Description and examples of using Monad design pattern in Javascript

## Background
Monads are a functional programming design pattern, which heavily relies on function composition. Shortly, if there's method chaining or the return parameter of a function is used as the argument of another, it is *function composition*.

## Concepts

1. Function composition - The process of applying a function to the output of another function.
Eg:
```
const g = a => a + 1;
const f = b => b + 2;
const compositeSum = x => f(g(x));

const example = compositeSum(2); // 5
```

2. Point-free style - The style of writing functions without mentioning their arguments, shorty, without using function or =>. This technique brings some benefits like less bugs, code being cleaner and easier to understand, and focuses more on the result rather than the process.
Eg:
```
const compositeSum = x => f(g(x));
```

3. Currying - Transformation of a n-ary function (takes more than 1 parameter) to unary (single parameter). *Lambda calculus approach*
```
const minus = (x, y) => x - y;

const currying = x => y => x - y;
```
