/* SHORTEST JS Program window & this keyword */

var a = 10;
function b() {
  var x = 10;
}

console.log(window.a);
console.log(a);
console.log(this.a);


/* 

- the shortest JS program is empty code
- by default a GEC is established along with a window object which is in global space, window object is also known as global object
- this keyword refers to the current execution context
- if we are accessing var a without using window or this the JS engine assumes that the the variable is defined in a global space 

*/