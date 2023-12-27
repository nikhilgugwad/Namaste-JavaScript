/* Callback Functions in JS ft. Event Listeners */

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

/* 
Callback functions
- In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some operation.
- Callbacks are a fundamental concept in asynchronous programming, allowing you to manage the flow of execution and handle tasks such as handling responses from asynchronous operations like API requests or handling events.

Advantages of Callback functions
- Callbacks are commonly used to handle asynchronous operations, such as AJAX requests, file I/O, or timers. They allow you to define what happens after an operation completes, preventing the need for blocking code execution.
- Callbacks are widely used in event-driven programming. For example, when handling user interactions like button clicks, you can pass a callback function to be executed when the event occurs.
- Callbacks promote modularity by allowing you to define separate functions for specific tasks. This makes code more modular, easier to understand, and promotes code reuse.
- Callbacks provide a way to customize behavior. By passing different callback functions to a higher-order function, you can achieve different outcomes without modifying the core logic.
- Callbacks often involve closures, allowing the callback function to access variables from its surrounding scope even after the outer function has completed execution. This can be powerful for encapsulating state.
- Callbacks align well with the principles of functional programming, where functions are treated as first-class citizens and can be passed around as arguments.
*/

/* 
Blocking the main thread in JS
- In JavaScript, the term "blocking the main thread" refers to a situation where a piece of code prevents the main execution thread from doing other tasks.
- JavaScript is single-threaded, meaning it has only one execution thread in which all code is run sequentially. If a piece of code takes a long time to execute synchronously, it can block the main thread, causing the user interface to freeze or become unresponsive.
*/

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}
attachEventListeners();

/* 
Event listeners and how closures work with event listeners
- in case of an event listener there will be an handler function i.e xyz() in this example that is also a callback function.
- the xyz() forms a closure with the attachEventListeners() and has access to the count variable as it is part of its lexical scope.
- whenever the button is click an event occurs and the handler function attached to that event is executed i.e handler function is passed to the call stack to execute.
*/
