// Nested Arrays and Objects


// let my_array = ["Shaheer", 20, 1989, "Pakistan", true]

// let nested_array = [
//     ["Shaheer", "Pakistan", "karachi"],
//     ["Computer", "Maths", "Urdu"], 
//     {
//         country:"America",
//         states:50, 
//         capital:"Washington DC",
//         president:"Trump"
//     }
// ]

// Accessing an array's object value
// console.log(nested_array[2].capital)
   
// Accessing an array's array value
// console.log(nested_array[1][1])

// console.log(nested_array)


// nested_array[2].country = "Pakistan";
// nested_array[2].capital = "Islamabad";


// nested_array[2].national_language = "English"

// console.log(nested_array)


// Nested Object
// 1 Obj ke ander 3 Objs

let nested_object = {
    AI: {
        teacher: "Shaheer",
        1: "Hammad",
        2: "Wahab", 
        3: "Anas", 
        4: "Abdullah", 
        5:"Hyder"
    },

    CCO: {
        teacher: "Shaheer", 
        1:"Aalish", 
        2:"Maaz",
        3:"Usman"
    }, 

    Nazra: {
        teacher: "Hammad", 
        1:"Umar", 
        2:"Mahad",
        3:"Tehami"
    }
}

// access
// console.log(nested_object.AI[5])


// modify
nested_object.AI[5] = "Haider"


// addd
nested_object.graphic_designing = {
    teacher: "Hasnain",
    1:"Umar", 
    2:"Mahad",
    3:"Tehami"
}
console.log(nested_object)