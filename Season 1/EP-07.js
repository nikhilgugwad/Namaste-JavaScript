/* The Scope Chain, Scope & Lexical Environment */

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}

a();
console.log(b);


/* 

- Lexical environment is created whem a execution context is created
- lexical environment is the local memory + reference to the lexical environment of the parent 
- here c() has a local memory of its own along with the lexical environment of its parent a()
- here the parent is lexical parent i.e c() is lexically inside a(), so a() is the parent of c() and a() lexical parent is GEC
- this whole chaining of lexical environment is known as scope chaining
- if the var b is not found throughout the scope chaining it means that the variable does not exist anywhere in the program then it will throw an error i.e var b is NOT DEFINED

*/
