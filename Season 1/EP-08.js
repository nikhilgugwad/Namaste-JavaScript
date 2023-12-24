/* let & const in JS Temporal Dead Zone */

console.log(b);
let a = 10;
var b = 100;
const c = 1000;

/* 

- hoisting in let works different as compared to var 
- whenever we try to acces the let variable before initializing it throws an error that "a" cannot be accessed without initialization
- however let variable "a" is also hoisted but not attached to the global object and hence not accessible because it is stored in a separate memory place

Temporal Dead Zone 

- TDZ is the time duration between the let variable hoisted till the let variable is initialized with some value
- in the above example we are trying to access the let variable "a" when it is still in the TDZ

let vs var vs const

- we can declare a var variable and initialize it with values of different datatypes again and again and also don't have to initialize upon declaration and there is no concept of TDZ
- when we are using let variable TDZ comes into play and we cannot access the variable when it is in TDZ or not initialized yet
but we can initialize it multiple times with any datatype anywhere in the program. The let variable declaration is strict compared to var
- when it comes to const it is even more stricter as we cannot initialize the const variable multiple times and we also cannot leave it uninitialized, we have to initialize it the moment we declare it.

*/
