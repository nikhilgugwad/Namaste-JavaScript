/* Promise APIs + Interview Questions */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("P2 Success");
  //   }, 3000);
  setTimeout(() => {
    reject("P2 failed");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors[0]); // this statement will log all the errors that are grouped in an array or a particular error we wish to display in console.
  });

/* 
Promise.all()
- In JavaScript, the Promise.all() method is used to handle multiple promises concurrently. It takes an iterable (such as an array) of promises as input and returns a new promise that resolves to an array of the resolved values of the input promises, in the same order as the input promises.
- If any of the promises within the array passed to Promise.all() fails (i.e., is rejected), the entire Promise.all() operation is considered to be in a rejected state. In such a case, the catch() callback will be invoked, and it will receive the reason (error) of the first promise that was rejected.
 
Promise.allSettled()
- Promise.allSettled() is another method in JavaScript for handling multiple promises, but unlike Promise.all(), it doesn't short-circuit when one of the promises is rejected. Instead, it waits for all promises to settle, whether they are fulfilled (resolved) or rejected.
- when all promises get settled it stores all the results of these promises in an array and each element of this array is an object.

Promise.race()
- Promise.race() is a method in JavaScript that takes an iterable of promises and returns a new promise that resolves or rejects as soon as the first promise in the iterable resolves or rejects. It essentially races multiple promises against each other and settles based on the outcome of the first promise.
- the output is not an array instead it returns the value of the first resolved promise or an error message if the first promise got rejected.

Promise.any()
- The Promise.any() method is a relatively new addition to JavaScript (introduced in ECMAScript 2021) and is similar to Promise.race(). However, there's a key difference: while Promise.race() settles as soon as the first promise settles (either resolves or rejects), Promise.any() settles as soon as the first promise in the iterable resolves. If all promises are rejected, Promise.any() will reject with an AggregateError containing an array of rejection reasons.
*/
