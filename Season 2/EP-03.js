/* Creating a Promise, Chaining & Error Handling */

const cart = ["shoes", "pants", "kurta"];

// Consumer Part - consuming a promise
const promise = createOrder(cart); // outputs orderId
console.log(promise);

promise.then(function (orderId) {
  console.log(orderId);
});

// Producer Part - creating a promise

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

/* 
creating and consuming a Promise using the createOrder function. 

1.Creating a Promise (Producer Part):
- The createOrder function returns a Promise (pr) that represents the completion or failure of an asynchronous operation.
- When we create a new Promise, we typically pass an executor function to the Promise constructor. This executor function takes two arguments: resolve and reject.
- the resolve and reject functions are not part of the Promise prototype. Instead, they are functions provided as arguments to the executor function that you pass to the Promise constructor when creating a new Promise.
- The logic for resolve and reject is not explicitly present in the prototype of the Promise object. Instead, it's part of the implementation of the Promise constructor and its associated functionality within the JavaScript runtime.
- When you create a new Promise using the new Promise(executor) syntax, the executor function you provide as an argument is immediately invoked by the JavaScript runtime, and it receives two functions as parameters: resolve and reject.
- resolve(value): This function is used to fulfill the Promise, indicating that the asynchronous operation has completed successfully. The value passed to resolve is the result of the successful operation.
- reject(reason): This function is used to reject the Promise, indicating that the asynchronous operation has encountered an error or failed. The reason passed to reject is typically an error object or an explanation of the failure.
- Inside the Promise constructor, there is logic for validating the cart (validateCart function) and creating an order.
- If the cart is not valid, the Promise is rejected with an error.
- If the cart is valid, the Promise is resolved with an orderId after a simulated delay of 5 seconds.

2.Consuming a Promise (Consumer Part):
- The createOrder function is called with the cart array, resulting in the creation of a Promise (promise).
- The Promise object is logged to the console, showing its initial state (<pending>).
- The then method is used to attach a callback function that will be executed when the Promise is resolved. In this case, it logs the orderId.

3.Validation Function:
- A simple placeholder function (validateCart) that always returns true. In a real-world scenario, this function might perform more complex cart validation logic.

- In summary, the createOrder function returns a Promise that represents the asynchronous process of creating an order. The consumer part demonstrates how to consume the Promise by logging the Promise object, and then using the then method to handle the resolved value (in this case, the orderId). This example helps illustrate the basic structure of creating and consuming Promises in JavaScript, along with the concept of asynchronous operations.
*/

const cart1 = ["shoes", "pants", "kurta"];

// Consumer Part - consuming a promise
const promise1 = createOrder(cart1); // outputs orderId
console.log(promise1);

promise1
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Producer Part - creating a promise

function createOrder(cart1) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart1)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart1) {
  return false;
}

/* 
Error Handling when a promise is rejected
- In the validateCart function, we modified the logic to always return false, indicating that the cart is not valid. This change ensures that the Promise is rejected in case of an invalid cart.
- we added a .catch block after the .then block to handle the rejection. If the Promise is rejected (due to the cart being invalid), this block will be executed, and it logs the error message to the console.
- With these changes, the Promise returned by createOrder will be rejected when the cart is deemed invalid by the validateCart function. The .catch block in the consumer part will then handle the rejection and log the error message to the console.
*/

const cart2 = ["shoes", "pants", "kurta"];

// Consumer Part - consuming a promise
createOrder(cart2) // outputs orderId
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("No matter what happens, i will definately be called");
  });

// Producer Part - creating a promise

function createOrder(cart2) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart2)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart2) {
  return false;
}

/* 
Promise Chaining & Error Handling
- we are using Promise chaining to perform asynchronous operations related to creating an order (createOrder) and processing payment (proceedToPayment).

Promise Chaining

1.createOrder Promise:
- The createOrder function is assumed to return a Promise that resolves to an orderId.
- The first .then() block logs the orderId to the console and returns it.

2.Error Handling with the First .catch():
- If an error occurs in the createOrder process (e.g., due to an invalid cart), the control transfers to the first .catch() block, logging the error message.

3.Continuation with Second .then():
- Regardless of whether there was an error or not, the execution continues to the second .then() block.
- The second .then() block calls proceedToPayment with the orderId and returns the result.

4.Processing Payment with Third .then():
- The third .then() block logs the paymentInfo to the console.

5.Error Handling with the Second .catch():
- If an error occurs during payment processing (e.g., payment failure), the control transfers to the second .catch() block, logging the error message.

6.Final .then():
- Regardless of previous errors, the execution continues to the final .then() block, which logs a message indicating that it will be called no matter what happened before.

Importance of .catch() Position:

Immediate .catch():
- Placing a .catch() immediately after a .then() allows you to handle errors specific to that step in the Promise chain.
- It doesn't prevent subsequent .then() blocks from executing; each .then() block runs independently.
- However, if an error occurs in any previous step, the control is transferred to the nearest .catch(), and subsequent .then() blocks after the error are skipped.

Deferred .catch():
- If you place a .catch() block later in the chain (not immediately after a .then()), it becomes a catch-all for any errors that occurred before it in the chain.
- It allows you to handle errors that were not handled by earlier .catch() blocks.

Error Propagation:

Error Propagation in Promise Chain:
- If an error occurs in any .then() block, the control is immediately transferred to the nearest .catch() block in the chain.
- The .catch() block handles the error, and subsequent .then() blocks are still executed, but their fulfillment handlers are bypassed if there was an error in a preceding .then() block.

Deferred Error Handling:
- If an error is not handled immediately after a .then(), it propagates to the next available .catch() in the chain.
- This deferred error handling allows you to handle errors at a higher level in the chain if they were not handled at specific points.

- In summary, the position of .catch() matters in how errors are handled in a Promise chain. Immediate .catch() blocks handle errors specific to preceding .then() blocks, while deferred .catch() blocks act as catch-alls for any unhandled errors in the chain. The order of .then() and .catch() blocks determines the flow of error handling in the Promise chain.
*/
