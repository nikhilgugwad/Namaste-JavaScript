/* TRUST ISSUES with setTimeout() */

console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("end");

// millions of lines of code

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires");

/*  
Event-driven and Asynchronous nature of JavaScript 
- The code starts by logging "start" to the console.
- The setTimeout function is called, scheduling the execution of the callback function cb after a delay of 5000 milliseconds (5 seconds).
- "end" is logged to the console.
- The code enters a while loop that performs a busy wait (synchronous blocking) for 10 seconds. This loop prevents the event loop from progressing, and the JavaScript engine is busy executing this loop.
- While the while loop is running, the 5-second timer set by setTimeout is counting down in the background. However, the event loop is unable to execute the callback function (console.log("Callback")) because it's blocked by the synchronous while loop.
- After the while loop completes its 10-second duration, "while expires" is logged to the console.
- Now that the while loop has finished, the event loop becomes free, and it can execute the callback function from the setTimeout. "Callback" is finally logged to the console.
- The while loop acts as a synchronous blocking operation, preventing the event loop from handling other tasks, including the execution of the setTimeout callback. The asynchronous nature of setTimeout allows it to schedule the callback for later execution, but it can only be executed when the event loop is available.
- Because of javascript being a single threaded language, the setTimeout() doesn't guarantee that the callback function will be executed after a specified time duration that is passed as a parameter. 
*/

