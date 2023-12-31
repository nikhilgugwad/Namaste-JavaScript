/* Promises */

const cart = ["shoes", "pants", "kurta"];

// in case of a callback function
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

const promise = createOrder(cart);

// Promise object -> {data: undefined}
// after sometime {data: orderDetails}

promise.then(function (orderId) {
  proceedToPayment(orderId);
});

/* 
Promises
- Promises in JavaScript are a way to handle asynchronous operations more effectively, providing a cleaner and more organized syntax compared to traditional callbacks. A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
- Here, createOrder is presumably an asynchronous function that takes a cart and a callback function as parameters. The callback function (function (orderId) { proceedToPayment(orderId); }) will be executed once the createOrder operation is completed. This is a traditional callback approach.
- The createOrder function is assumed to return a Promise. Promises have a then method that allows you to register callbacks to be executed when the asynchronous operation is successful.
- The then method takes a function that will be called with the resolved value of the promise, which, in this case, is the orderId once the createOrder operation is complete.
- Promises provide a more structured and readable way to handle asynchronous code, and they also help in avoiding the "callback hell" or "pyramid of doom" associated with nested callbacks.
- Promises have three states: fulfilled, rejected and pending. The then method handles the fulfillment, and you can use catch to handle any potential errors (rejections):
*/

/* 
States of Promises
1.Pending: This is the initial state of a Promise. When a Promise is created, it is in the pending state. This means that the asynchronous operation associated with the Promise hasn't completed yet. While in this state, the Promise is neither fulfilled nor rejected.
2.Fulfilled (Resolved): A Promise is said to be fulfilled or resolved when the asynchronous operation is successfully completed. If the operation completes successfully, the Promise transitions to the fulfilled state. In the fulfilled state, the Promise has a resolved value, and this value is passed to the then method's callback.
3.Rejected: A Promise is rejected when the asynchronous operation encounters an error or fails for some reason. If an error occurs, the Promise transitions to the rejected state. In the rejected state, the Promise has a reason for the rejection, and this reason (an error or an exception) is passed to the catch method's callback.
- The transitions between these states are governed by the result of the asynchronous operation. Once a Promise is fulfilled or rejected, it is considered settled, and its state won't change.
*/

const GITHUB_API = "SOME_GITHUB_API_LINK";

const user = fetch(GITHUB_API);

console.log(user);

/* 
Promise Object
- A Promise object in JavaScript represents the eventual completion or failure of an asynchronous operation and exposes several methods to interact with its state and value. When you log a Promise object to the console, you'll see information about the Promise, including its current state and, if fulfilled, the resolved value.
- fetch() is a web api provided by the browser that returns a promise
- the user now contains a promise object which indeed contains the data as a result from the fetch request.
- A Promise object in JavaScript contains two important internal properties that are not directly accessible from your code but are used to manage the state and result of the asynchronous operation:

1.[[PromiseState]]:
- This internal property represents the current state of the Promise.
- Possible values are:
  - "pending": The initial state, before the asynchronous operation is completed.
  - "fulfilled": The state when the asynchronous operation is successfully completed.
  - "rejected": The state when the asynchronous operation encounters an error or fails.

2.[[PromiseResult]]:
- This internal property represents the result with which the Promise was fulfilled or the reason for rejection.
- If the Promise is in the "fulfilled" state, this property contains the resolved value.
- If the Promise is in the "rejected" state, this property contains the reason for rejection (an error or an exception).
- This property is undefined if the Promise is still in the "pending" state.

- While these internal properties are not directly accessible in your code, you can interact with the Promise's state and result using the methods provided by the Promise API, such as then, catch, and finally.
*/

const cart1 = ["shoes", "pants", "kurtas"];

// Callback Hell
api.createOrder(cart1, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// Promise Chaining
createOrder(cart1)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return proceedToPayment(paymentInfo);
  })
  .then(function (paymentInfo) {
    return proceedToPayment(paymentInfo);
  });

/* 
Promise Chaining
- Promise chaining is a technique in JavaScript that involves chaining multiple asynchronous operations using the then method of Promises. This allows you to execute a sequence of asynchronous tasks in a more readable and organized manner, avoiding the "pyramid of doom" or callback hell.
- Each then block is used to handle the result of the previous asynchronous operation and return a new Promise, allowing you to chain additional asynchronous operations.

Let's break down the provided code snippet to understand how promise chaining works:

1.createOrder Function:
- The createOrder function is assumed to return a Promise that resolves to an orderId.
- The first then block is used to handle the result of the createOrder operation (the resolved orderId).

2.proceedToPayment Function:
- The proceedToPayment function is assumed to return a Promise that resolves to paymentInfo.
- The subsequent then blocks are used to handle the result of the previous proceedToPayment operation (the resolved paymentInfo).

3.Promise Chaining:
- Each then block returns a new Promise, allowing you to chain another then block.
- The result of each then block becomes the resolved value of the Promise returned by that block.
- This allows you to create a sequence of asynchronous operations where each step depends on the result of the previous step.

- In summary, promise chaining is a way to structure asynchronous code by chaining then blocks, making it more readable and avoiding deep nesting. Each then block handles the result of the previous asynchronous operation and returns a new Promise, allowing you to create a clear sequence of tasks.
*/
