// A curried function is a function which takes multiple parameters one at a time, by taking the first argument, and returning a series of functions which each take the next argument until all the parameters have been fixed, and the function application can complete, at which point, the resulting value is returned.
// A partial application is a function which has already been applied to some — but not yet all — of its arguments. The arguments which the function has already been applied to are called fixed parameters.
// Point-free style is a way of defining a function without reference to its arguments. Generally, a point-free function is created by calling a function which returns a function, such as a curried function.
// Curried functions are great for function composition, because they allow you to easily convert an n-ary function into the unary function form needed for function composition pipelines: Functions in a pipeline must expect exactly one argument.
// Data last functions are convenient for function composition, because they can be easily used in point-free style.



const add = a => b => a + b

const result = add(2)(3)

const inc1 = add(1)
const inc50 = add(50)

// console.log(inc50(3))

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};
const g = n => n + 1;
const f = n => n * 2;
const h = pipe(
  g,
  trace('after g'),
  f,
  trace('after f'),
);
h(100)
/*
after g: 21
after f: 42
*/
