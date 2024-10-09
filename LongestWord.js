/*Question: Longest word in a string*/

// Write a function to findalongest that takes string as an input and returns the longest word in the string. If there are multiple longest words, return the first encountered.

// Constraints:
//1. Input string can contain alphabetic characters, digits, spaces and punctuation.
//2. The Input string is non-empty
//3. The input string can contain multiple words seperatd by spaces.

//Note:
// If input string is empty or contains whitespace, the function should return as false.
// The function should ignore the white spaces when finding the longest word.

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let strArr = str.split(" ");
  strArr = strArr.sort((a, b) => a.length - b.length); // It gets sort on the basis of Unicode and it starts with capital letters.
  console.log(strArr);
  return strArr.at(-1);
};

console.log(findLongestWord("Hello, How are you doing Rutvik ?"));
// Solution using different way 

// const findLongestWord = (str) => {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   let arr = str.split(" ");
//   arr = arr.sort((a, b) => b.length - a.length) ;
//   console.log(arr);
//   return arr.at(0);
// }

// console.log(findLongestWord("Hi, how are you doing?"));
