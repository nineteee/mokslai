"use strict";

// 1
function product(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

console.log(product([2, 4, 6]));
console.log(product([-10, 10]));

// 2
const anyPositive = function (arr) {
  console.log(arr.some(number => number > 0));
};

anyPositive([1, 2, 3, 4, 5]); 
anyPositive([-10, -10, -10]); 

// 3
const positives = function (arr) {
  console.log(arr.filter(num => num > 0));
};

positives([1, -3, 5, -3, 0]);

// 4
const mean = function (arr) {
  const avg = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
  console.log(avg);
};

mean([30, 10, 20]);
mean([-10, 10]);

// 5
const evens = function (arr) {
  console.log(arr.filter(num => num % 2 === 0));
};

evens([1, 2, 4, 3, 8]);

// 6
const odds = function (arr) {
  console.log(arr.filter(num => num % 2 !== 0));
};

odds([1, 2, 4, 3, 8]);

// 7
const integers = function (arr) {
  console.log(arr.filter(num => Number.isInteger(num)));
};

integers([3.14, 2.4, 7, 8.1, 2]);

// 8
const countEvens = function (arr) {
  return arr.filter(num => num % 2 === 0).length;
};

console.log(countEvens([1, 2, 3, 4, 5]));

// 9
const countLessThan = function (arr, filter) {
  return arr.filter(num => num < filter).length;
};

console.log(countLessThan([1, 2, 3, 4, 5], 2));

// 10
const squareDance = function (arr) {
  return arr.map(num => num ** 2);
};

console.log(squareDance([1, 2, 3]));

// 11
const glueArrays = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(glueArrays([1, 2, 3], [4, 5, 6]));
// 12
const countValue = function (arr, value) {
  return arr.filter(num => num === value).length;
};

console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));

// 13
const findInHaystack = function (arr, value) {
  return arr.includes(value);
};

console.log(findInHaystack([1, 2, 30, -10], 30));

// 14
const firstIndexOf = function (arr, value) {
  return arr.findIndex(num => num === value);
};

console.log(firstIndexOf([10, 20, 30, 20], 20));
