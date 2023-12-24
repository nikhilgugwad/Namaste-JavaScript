/* How JavaScript Code is executed? & Call Stack */

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

/* 

  All these steps/procedure is performed by javascript engine

- when this javascript program is run a global execution context is created
- this global execution context contains memory component and code component
- this global execution context is created in 2 phases i.e phase 1 being memory creation phase and phase 2 being code execution phase
- Phase 1: allocating memory for all the variables and functions inside the global space, all variables are allocated with undefined in this phase and in case of functions the whole code snippet related to it is stored in memory
- Phase 2: Now the javascript code is executed line by line, the spatial value "2" will replace the undefined for the variable "n" and the command goes to line 9 where it will invoke a function square with an argument, a seperate execution context is created for the function within the global execution context and deleted later when the function has finished executing (when "ans" is returned in this case)
- the global executuion context is also deleted when the entire javascript program has finished executing.

Lets now talk about call stack which is maintained by the javascript engine during an execution of a program

- In the bottom of the stack we have Global Execution Context (GEC) whenever a program is run initially.
- whenever a function is invoked a seperate execution context E1 is created and place over GEC in the call stack and later when the execution of the function is completed the E1 is poped out of the call stack and control is returned to the GEC, eventually GEC will also be poped when the entire program is finished executing.
- call stack maintains the order of execution of execution contexts
- call stack is also known as Execution context stack, Program stack, Control stack, Runtime stack, Machine stack etc.
  

*/
