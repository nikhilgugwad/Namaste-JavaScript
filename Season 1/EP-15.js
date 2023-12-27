/* Asynchronous JavaScript & EVENT LOOP from scratch */

/* 
Call Stack
- The call stack is a fundamental concept in the execution model of JavaScript, and it plays a crucial role in managing the flow of code execution. The call stack is used to keep track of function calls and their context during the execution of a program.
how the call stack works in a JavaScript engine:
1.Function Calls: When a JavaScript program starts executing, the main script or function is pushed onto the call stack.
2.Function Invocation: When a function is called, a new frame is created and pushed onto the call stack. This frame contains information about the function, such as its arguments and local variables.
3.Stack Execution: The JavaScript engine executes the function at the top of the call stack. When a function completes its execution, its frame is popped off the stack, and control returns to the calling function.
4.Nested Calls: If a function contains another function call, the inner function is added to the top of the call stack, and the process repeats.
5.Last-In, First-Out (LIFO): The call stack follows the Last-In, First-Out (LIFO) principle, meaning that the last function that was added is the first one to be executed and removed.
6.Recursion: Recursion involves a function calling itself. Each recursive call adds a new frame to the call stack.
7.Stack Overflow: If there are too many nested function calls without returning, the call stack can become full, leading to a "stack overflow" error.
*/

/* 
Web API's and Call Stack
- The Web API's, such as setTimeout, DOM APIs, fetch, localStorage, console, and location, are part of the Web API environment provided by the browser.
- These APIs are not directly implemented in JavaScript but are exposed to JavaScript code through the browser's environment
- When you invoke a function from these Web APIs (e.g., setTimeout, fetch), they are not executed immediately on the call stack. Instead, they initiate asynchronous operations and pass the associated callback functions to be executed later.
- For APIs like setTimeout or fetch, which involve asynchronous operations, the browser environment handles the execution. These operations are initiated, and the associated callback functions are scheduled to be added to the callback queue once the operation is complete.
- After the asynchronous operation is complete (e.g., a timer expires or an HTTP request completes), the associated callback function is placed in the callback queue.
- The event loop continuously monitors the call stack and the callback queue. When the call stack is empty, the event loop takes the first function from the callback queue and pushes it onto the call stack for execution.
- The callback function from the Web API is then executed on the call stack. This allows the asynchronous operation to complete without blocking the main thread.
- This asynchronous behavior allows JavaScript to handle non-blocking operations, ensuring a responsive user interface in web applications.Similar principles apply to other Web APIs like the DOM APIs (addEventListener, getElementById), fetch for making HTTP requests, and others. They leverage the event loop and callback queue to manage asynchronous tasks effectively.
 */

/* 
Window Object
- In JavaScript, the window object is the global object in a browser environment. It represents the browser window and provides a global context for executing JavaScript code in a web page. The window object contains various properties and methods that are globally accessible.
- Many global functions and properties related to the browser environment are properties of the window object. When you use these functions or properties without specifying an object, JavaScript implicitly looks for them on the window object.

// These two lines are equivalent
window.alert("Hello, world!");
alert("Hello, world!");

In the above example, alert is a property of the window object, and you can call it directly without explicitly mentioning window.

- When you declare variables or functions without using var, let, or const, they become properties of the window object. This behavior is often discouraged to avoid polluting the global namespace.

// Implicit global variable attached to the window object
notRecommendedGlobalVar = "Avoid implicit globals";

It's generally recommended to use var, let, or const to explicitly declare variables in a local scope to avoid unintentional global pollution.

- In a browser environment, window is the default global context. When you refer to a variable or function without a specific scope, JavaScript checks for it on the window object.

console.log(window === this); // true

Here, this refers to the global context, which is the window object in a browser.

- Now the question about not explicitly mentioning window for certain APIs like setTimeout, it's because these APIs are part of the global context by default. The global context in a browser environment is the window object. Therefore, when you call functions like setTimeout, fetch, or use the console object, JavaScript implicitly looks for these functions on the window object, and you don't need to specify window explicitly.
- In practice, it's common to omit window when dealing with these global functions and objects to make the code more concise and readable.
*/

