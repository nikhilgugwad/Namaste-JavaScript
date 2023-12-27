/* FIRST CLASS FUNCTIONS ft. Anonymous Functions */

// Function Statement aka Function declaration
function a() {
    console.log("a called");
}

// Function expression
var b = function() {
    console.log("b called");
}

/* 
Differences in hoisting between Function Statement and Function expression
- in case of Function statement, The entire function, including both the declaration and the body, is hoisted to the top of the scope.This means we can call the function even before its declaration in the code.
- in case of Function expression, Only the variable declaration is hoisted to the top, not the entire function.The assignment (the actual function expression) is not hoisted, so we cannot call the function before the line where the variable is assigned.
*/

/* 
Difference between Parameters and Arguments
Parameters:
- Parameters are part of the function declaration, indicating what values the function expects.
- Parameters are declared in the function signature and act as placeholders for values.
- The number of parameters is determined by the function declaration.
- The order of parameters matters within the function definition.
Arguments:
- Arguments are the values passed to the function when it is called, fulfilling the expectations set by the parameters.
- Arguments are the actual values or expressions used to fill those placeholders when calling the function.
- The number of arguments should match the number of parameters when calling the function, but JavaScript allows calling a function with fewer or more arguments.
- The order of arguments matters when calling the function.
*/

/* 
First class functions in JS
- In JavaScript, functions are first-class citizens, which means they are treated as first-class objects. This concept of "first-class functions" allows functions to be:
1. You can assign a function to a variable.
2. Functions can be passed as arguments to other functions.
3. A function can be returned from another function.
4. Functions can be stored in data structures like arrays or objects.
*/


