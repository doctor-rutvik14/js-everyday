// get the positive elements from an Array

let arr = [1, -2, 3, 4, -4, 9, 6, -5, -8];

const newArray = arr.filter((num) => num > 0);
// Defining a condition inside the filter method is necessary.
console.log(newArray);
// [1,3,4,9,6]
