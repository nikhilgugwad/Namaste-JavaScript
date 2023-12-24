/* BLOCK SCOPE & Shadowing in JS */

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
/* 

Block in Javascript
- A block is represented by {}, a block is used in JS to group multiple statements for execution
- Typically a block is used in a place where javascript expects only a single statement to overcome this, mutiple statements can be written at once with the help of block {}
- for ex. the if else doesn't need a block unless it only has a single statement.

Block scope
- for let & const variables the hoisting is done and a seperate memory location with undefined value is allocated that is known as block scope and var a is in global scope.
- if we try to access the value of let & const variables outside the block an error will be thrown because those value are only present in block scope and can be accessed within the block soon after block scope is deleted once the code in the block has finished executing. 
- only the value of "a" will be printed because it was never in block scope instead it was in global scope.
- in memory context these are called variable of global space,local space,block space.

*/

var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);

/* 

Shadowing
- the console log will print 10 because the 100 value gets stored in a global space and the same memory location is reassigned with 10 value 
- the "a" variable is referring to the same location in the memory, so previously it was stored with value 100 and got reinitialized with value 10 in line 31 even it has occured in a block. 
- if the "a" variable is initialized with the let, then the value 100 will be stored in the script space and value 10 will be stored in the block space because the values being in the different scopes values 10 and 100 will be printed respectively 
- illegal shadowing is something where var variable with a same name within the block cannot override the let variable with the same name outside the block but vice versa is possible
- a let variable with the same name can only be overriden with another let variable inside the block having same name and similar case with the const variables.

*/

