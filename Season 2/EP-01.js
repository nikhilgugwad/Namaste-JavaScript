/* Callback Hell */

console.log("Namaste");

setTimeout(function () {
  console.log("Javascript");
}, 5000);

/* 
Callback functions in Javascript
- In JavaScript, callbacks are functions that are passed as arguments to other functions and are intended to be executed after the completion of a particular operation. 
- Callbacks are commonly used in asynchronous programming to handle tasks such as making API requests, reading files, or performing other operations that may take some time to complete.

How callbacks work and their role in handling asynchronous operations
- JavaScript is single-threaded, meaning it can only execute one operation at a time. However, many operations, such as fetching data from a server or reading a file, can take a significant amount of time. To avoid blocking the execution of other tasks, JavaScript uses asynchronous programming.
- Callback functions are a fundamental concept in handling asynchronous operations. Instead of waiting for an operation to complete, you provide a callback function that will be invoked once the operation is finished. This allows the program to continue executing other tasks while waiting for the asynchronous operation to complete.
- Callbacks are commonly used with functions that perform asynchronous operations, such as setTimeout, setInterval, or functions that make HTTP requests. For example, when making an API request using fetch, you often provide a callback function (or use promises or async/await, which are more modern alternatives).
- Callbacks can lead to a situation known as "callback hell" or "pyramid of doom," where nested callbacks make the code hard to read and maintain. Promises and async/await are modern approaches to handling asynchronous code, providing a more structured and readable way to handle asynchronous operations.
*/

const cart = ["shoes", "pants", "kurtas"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

/* 
Issues with Callback functions in JS

Callback Hell (Pyramid of Doom)
- Callback hell refers to a situation where multiple nested callbacks make the code difficult to read and maintain. This issue arises when you have several asynchronous operations or nested callbacks, leading to a pyramid-shaped structure in your code.

Inversion of Control (IoC)
- Inversion of control refers to the idea that the control flow is inverted compared to traditional procedural programming. Instead of the main program controlling the flow, the control is inverted to external functions or frameworks that call back into your code.
- Callbacks are examples of inversion of control because the function receiving the callback does not control when it gets executed; the control is inverted to the function that calls the callback. While this can be a powerful pattern for handling asynchronous operations, it can also lead to challenges in understanding and maintaining the flow of the program.
*/
