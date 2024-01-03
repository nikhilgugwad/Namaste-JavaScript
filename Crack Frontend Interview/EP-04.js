/* Debouncing in Javascript */

let counter = 0;

// Simulates fetching data from an API
const getData = () => {
  console.log("Fetching Data..", counter++);
};

// Higher-order function that returns a debounced version of a function
const doSomeMagic = function (fn, delay) {
  let timer;
  
  // debounced function
  return function () {
    let context = this,
      args = arguments;

    // Clear any existing timers
    clearTimeout(timer);

    // Set a new timer for delayed execution
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// Applying the debouncing function to getData with a delay of 300 milliseconds
const betterFunction = doSomeMagic(getData, 300);

/* 
- Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making the application more efficient by postponing the execution of a function until after a certain delay.
or
- debouncing technique in JavaScript, which is a way to control the rate at which a function is invoked. The primary use case for debouncing is to limit the frequency of certain operations, such as handling user input or making network requests, in order to improve performance and prevent unnecessary computations.

Working
1.getData Function:
- getData is a function that simulates fetching data from an API.
- In this example, it logs a message to the console ("Fetching Data..") and increments a counter each time it's called.

2.doSomeMagic Debouncing Function:
- doSomeMagic is a higher-order function that takes two parameters: fn (the function to be debounced) and delay (the delay in milliseconds).
- It returns a new function, the debounced version of the original function.

3.Debounced Function:
- The returned function (the debounced version) has its own timer variable.
- When this debounced function is called, it clears any existing timers using clearTimeout(timer).
- It then sets a new timer using setTimeout for delayed execution of the original function.
- The original function (fn) will be invoked after the specified delay (delay) if no new invocations occur in that time frame.

4.Usage of Debounced Function:
- betterFunction is created by applying doSomeMagic to getData with a delay of 300 milliseconds.
- This means that betterFunction is now a debounced version of getData that will only invoke getData if there is no new invocation within 300 milliseconds.

5.Invocation of Debounced Function:
- When betterFunction is called, it doesn't immediately invoke getData.
- Instead, it waits for 300 milliseconds after the last invocation before actually calling getData.
- This helps to prevent rapid and potentially unnecessary calls to getData, especially in scenarios where the function might be triggered frequently (e.g., user typing in an input field).

Note:

More about clearing the timer
- The clearing of the timer is crucial for the debouncing mechanism, even if the debounced function (betterFunction) is called after every keystroke.
- Without clearing the timer, every time betterFunction is called (e.g., after each keystroke), a new timer is set.
- By clearing the existing timer before setting a new one, you ensure that the original function will be executed only after the specified delay (300 milliseconds in this case) since the last invocation of betterFunction. This delay prevents immediate and potentially unnecessary executions of the original function.
- Clearing the timer helps optimize resource usage. If, for example, a user is typing quickly, you don't want to trigger unnecessary invocations of the expensive operation (e.g., fetching data from an API) for each keystroke. The debouncing mechanism ensures that the expensive operation is performed only after a certain quiet period, reducing the number of times it's executed.
- if we don't clear the timer and instead create a new timer with each stroke, it would result in potentially triggering an API call for every stroke. Without the debouncing mechanism, the original function (getData in this case, simulating an API call) would be scheduled to execute after the delay for each keystroke.
- Without clearing the timer, each keystroke sets a new timer, potentially leading to multiple timers running concurrently. This means that the original function (getData) would be scheduled to execute after the delay for every keystroke, resulting in frequent API calls.

let context = this
- captures the value of the this keyword at the moment it is executed and assigns it to the variable context. The purpose of this line is to store the current context (the value of this) in the variable context so that it can be later used inside the debounced function.

args = arguments
- Captures the arguments passed to the debounced function when it is invoked. The arguments object is automatically created and populated with the values of the parameters passed to the function.
*/
