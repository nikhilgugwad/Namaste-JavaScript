/* Async await */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello World!!");

  const val = await p1;
  console.log("Namaste Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste Javascript!");
  console.log(val2);
}
handlePromise();

/*
Mechanism
- a function with a async keyword always returns a promise
- whenever handlePromise() is called it is placed in the call stack
- on line 16, it immediately logs "Hello World!!"
- when JS Engine reaches line 18, it checks whether the p1 promise is resolved or not, if it is not resolved it will not further move to the next line to execute the code
- after 5 secs, when the p1 promise is resolved the next two log statements are executed that are on line 19 & 20
- meanwhile when the p1 promise is being resolved which takes 5 secs in our example, the handlePromise() is suspended from our call stack for the duration of 5 secs, the JS Engine doesn't wait or stopped until 5 secs the call stack is still active to recieve any functions
- when 5 secs are passed and p1 promise is resolved, the handlePromise() reappears on the call stack for further execution.
- when JS Engine encounters another promise p2 on line 22, the handlePromise() will be suspended from the call stack to wait for another 5 secs until it resolves p2, because all promises that come under async() run at once that's the reason the 5 secs were still remaining for promise p2.
- so when p2 is resolved the following log statements are also printed that are on line 23 & 24
- let's take another case where p1 will 10 secs to resolve whereas p2 takes only 5 secs to resolve, in this case the log statements following both p1 & p2 will be printed only after 10 secs, This happens because when p1 is encountered by JS Engine the p1 takes 10 secs to resolve, and the JS Engine can only execute the next line when 10 secs are passed, by the time when 10 secs are passed the p2 would have also been resolved because it takes only 5 secs as discussed earlier all promises are run at a time.
- after 10 secs when JS Engine reaches on line 22 it discovers that p2 has already been resolved it simply logs the statements followed by val2 variable
*/

const API_URL = "https://api.github.com/users/nikhilgugwad";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}
handlePromise(); // Another way to handle errors handlePromise().catch((err) => console.log(err));

/* 
real world example 
- we have a constant API_URL representing a GitHub user's API endpoint.
- You define an asynchronous function called handlePromise()
- The async keyword before the function declaration indicates that the function contains asynchronous operations, and the await keyword is used inside the function to wait for the resolution of promises. In this case, you're making an HTTP request to the GitHub API using the fetch function, and then you're parsing the response JSON using data.json().
- the fetch() always returns a response object.
- we call the handlePromise function.Since handlePromise is an asynchronous function, calling it returns a promise. However, since it's not captured or handled in the example, it runs asynchronously, and the program continues with the rest of its execution.

more about fetch()
- the fetch() function in JavaScript always returns a Response object, which represents the response to a request. The Response object contains information about the response, such as the status, headers, and a readable stream representing the response body.
- To access the actual data received from the request, we need to use methods provided by the Response object. The response body can be extracted using methods like text(), json(), blob(), etc., depending on the content type of the response.
- These methods allow us to extract the actual data from the response body and work with it in the appropriate format.We should keep in mind that the choice of method depends on the expected content type of the response. If the response is JSON, we should use json(), if it's plain text,we use text(), and so on.
*/


