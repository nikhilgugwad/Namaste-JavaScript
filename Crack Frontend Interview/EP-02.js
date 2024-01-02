/* Polyfill for bind() method */

let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      " from " +
      hometown +
      " , " +
      state +
      " , " +
      country
  );
};

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
printMyName("India");

// Polyfill for bind()
Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
printMyName("India");

/* 
Note:
- we are creating a mybind() in the Function prototype which makes that function available across all the methods/functions
- mybind() takes the arguments that are passed to it
- the "this" refers to the printName method which is stored in the obj
- the params store an array of all arguments that were passed except the first element in that array of arguments
- as the normal bind() returns an entire function, so we are also returning a function which may also take some arguments
- as the obj contains the printName method it is called with the apply() function.
- so in the apply() function as its convention we pass the first argument which usually refers to a object (args[0]) and later we concatenate the two arrays of arguments params and args2 because the other arguments can also be passed via the bind() or via its nested function that is supposed to be returned both of them have to be considered when the inner function will be invoked
*/
