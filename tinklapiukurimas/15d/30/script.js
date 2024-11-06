// 1

const faren = (celc) => celc * 1.8 + 32;
console.log(faren(22));

//2
console.log("______________");

const compareBMI = (firstWeight, firstHeight, secondWeight, secondHeight) => {
  return firstWeight / (firstHeight ** 2) > secondWeight / (secondHeight ** 2);
};
console.log(compareBMI(70, 1.85, 68, 1.87));

// 3
console.log("______________");

const rectangleArea = (a, b) => {
  return a * b;
};
console.log(rectangleArea(5, 6));

// 4
console.log("______________");

const findType = (element) => {
  return typeof element;
};
console.log(findType("Jurgis"));

// 5
console.log("______________");

const remainderOf = (a, b) => {
  return a % b;
};
console.log(remainderOf(10, 1));
console.log(remainderOf(10, 2));
console.log(remainderOf(10, 3));
console.log(remainderOf(10, 4));
console.log(remainderOf(129, 17));

// 6
console.log("______________");

const fn = () => {
  console.log("Hello, World!");
};
const callNtimes = (n, fn) => {
  for (let i = 0; i < n; i++) {
    fn();
  }
};
callNtimes(5, fn);
