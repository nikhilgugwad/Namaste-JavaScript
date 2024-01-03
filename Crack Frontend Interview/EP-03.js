/* Currying in JS */

/* 
- Currying in JavaScript is a functional programming concept where a function is transformed into a sequence of functions, each taking a single argument. The process of currying involves breaking down a function that takes multiple arguments into a series of functions, each handling one argument at a time.
- In other words, instead of a function taking all its arguments at once, it takes the first argument and returns a new function that takes the second argument, and so on, until all arguments are consumed and the final result is obtained.
*/

let multiply = function (x, y) {
  console.log(x * y);
};

// Using bind to create a partially applied function
let multiplyByTwo = multiply.bind(this, 2);

// Calling the partially applied function with the remaining argument
multiplyByTwo(3);

/* 
Currying using bind() method
- The multiply function takes two arguments, x and y, and logs the result of their multiplication.
- The bind() method is used on the multiply function. The first argument to bind() (this in this case) is set to null because it is not used in the function. The second argument (2) is the value that will be bound to the x parameter of the multiply function.
- The result of bind() is a new function (multiplyByTwo) where the value 2 is bound to the x parameter. This new function only expects the remaining argument (y).
- Finally, when multiplyByTwo(3) is called, it effectively becomes multiply(2, 3), where 2 is the bound value for x and 3 is the argument passed to the partially applied function. The result is 6, which is logged to the console.
- currying takes place using the bind() method by partially applying the first argument of the multiply function. Specifically, multiply.bind(this, 2) creates a new function where the value 2 is bound to the first parameter (x). This results in a partially applied function that expects only the second parameter (y) when invoked. The multiplyByTwo function, thus created, represents the curried version of the original multiply function.
*/

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// multiplyByTwo2 acting as a currying function
let multiplyByTwo2 = multiply2(2);
multiplyByTwo2(3);

/* 
Currying using closures
- the use of closures here allows the inner function to retain access to the x parameter even after the outer function (multiply2) has finished executing. This mechanism enables the creation of a curried function where the first argument is captured by the closure, and the remaining arguments can be provided later when the curried function is invoked.
- In the given code, multiplyByTwo2 is a curried function. A curried function is a function that, instead of taking all its arguments at once, takes one argument at a time and returns a new function that expects the next argument.
*/
