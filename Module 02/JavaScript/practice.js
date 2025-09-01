// config prompt func
const prompt = require(`prompt-sync`)();


function voting_system(){
    let username = prompt("Enter your name here: ")
    let age = prompt("Enter your age here: ")
    let phone_number = prompt("Enter your phone# here: ")
    let gender = prompt("Enter your gender here: ")

    if (age >= 18 && age <= 60){
        if (gender === "male"){
            console.log(`${username} is eligible to vote`)
        }
        else {
            console.log(`${username} is not eligible to vote`)
        }
    }
    else{
        console.log(`You're not eligible to vote`)
    }
}


function candidates (){
    const parties = ["ABC Party", "PQR Party", "LMN Party", "Congress", "Muslim League"]
    x = 1
    for (let i in parties){
        console.log(`${x}: ${i}`)
        x ++
    }

    let user_party = prompt("Enter your selected party number: ");

    if (parseInt(user_party) === 1){ 
        console.log(`You have selected ${parties[0]}`)    
    } 

    else if (parseInt(user_party) === 2) {
        console.log(`Your have selected ${parties[1]}`) 
    }

    else if (parseInt(user_party) === 3) {
        console.log(`Your have selected ${parties[2]}`)
    }

    else if (parseInt(user_party) === 4) {
        console.log(`Your have selected ${parties[3]}`)
    }

    else if (parseInt(user_party) === 5) {
        console.log(`Your have selected ${parties[4]}`)
    }
    else {
        console.log("Pls enter the correct Candidate ID Number!")
    }
}