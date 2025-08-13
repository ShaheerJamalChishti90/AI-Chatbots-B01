// Conditional Statements:

// Wo statements jin ke through hum conditions ke upper kaam karein

// Syntax 

// if (condition) {
//      console.log("print")
// }
// else {
    // console.log()
// }


// let x = 10; 

// if (x > 5) {
//         console.log("x is greater than 5")
//     } 
// else {
//         console.log("x is less than 5")
//     }
        
 
// let x = 2;

// if (x > 10) {
//     console.log(`${x}, is greater than 10`)
// }

// else if (x < 10 && x > 5) {
//     console.log(`${x} is less than 10 but greater than 5`)
// } 

// else {
//     console.log(`${x} is less than 5`)
// }




// Multiple ELSE IF STATEMENTS

// let marks = 81;

// if (marks >= 95) {
//     console.log(`Marks: ${marks}, Grade: A*, Scholarship: Fully Funded`)
// } 

// else if (marks < 95 && marks >= 90) {
//     console.log(`Marks: ${marks}, Grade: A, Scholarship: 85%`)
// } 

// else if (marks < 90 && marks >= 85) {
//     console.log(`Marks: ${marks}, Grade: B*, Scholarship: 75%`)
    
// }

// else if (marks < 85 && marks >= 80) {
//     console.log(`Marks: ${marks}, Grade: B, Scholarship: 65%`)
    
// }

// else if (marks < 80 && marks >= 75) {
//     console.log(`Marks: ${marks}, Grade: C*, Scholarship: 55%`)
    
// }

// else if (marks < 75 && marks >= 70) {
//     console.log(`Marks: ${marks}, Grade: C, Scholarship: 45%`)
// }

// else {
//     console.log(`We are sorry! your marks are less than 70% you failed the exams`)
// };


// Nested IF Statements

// if (condition) {
//     if (condition) {

//     }
// }


// male: age > 45 and age < 50 --> office
// male: age < 30 and age > 20 --> outdoor
// female: single and age < 35 
    // edu = masters: boarding member
    

// let male = 15;

// if (male > 45 && male < 50) {
//     console.log(`Male will work in the office`)
// } 

// else if (male < 30 && male > 20) {
//     console.log(`Male will work outdoor`)
// }

// else {
//     console.log(`Male is under age: Not Hired!`)
// }

let female_age  = 25;
let female_m_status  = "married";

if (female_age <= 35) {
    console.log("The first IF is true")
    if (female_m_status === "single") {
        console.log("You are the ideal candidate to work here")
    }
}

else {
    console.log("You are over-aged to work here")
}

