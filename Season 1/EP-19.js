/* map, filter & reduce */

/* 
- In JavaScript, map, filter, and reduce are higher-order functions that operate on arrays. They provide a concise and functional programming style for working with arrays.
*/

// Doubling each element of an array using map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/* 
map()
- The map function applies a given function to each element of an array and returns a new array with the results.
*/

// Filtering even numbers from an array
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

/* 
filter()
- The filter function creates a new array containing only the elements that satisfy a given condition.
*/

// Summing all elements of an array using reduce
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

/* 
reduce()
- The reduce function reduces an array to a single value by applying an accumulator function to each element. It takes an initial value for the accumulator and iterates through the array.
- In this example, the reduce function starts with an initial accumulator value of 0 and iterates through each element of the array, adding it to the accumulator. 
*/

