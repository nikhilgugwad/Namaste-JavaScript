/* setTimeout + Closures Interview Question */

function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste Javascript");
}
x();

/* 
setTimeout 
- In the above example snippet when x() is invoked the JS engine encounters setTimeout() with a timer
- the setTimeout() is set aside and JS engine continues to execute the next line and prints "Namaste Javascript" to the console
- when the timer expires the setTimeout executes the callback function within it and prints the value of 1
*/

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}
x();

/*
Role of Closures Case-1
In the above example snippet We expect to get the output of numbers 1-5 with console log of "Namaste Javascript", but the numbers 1-5 will not be printed in this because
- when the for loop starts the setTimeout schedules the timer for that respective iteration, but that timer doesn't start to count until all the iterations are finished 
- when all iterations are finished then the timer starts for all of the setTimeout's by then the value of i will be 6 because all iterations are already completed and the i is incremented to 6
- so all of the setTimeout's function's will refer to the same reference variable i which has a value of 6 residing in the same memory location and console logs value of 6 everytime

More Detailed Explanation:
- as the var is used to declare a variable, it is function-scoped (or globally scoped if declared outside of any function).This means that there is only one instance of the variable within the entire function (or globally), and its value is shared across all iterations of a loop.
- when the setTimeout functions execute after their respective delays, they all reference the same variable i from the function scope. Since the loop has completed, the value of i is 6 for all of them. 
*/

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste Javascript");
}
x();

/* 
Role of Closures Case-2
- In the above example snippet When we use let to declare the variable i in the loop, it creates a new lexical scope for i in each iteration.
- each iteration gets its own copy of the variable
- the let statement creates a block-scoped variable, In the context of our for loop in which the let statement is contained within the pair of curly braces {}.
- So, The block scope created by let is the block of the for loop.
- Each iteration of the loop has its own block scope, and within that scope, a new instance of the variable i is created. The setTimeout function is a closure, and when it captures the variable i, it is capturing it from the block scope of the current iteration.
- The closure created by setTimeout captures the correct i from its own block scope.
- incase of 
*/

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }

  console.log("Namaste Javascript");
}
x();

/* 
Role of Closures Case-3 (Solution to the case 1)
- close() is immediately invoked it with the current value of i as an argument. This function creates a new scope for its parameter x, and when the setTimeout function is called inside close, it captures the parameter x from that scope.
- The x parameter in the close function acts as a local variable within the scope of the close function. Since we immediately invoked close(i) inside the loop, a new scope is created for each invocation, and each scope has its own unique x parameter.
- The scope of the closure created by the close function is a local scope. Specifically, it is the scope of the close function itself. Closures "close over" their lexical scope, which means they retain access to variables in the scope where they were created.

In each iteration of the for loop
- The close function is invoked with the current value of i as its argument.
- The close function creates a new scope with its own parameter x set to the value passed in.
- The setTimeout function inside close captures the value of x from its own scope, forming a closure.
- This closure retains a reference to the specific x for that iteration, and when the setTimeout function executes, it logs the correct value of x (and, indirectly, the correct value of i).
*/

