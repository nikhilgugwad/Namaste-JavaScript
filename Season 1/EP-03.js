/* Hoisting in JavaScript */

getName();
console.log(x);
console.log(getName);

var x = 7;
function getName() {
  console.log("Namaste Javascript");
}

/* 

Hoisting

- In any other programming languages if we try to access a variable or a function before there initialization an error will be thrown
- But this is not the case in javascript, a GEC is created before the execution of first line of the code and phase 1 i.e memory creation makes sure that all variables and functions are allocated with some memory and the placeholder being undefined for the variables and the entire code snippet of functions is replicated in the memory even before the code execution begins.
- so therefore instead of throwing error the output for the variable x will be undefined, the getName() will be called and "Namaste Javascript" will be printed on the console and at last when try to console log the getName() entire code snippet of getName() will be shown as an output.
- the only time line 4 will throw an error when there isn't any x defined or initialized in the entire program the error displayed will be not defined
- if we use an arrow function for getName() then the getName will act as an variable and will store its value as undefined. 

*/
