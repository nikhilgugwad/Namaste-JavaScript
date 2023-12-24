/* Closures in JS */

function x() {
    var a = 7
    function y() {
        console.log(a);
    }
    return y
}
var z = x()
console.log(z);
//.......
z();

/* 

Closure
- closure = current function +  with its lexical scope
- A function along with its lexical scope bundled together forms a closure
- when x() is invoked the y() which is embedded inside the x() is returned and stored in z
- the skeleton of the y() is returned along with its lexical scope of its parent x() to the z
- when we console log the z the entire skeleton of y() is returned
- as the z now contains a function it acts as a function too i.e z()
- when z() is invoked the value 7 is printed even though the execution context of x() is finished executing way before, this is because when the y is returned it still retains the lexical environment i.e it retains the lexical scope of its parent x() along with its own scope. So a closure of x is also returned which contains the value of 7
- when the EC of x() is deleted from the call stack after its execution the value of 7 is still retained in the memory and it is not garbage collected, thats the reason why z was able to access and display the value of 7.

Uses of Closure
- Module design pattern
- Currying
- Functions like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...

*/