// guess the o/p
// practice question 
const fruit = ['🍎', '🍇', '🍊'];

fruit.slice(0, 1); // This will return index 0 to index 1 (not inclusive) of the original array i.e; first element of an array '🍎'. However, this does not modify the original fruit array.
fruit.splice(0, 1); // Removes 1 element at index 0, which is '🍎'
fruit.unshift("🍌"); // unshift method will add "🍌" to the beginning of an array.

console.log(fruit);
// Answer ["🍌", "🍇", "🍊"];
