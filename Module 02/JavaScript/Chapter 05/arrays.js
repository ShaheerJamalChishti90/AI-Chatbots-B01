// [] => Array

// let my_array = ["Shaheer Jamal", 100, 1.23, true, null, undefined]
// console.log(my_array[2])



// Accessing the arrays element through indexing
// let my_array = [10, 12, 53, 48, 521, 326, 3217, 82, 9]
// console.log(my_array[4])


// Adding new element in an array
let fruits = ["apples", "bananas", "mangos"];
fruits[3] = "appricot";
console.log(fruits)


// Changing the existing element of an array
let fruits = ["apples", "bananas", "mangos"];
let new_fruits = [...fruits];
new_fruits[0] = "pineapple";

console.log(fruits);
console.log(new_fruits);
