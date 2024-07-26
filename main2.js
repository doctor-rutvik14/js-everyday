// basic js questions for practice
const arr = [1, 2, 3, 4];

let pop = arr.pop(); // Will remove the last element of an Array. And pop will store the element.
let shift = arr.shift(); // This will remove the firste lement from an Array. And shift will store the element.

// Both pop and shift method will change the original array unlike slice method.

console.log(pop); // 4
console.log(shift); // 1
console.log(arr); // [2,3]
