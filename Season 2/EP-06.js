/* this keyword in JavaScript */

"use strict";

// this in global space
console.log(this); // outputs global object i.e window object

/* 
Note:
- the global object varies for every javascript runtime environments for example in browser the global object is window and in Node JS it is global etc. 
*/

// this inside a function
function x() {
  // the value of this depends on strict/no strict mode
  console.log(this);
}

/* 
Note:
- in case of strict mode the value of this will be undefined
- in case of non strict mode the value of this will be the global object i.e window object
*/

// this keyword value depends on how the function is called
x(); // outputs undefined if called without any object reference
window.x(); // outputs window object if called with window object reference

/* 
Note:

this substitution: 
- "This substitution" in JavaScript typically refers to the behavior of the this keyword within different contexts. The value of this is dynamically determined based on how a function is called, and it can be a common source of confusion for developers.
- The this keyword is like a placeholder that gets substituted with the actual object when a function is invoked. The value of this depends on the way the function is called:
*/

// this inside a Object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this); // outputs the obj object as this value
  },
};

obj.x();

// call, apply and bind methods (sharing methods)
const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};

student.printName(); // outputs "Akshay"

const student2 = {
  name: "Saini",
};

student.printName.call(student2); // value of this = student2, outputs the value "Saini".

/* 
Note:
- There is a student object which contains name as a property and a method printName()
- student.printName() outputs "Akshay" because this value is replaced by the student object
- But in student2 object there isn't any printName method to log the name on console, so we have to access the method from the student object.
- With the help of call() we can override the this value i.e replacing the this value with the object we pass as a argument in the call().
- So finally printName will be called with the this keyword being replaced with the student2 object. 
*/

// this inside arrow functions
const xyz = {
  a: 20,
  x: () => {
    console.log(this);
  },
};
xyz.x();

/* 
Note:
- the value of "this" inside the arrow function x() will be the global object (window in a browser environment). This behavior is a result of how arrow functions handle the "this" keyword.
- In arrow functions, "this" is not bound to a new value based on how the function is called; instead, it captures the value of "this" from its surrounding lexical (static) scope at the time the arrow function is defined. This behavior is different from regular functions, where "this" is dynamically determined based on how the function is called.
- The arrow function x() is defined within the xyz object. However, due to the nature of arrow functions, it does not capture the "this" value from the object. Instead, it captures the "this" value from its enclosing lexical scope, which, in this case, is the global scope.
- So, when you call xyz.x(), the arrow function x() captures the "this" value from the global scope, and you will see the window object logged to the console.
- To summarize, while arrow functions within objects do capture their "this" value from the enclosing lexical scope (which is the object in this case), they do not create their own this binding to the object as regular functions do. This behavior is a key distinction between arrow functions and regular functions.
*/

// this inside nested arrow function
const abc = {
  a: 20,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};
abc.x(); // outputs abc object

/* 
Note:
- In this case, the x method is a regular function, and it has its own "this" binding. Inside the x method, there's an arrow function y. The arrow function y captures the "this" value from its enclosing lexical scope, which is the x method. Since y is defined within the x method, it captures the "this" value of x.
- When you call abc.x(), the x method is invoked, and within it, the arrow function y is called. The "this" value inside the arrow function y will be the same as the "this" value of the surrounding x method, which is the abc object in this case.
- Therefore, when we run this code, the console.log(this) inside the arrow function y will output the abc object, and we'll see    { a: 20, x: [Function: x] } logged to the console.
*/

// this inside DOM elements => reference to HTMLelement

/* 
Note:

<button onclick="alert(this)">click me</button>

- The value of "this" inside the onclick attribute refers to the DOM element that triggered the event. In "this" specific example, it will be the button element itself.
- So, when we click the button, the alert(this) will show an alert with [object HTMLButtonElement], indicating that "this" inside the event handler is the button element.
- If "alert(this.tagName)" will display the "BUTTON" as the value.
*/