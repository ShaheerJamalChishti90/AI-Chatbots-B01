// Conditional Statements:

// Wo statements jin ke through hum conditions ke upper kaam karein

// Syntax 

// if (condition) {
//      console.log("print")
// }
// else {
    // console.log()
// }


let x = 10; 

if (x > 5) {
        console.log("x is greater than 5")
    } 
else {
        console.log("x is less than 5")
    }
        
 
// let x = 2;

// if (x > 10) {
//     console.log(`${x}, is greater than 10`)
// } else if (x < 10 && x > 5) {
//     console.log(`${x} is less than 10 but greater than 5`)
// } else {
//     console.log(`${x} is less than 5`)
// }




// Multiple ELSE IF STATEMENTS

let marks = 81;

if (marks >= 95) {
    console.log(`Marks: ${marks}, Grade: A*, Scholarship: Fully Funded`)
} 

else if (marks < 95 && marks >= 90) {
    console.log(`Marks: ${marks}, Grade: A, Scholarship: 85%`)
} 

else if (marks < 90 && marks >= 85) {
    console.log(`Marks: ${marks}, Grade: B*, Scholarship: 75%`)
    
}

else if (marks < 85 && marks >= 80) {
    console.log(`Marks: ${marks}, Grade: B, Scholarship: 65%`)
    
}

else if (marks < 80 && marks >= 75) {
    console.log(`Marks: ${marks}, Grade: C*, Scholarship: 55%`)
    
}

else if (marks < 75 && marks >= 70) {
    console.log(`Marks: ${marks}, Grade: C, Scholarship: 45%`)
}

else {
    console.log(`We are sorry! your marks are less than 70% you failed the exams`)
};