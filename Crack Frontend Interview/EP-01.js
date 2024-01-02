/* Call, apply and bind methods in javascript */

let name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      " from " +
      hometown +
      " , " +
      state
  );
};

// function borrowing
printFullName.call(name, "Dehradun", "Uttarakhand"); // In call() the first argument will always be the reference to the object and the rest of the arguments will be passed as a parameters to the function 

printFullName.apply(name, ["Dehradun", "Uttarakhand"]); // The only difference b/w the call() and apply() is that the arguments which are supposed to be passed as parameters to the function are grouped together in a Array List.

// Bind method
let printMyName = printFullName.bind(name, "Dehradun", "Uttarakhand");
console.log(printMyName);
printMyName();

// In the bind(), the bind() returns an entire copy of the printFullName() that is stored in printMyName variable which eventually has to be called to invoke the function ( i.e printFullName() )
