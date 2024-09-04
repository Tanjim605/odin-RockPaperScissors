const winnerEl = document.getElementById('winner')
const personScoreEl = document.getElementById('person-score')
const computerScoreEl = document.getElementById('computer-score')


let personScore = 0
let computerScore = 0


function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice

    switch (randomNumber) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissor"
            break;
        default:
            break;
    }

    // console.log(computerChoice);
    return computerChoice
}

let winner;
function getPersonChoice(choice) {
    let personChoice = choice

    let computerChoice = getComputerChoice()

    console.log("person: ", personChoice);
    console.log("computer: ", computerChoice);

    winner = getWinner(personChoice, computerChoice)

    print()
}

function print(){
    winnerEl.innerHTML = winner;
    personScoreEl.innerHTML = personScore;
    computerScoreEl.innerHTML = computerScore;
}


function getWinner(person, computer) {
    let verdict;
    if (person == computer) {
        console.log("draw");
        verdict = "draw"
    }
    else {
        if (person == "rock") {
            if (computer == "scissor") {
                console.log("person winner");
                verdict = "person"
    
            }
            else {
                console.log("computer winner");
                verdict = "computer"
    
            }
        }
        else if (person == "paper") {
            if (computer == "rock") {
                console.log("person winner");
                verdict = "person"
    
            }
            else {
                console.log("computer winner");
                verdict = "computer"
    
            }
        }
        else if (person == "scissor") {
            if (computer == "paper") {
                console.log("person winner");
                verdict = "person"
    
            }
            else {
                console.log("computer winner");
                verdict = "computer"
    
            }
        }
    }
    if(verdict == "computer")
        computerScore++
    else if(verdict == "person")
        personScore++

    return verdict
}
// getPersonChoice()