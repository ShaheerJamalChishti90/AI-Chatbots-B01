// Array Method

// Push() => Adds a new element in the end of an array
// let arr = [1, 2];
// arr.push("Pakistan"); 
// console.log(arr); 

// Pop() => Deletes the last value of an array
// let arr = [1, 2, 3];
// arr.pop(); 
// console.log(arr); // [1, 2]

// Shift() => Deletes the first value of an array
// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr); // [2, 3]

// Unshift() => Add value on the first index of an array 
// let arr = [2, 3];
// arr.unshift("Karachi");
// console.log(arr); 

// // Map() => Returns a new list
// let numbers = [1, 2, 3];
// let squared_numbers = numbers.map(x => x ** 2);
// console.log(squared_numbers); // [1, 4, 9]

// Filter() => Returns a new list
let numbers = [1, 2, 3, 4, 128, 86, 62, 71, 79, 37, 27];
let even_numbers = numbers.filter(x => x % 2 === 0);
console.log(even_numbers); // [2, 4, 86, 62, 128]
