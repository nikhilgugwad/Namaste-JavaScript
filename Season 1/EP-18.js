/* Higher-Order Functions ft. Functional Programming */

const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));

/* 
- a lot of repetitive code which can be placed inside a function.
*/

const radius1 = [3, 1, 2, 4];

const area = function (radius1) {
  return Math.PI * radius1 * radius1;
};

const circumference = function (radius1) {
  return 2 * Math.PI * radius1;
};

const diameter = function (radius1) {
  return 2 * radius1;
};

const calculate = function (radius1, logic) {
  const output = [];
  for (let i = 0; i < radius1.length; i++) {
    output.push(logic(radius1[i]));
  }

  return output;
};

console.log(radius.map(area)); // using map() to iterate every element in an array and implement the logic of area

console.log(calculate(radius1, area));
console.log(calculate(radius1, circumference));
console.log(calculate(radius1, diameter));

/* Functional Programming */
