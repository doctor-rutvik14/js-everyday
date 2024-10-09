/* 
1. Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100
*/

const isEqual100 = (a, b) =>
  a === 100 || b === 100 || a + b === 100
    ? "One of the numbers is 100 or their sum is 100"
    : "Neither number is 100, nor is their sum 100";

console.log(isEqual100(100, 0));
console.log(isEqual100(0, 100));

console.log(isEqual100(10, 0));
console.log(isEqual100(0, 1000));

console.log(isEqual100(20, 80));
console.log(isEqual100(90, 10));
