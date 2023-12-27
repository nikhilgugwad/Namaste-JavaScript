/* CRAZY JS INTERVIEW ft. Closures */

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();

/* 
double parenthesis()() in JS
- outer() returns the inner function
- outer()() also invokes the inner() that is returned
- instead of collecting the inner() in a variable and using the variable to call the function, the outer()() is used.
- if a is declared after line 7 before returning anything it still works the same the inner() would still act as a closure.
- if the outer() is called with an argument passed "Helloworld" and console.log(a,b), the console log will print the string along with value 10 because the parameter in the function outer(b) is also a part of the outer lexical environment of inner() acting as a closure in this example 
*/

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
var close = outest()("helloworld");
close();

/* 
- when outest is called it returns the outer() and the outer() now called with the parameter b and it returns the inner() that gets stored in the close var. So later close() is called and the output is 10 "helloworld" 20.
*/

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("helloworld");
close();

/* 
  - when there is a global variable "let a = 10" conflicting with the block scope variable "a" in the outer()
  - it still prints the "a" value 10 because in the inner function, the variable a is declared using let within the outer function this creates a block-scoped variable a within the scope of the outer function 
  - The closure formed by the inner function captures this local variable a, and when the inner function is invoked, it logs 10 for the value of a.
  - Suppose if there isn't any let a = 10 statement it would have logged the output as 100 because it would have used scope chaining to look out the value for variable a and ultimately it would have found the value of a in the lexical environment of outest()
  - Suppose if there isn't any global variable of let a = 100 too then it would have thrown a reference error. reference error is thrown when there isn't any declation of "a" in the entire program.
*/

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

console.log(count); // comment this line while running or it will result in an error
var counter1 = counter();
counter1();

/* 
Data privacy with the help of Closures
- In the above example we will not be able to access the value of count (i.e 0) because the variable count is declared inside the counter function, and a closure is created when the inner function incrementCounter is returned.
- The closure allows incrementCounter to access and modify the count variable even though the outer function counter has finished executing.
- attempting to access count directly outside the scope of counter will result in an error, because count is not defined in the outer (global) scope.
- The purpose of using closures in this context is to encapsulate the state (in this case, the value of count) and only expose it through the functions that are returned.
- we will be able to modify the count var only when we assign the returned function to counter1.
- When you invoke counter1(), the incrementCounter function is executed. Since it's a closure, it has access to the variables from its lexical scope, including the count variable. The closure allows the function to "remember" the environment in which it was created, even if that environment (the counter function) is no longer on the call stack.
*/

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

/* 
Using constructor function Counter() to achieve data privacy
- the Counter constructor function is used to create instances of a counter object. The key feature here is the use of closures to achieve data privacy
- The count variable is a private variable that is encapsulated within the constructor function, and it is only accessible through the public methods (incrementCounter and decrementCounter) that are assigned to the instance using this.

Working
- The count variable is declared within the scope of the Counter constructor function, making it a private variable.
- The incrementCounter and decrementCounter methods are defined as closures within the constructor. These methods have access to the private count variable because they are created in the same scope.
- When you create an instance of Counter using var counter1 = new Counter();, counter1 now has its own private count variable, and the methods (incrementCounter and decrementCounter) have access to that specific count due to closures.
- The incrementCounter and decrementCounter methods provide controlled access to the count variable. They allow you to modify the count value, but you cannot directly access or modify count from outside the instance.
- This approach helps achieve encapsulation and data privacy, as the internal state (the value of count) is not directly accessible from outside the constructor. Instances of Counter have their own isolated state, and the public methods serve as controlled interfaces for interacting with that state.

Recollecting OOP concepts in JS
-  In JavaScript, functions can be used as constructors to create objects. When you use the new keyword with a function, it creates a new instance of an object and sets this to refer to that instance within the function. The function can then be used to initialize the properties and methods of the object.
Counter is a constructor function
counter1 is an instance of the object created by the Counter constructor
- The new Counter() expression creates a new object, and the this inside the Counter function refers to that new object. Properties and methods can be added to the object using this.
- In this case, the object has incrementCounter and decrementCounter methods, which are closures that have access to the private count variable.
-  In this example, counter1 is indeed an instance of the Counter object, and can be used to call the methods defined in the Counter constructor.

Brief Overview of how Functions work in JS
- in JavaScript, functions are a special type of object. Specifically, functions are instances of the built-in Function object.
- In JavaScript, functions are first-class citizens. This means that functions can be treated like any other value; they can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures.
- Functions, being instances of the Function object, are also objects with some additional capabilities. They can have properties and methods just like any other object.
- Functions can be used as constructors to create objects. When a function is invoked with the new keyword, it creates a new object, and this inside the function refers to that new object.
- So functions are indeed objects, but they have additional behavior and capabilities beyond what regular objects have.
*/

/* 
Disadvantages of Closures
- Memory management: Closures can keep references to their outer variables even after the outer function has finished executing. This can lead to increased memory consumption, as the closed-over variables are not eligible for garbage collection until the closure itself is no longer referenced. If closures are created frequently in a program, and they capture large amounts of data, it might contribute to higher memory usage, This can also freeze the browser.
*/

/* 
Garbage Collector
- Garbage Collector is a program in the JS engine that frees up the memory consumed by unused variables.
*/

function a() {
  var x = 0,
    z = 10;
  return function b() {
    console.log(x);
  };
}

var y = a();
//...

y();

/* 
Relation between Closures and Garbage Collection
- A closure is created when a function is defined inside another function, and the inner function has access to the outer function's variables (including its parameters and local variables).
- Closures capture the scope in which they are created, allowing inner functions to retain references to variables from their containing scope even after the outer function has finished executing.
- Closures can unintentionally retain references to variables or objects, preventing them from being garbage collected.
- If a closure keeps a reference to an object that is no longer needed, that object and any other objects it references will not be eligible for garbage collection.
- the b() acts as a closure and keeps a reference to the data of the variable x and its data is ineligible for garbage collection

Smart garbage collection by V8 JS engine in chrome
- if we create another variable z=10, this data will be garbage collected because this value is not referenced by any inner function
*/
