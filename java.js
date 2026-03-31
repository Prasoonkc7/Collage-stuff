// ------------------------------
// Array Declarations
// ------------------------------

// Method 1: Using array literal
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Initial array:", fruits);

// Method 2: Using Array constructor
let numbers = new Array(10, 20, 30, 40);
console.log("Numbers array:", numbers);

// ------------------------------
// Array Methods Demonstration
// ------------------------------

// 1. push() - adds element at the end
fruits.push("Pineapple");
console.log("After push:", fruits);

// 2. pop() - removes last element
let popped = fruits.pop();
console.log("After pop:", fruits, "Popped element:", popped);

// 3. unshift() - adds element at the beginning
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// 4. shift() - removes first element
let shifted = fruits.shift();
console.log("After shift:", fruits, "Shifted element:", shifted);

// 5. slice(start, end) - extracts a portion of array (end not included)
let someFruits = fruits.slice(1, 3);
console.log("Slice (1,3):", someFruits);

// 6. splice(start, deleteCount, item1, item2, ...) - modifies array
fruits.splice(1, 1, "Kiwi", "Grapes"); // Remove 1 element at index 1, add 2 new
console.log("After splice:", fruits);

// 7. concat() - joins two arrays
let combined = fruits.concat(numbers);
console.log("Concatenated array:", combined);

// 8. join(separator) - joins array elements into string
let joinedFruits = fruits.join(", ");
console.log("Joined fruits:", joinedFruits);

// 9. indexOf(element) - finds index of element
let index = fruits.indexOf("Mango");
console.log("Index of Mango:", index);

// 10. toString() - converts array to string
console.log("toString():", fruits.toString());

// 11. sort() - sorts array elements (alphabetically for strings)
fruits.sort();
console.log("Sorted fruits:", fruits);

// 12. reverse() - reverses array order
fruits.reverse();
console.log("Reversed fruits:", fruits);

// 13. forEach(callback) - iterates through array
console.log("Using forEach:");
fruits.forEach(function(item, i) {
    console.log(`Index ${i}: ${item}`);
});