/* 
Event loop
- The event loop is a fundamental concept in JavaScript that plays a crucial role in managing asynchronous operations and ensuring the responsiveness of web applications. It is part of the JavaScript runtime environment and is responsible for handling the execution of code in a non-blocking and efficient manner.

Working of Event loop
1.Call Stack:
- The call stack is a data structure that keeps track of function calls during the execution of a JavaScript program. When a function is called, a new frame is added to the top of the call stack, and when the function completes, its frame is removed.
2.Web API's:
- JavaScript engines in web browsers come with Web APIs (Application Programming Interfaces) that provide functionalities beyond the core language features. Examples include the DOM API, setTimeout, fetch, and more. These APIs are asynchronous and delegate their operations to the browser environment.
3.Callback Queue:
- Asynchronous operations initiated by Web APIs (such as timers, HTTP requests, and DOM events) are processed outside the JavaScript runtime. Once an asynchronous operation is complete, its callback function is placed in the callback queue.
4.Event loop:
- The event loop continuously monitors the call stack and the callback queue. When the call stack is empty, the event loop checks if there are any functions in the callback queue waiting to be executed.
5.Execution of Callbacks:
- If there are functions in the callback queue, the event loop takes the first one and pushes it onto the call stack for execution. This process repeats as long as there are functions in the callback queue and the call stack is empty.
6. Non-Blocking Execution:
- The event loop allows JavaScript to handle asynchronous operations in a non-blocking way. Instead of waiting for an asynchronous task to complete, the event loop allows the program to continue executing other tasks. This is essential for creating responsive user interfaces and managing concurrent operations.
This process allows JavaScript to efficiently handle asynchronous tasks without blocking the main thread, ensuring a responsive user experience in web applications.
*/

/* 
Callback Queue
- The callback queue is a key component of the event-driven, asynchronous nature of JavaScript. It is part of the runtime environment in browsers and plays a crucial role in managing asynchronous operations by queuing up callback functions that need to be executed.
The callback queue is often associated with
1.Timers:
- Functions scheduled with timers, such as those created with setTimeout and setInterval, are associated with the callback queue. When the specified time elapses, the associated callback function is added to the callback queue.
2.Network Requests:
- Callbacks related to network requests, such as those made with the fetch API or XMLHttpRequest, are added to the callback queue once the request is complete.
3.User Interface Events:
- Callbacks for handling user interface events, such as button clicks or keyboard events, are added to the callback queue when the corresponding event occurs.
4.Other Asynchronous Operations:
- Various other asynchronous operations, both browser-specific and standard, may use the callback queue. For example, callbacks associated with the DOM API, animation frames, and certain web APIs contribute to the callback queue.

The callback queue works in conjunction with the event loop to handle asynchronous tasks. The event loop continuously monitors the call stack and the callback queue, ensuring that callback functions in the queue are executed in the order they were added.


Microtask Queue
- The microtask queue, also known as the microtask queue or microqueue, is another queue in addition to the callback queue (or task queue) that plays a role in handling asynchronous operations in JavaScript. Microtasks are typically used for higher-priority tasks that need to be executed before the next rendering of the browser.
- While both microtasks and callbacks are used for handling asynchronous operations, they have different priorities. Microtasks are typically higher-priority tasks that are executed before callbacks.
- Microtasks are represented by the microtask queue and are often associated with promises, mutation observers, and other browser-specific features.
- The microtask queue is processed after the call stack becomes empty but before the callback queue. This means that microtasks are executed before the next rendering or event loop iteration.
- Promises are one of the main sources of microtasks in JavaScript. When a promise settles (fulfilled or rejected), its associated then or catch callbacks are added to the microtask queue.
- Mutation observers, another browser feature, also contribute to the microtask queue. They allow developers to react to changes in the DOM and schedule microtasks for their callback functions.
- The order of execution is crucial when it comes to microtasks. Microtasks are executed until the microtask queue is empty before moving on to the callback queue.

In summary, the microtask queue is a mechanism in JavaScript used for handling higher-priority asynchronous tasks, particularly associated with promises and mutation observers. Understanding the distinction between the microtask queue and the callback queue is essential for dealing with the order of execution in asynchronous code.
*/

/* 
Starvation of functions in callback queue
- In the context of JavaScript and its event-driven model, "starvation of functions in the callback queue" refers to a situation where certain callback functions in the callback queue are consistently delayed or unable to be executed because other tasks are continually taking precedence. This scenario can lead to delayed or blocked execution of specific callbacks, potentially impacting the responsiveness of an application.
Some factors that can contribute to the starvation of functions in the callback queue:
1.Long-running tasks: If there are long-running synchronous tasks on the call stack, such as heavy computations or loops, they can prevent the event loop from quickly processing items in the callback queue. As a result, callback functions might be delayed in their execution.
2.Blocking Operations: Certain blocking operations, such as synchronous XMLHttpRequests, can also contribute to the starvation of functions in the callback queue. Performing synchronous operations can freeze the main thread, preventing the prompt execution of other tasks.
3.Excessive Microtasks: While microtasks generally have higher priority than regular callbacks, excessive use of microtasks (e.g., promise resolutions) can lead to delayed execution of other types of callbacks in the callback queue.
4.Microtasks generally have a higher priority than regular callbacks. When the call stack is empty, the event loop first processes all the microtasks in the microtask queue before moving on to the callback queue.
5.If there is a continuous influx of microtasks or certain microtasks take a long time to complete, they can monopolize the event loop, delaying the execution of callback functions in the callback queue.
*/