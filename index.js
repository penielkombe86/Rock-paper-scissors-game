// references to the DOM
let humanChoice = document.getElementById("human-choice")
let computerChoice = document.getElementById("comp-choice")
let  humanScoreBoard = document.getElementById("human-score")
let computerScoreBoard = document.getElementById("computer-score")
let buttonContainer = document.querySelector(".button-container")
let roundContainer = document.querySelector(".round")

let tryAgain = document.getElementById("try-again")
let playAgain = document.getElementById("play-again")
let tie = document.getElementById("tie")

let rockBtn = document.getElementById("rock-btn")
let paperBtn = document.getElementById("paper-btn")
let scissorsBtn = document.getElementById("scissors-btn")

let compScore = 0
let humanScore = 0

// create divs and insert the rock, paper , scissors images in them
let rock = document.createElement("div")
rock.id = "rock"
rock.innerHTML = "<img src='./images/rock-icon.png' style='width: 60px; height: 50px' alt='rock-icon'>"

let paper = document.createElement("div")
paper.id = "paper"
paper.innerHTML = "<img src='./images/paper-icon.png' style='width: 60px; height: 50px;' alt='paper-icon'>"

let scissors = document.createElement("div")
scissors.id = "scissors"
scissors.innerHTML = "<img src='./images/scissors-icon.png' style='width: 60px; height: 50px' alt='scissor-icon'>"

let compChoice = [rock, paper, scissors]

// handles the player selection of the options
function playerSelection(event) {
    // locates if the click event originated from a button element
    let target = event.target.closest("button")

    let randomCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)]

    // use cloneNode to create a copy of the images because html element can only exist one place at time
    let randomChoice = randomCompChoice.cloneNode(true)

    if (target.id === "rock-btn") {
        humanChoice.replaceChildren(rock)
        computerChoice.replaceChildren(randomChoice)
    }
    else if (target.id === "paper-btn") {
        humanChoice.replaceChildren(paper)
        computerChoice.replaceChildren(randomChoice)
    }

    else if (target.id === "scissors-btn") {
        humanChoice.replaceChildren(scissors)
        computerChoice.replaceChildren(randomChoice)
    }

}

// get winner using the iD's on the rock, paper, scissors images
function getWinner() {
    if (humanChoice.firstElementChild.id === "rock" && computerChoice.firstElementChild.id === "scissors") {
        return "human"
    }
    else if (humanChoice.firstElementChild.id === "paper" && computerChoice.firstElementChild.id === "rock") {
        return "human"
    }
    else if (humanChoice.firstElementChild.id === "scissors" && computerChoice.firstElementChild.id === "paper") {
        return "human"
    } else if (humanChoice.firstElementChild.id === computerChoice.firstElementChild.id) {
        return "tie"
    }
    else {
        return "computer"
    }

}

// update score using data from the getWinner() function
function updateScore(winner) {
    if (winner === "human") {
        humanScore++
        humanScoreBoard.textContent = humanScore
    }
    else if (winner === "computer") {
        compScore++
        computerScoreBoard.textContent = compScore
    }
    else if (winner === "tie") {
        humanScore = humanScore
    }

}

//  track the number of rounds played and display popUp buttons
function trackRounds() {    
    if (roundCounter < maxScore) {
        roundCounter++
    }
    else {
        popUps()
    }
}
// display the popup buttons after getting the winner
function popUps() {
    if (roundCounter === maxScore) {

        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true

        if (humanScore > compScore) {
            playAgain.style.display = "block"

        }
        else if (humanScore < compScore) {
            tryAgain.style.display = "block"
        }
        else {
            tie.style.display = "block"
        }
    }
}


let roundCounter = 0
let maxScore = 5

// main game logic
function playGame() {
    if (!event.target.closest("button")) return

    playerSelection(event)
    let winner = getWinner()
    updateScore(winner)

    trackRounds()
}

function resetGame() {
    // locate if the click event originated from a button element
    if (!event.target.closest("button")) return 

    // reset the counter variables
    compScore = 0
    humanScore = 0
    roundCounter = 0
    
    // reset the humanChoice div and computerChoice div
    humanChoice.replaceChildren("Human")
    computerChoice.replaceChildren("Computer")

    // reset the entire score board back to 0 
    humanScoreBoard.replaceChildren("0") 
    computerScoreBoard.replaceChildren("0")

    // enable the disabled buttons
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false

    // hides the popups
    playAgain.style.display = "none"
    tryAgain.style.display = "none"
    tie.style.display = "none"

}


buttonContainer.addEventListener("click", playGame)
roundContainer.addEventListener("click", resetGame)
