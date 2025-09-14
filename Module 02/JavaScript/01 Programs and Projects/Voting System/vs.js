const prompt = require(`prompt-sync`)();

function voting_system()
{
    let username = prompt("Enter your name here: ")
    let age = prompt("Enter your age here: ")
    // let phone_number = prompt("Enter your phone# here: ")
    // let gender = prompt("Enter your gender here: ")

    if (age >= 18 && age <= 60){
        // console.log(`You're eligible to vote`)
        eligiblity = true
        console.log("Below are the election candidates list;\nSelect any candidate by their id number to vote. ")
        console.log("____________________________________________________________________________")
    }
    else{
        eligiblity = false
    }
    
    if (eligiblity == true){
        candidates()
    }
    else{
        console.log(`You're not eligible to vote`)
    }
}

// voting_system()

function candidates (){
    const parties = ["ABC Party", "PQR Party", "LMN Party", "Congress", "Muslim League"]
    x = 1
    for (let i in parties){
        console.log(`${x}: ${parties[i]}`)
        x ++
    }

    user_party = prompt("Enter your selected candidate id to vote them: ");

    if (parseInt(user_party) === 1){ 
        console.log(`You have voted to ${parties[0]}`)    
    } 

    else if (parseInt(user_party) === 2) {
        console.log(`Your have voted to ${parties[1]}`) 
    }

    else if (parseInt(user_party) === 3) {
        console.log(`Your have voted to ${parties[2]}`)
    }

    else if (parseInt(user_party) === 4) {
        console.log(`Your have voted to ${parties[3]}`)
    }

    else if (parseInt(user_party) === 5) {
        console.log(`Your have voted to ${parties[4]}`)
    }
    else {
        while (user_party > 5){
            console.log("Pls enter the correct Candidate ID Number!")
            user_party = prompt("Enter your selected candidate id to vote them: ");
            if (user_party <= 5){
                console.log(`Your have voted to ${parties[user_party]}`)
            }
        }   
    }
}

// candidates()

function final_system(){
    voting_system()
    // candidates()

}

final_system()