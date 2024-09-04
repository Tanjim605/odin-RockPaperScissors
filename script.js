const winnerEl = document.getElementById('winner')
const personScoreEl = document.getElementById('person-score')
const computerScoreEl = document.getElementById('computer-score')
const youChoosedEl = document.getElementById('you-choosed')
const computerChoosedEl = document.getElementById('computer-choosed')
const resultEl = document.getElementById('result-board')

let personScore = 0
let computerScore = 0
let winner;


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


function getPersonChoice(choice) {
    let personChoice = choice

    let computerChoice = getComputerChoice()

    console.log("person: ", personChoice);
    console.log("computer: ", computerChoice);

    winner = getWinner(personChoice, computerChoice)

    print(personChoice, computerChoice)
}

function print(personChoice, computerChoice){
    resultEl.style.visibility = "visible";
    youChoosedEl.innerHTML = personChoice;
    computerChoosedEl.innerHTML = computerChoice;
    winnerEl.innerHTML = winner;
    personScoreEl.innerHTML = personScore;
    computerScoreEl.innerHTML = computerScore;
}


function getWinner(person, computer) {
    let verdict;
    if (person == computer) {
        console.log("Tie");
        verdict = "Tie"
    }
    else {
        if (person == "rock") {
            if (computer == "scissor") {
                console.log("person winner");
                verdict = "You"
    
            }
            else {
                console.log("computer winner");
                verdict = "Computer"
    
            }
        }
        else if (person == "paper") {
            if (computer == "rock") {
                console.log("person winner");
                verdict = "You"
    
            }
            else {
                console.log("computer winner");
                verdict = "Computer"
    
            }
        }
        else if (person == "scissor") {
            if (computer == "paper") {
                console.log("person winner");
                verdict = "You"
    
            }
            else {
                console.log("computer winner");
                verdict = "Computer"
    
            }
        }
    }
    if(verdict == "Computer")
        computerScore++
    else if(verdict == "You")
        personScore++

    return verdict
}
// getPersonChoice()