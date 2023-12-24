/* How functions work in JS & Variable Environment */

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}


/* 

- initially GEC will be created and x's value will be undefined and later upon execution will be 2 
- when a() will be invoked a separate execution context a() will be created and will be pushed to the call stack i.e will be placed above GEC
- a local space will be created for that particular a() also called local scope where the value 10 will be stored, to console log the x value the JS engine will look into the local space to fetch and display the value 10 in the console
- the local space will also be deleted along with the execution context a() when the entire snippet of the a() is executed 

*/