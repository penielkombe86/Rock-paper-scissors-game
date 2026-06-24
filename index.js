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


function playerSelection(event) {
    let target = event.target.closest("button")

    let randomCompChoice = compChoice[Math.floor(Math.random() * compChoice.length)]
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



let compScore = 0
let humanScore = 0


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

function trackRounds() {    
    if (roundCounter < maxScore) {
        roundCounter++
    }
    else {
        popUps()
    }
}

function popUps() {
    if (roundCounter === maxScore) {
        if (humanScore > compScore) {
            playAgain.style.display = "block"
            rockBtn.disabled = true
            paperBtn.disabled = true
            scissorsBtn.disabled = true
        }
        else if (humanScore < compScore) {
            tryAgain.style.display = "block"
            rockBtn.disabled = true
            paperBtn.disabled = true
            scissorsBtn.disabled = true

        }
        else {
            tie.style.display = "block"
            rockBtn.disabled = true
            paperBtn.disabled = true
            scissorsBtn.disabled = true
        }
    }
}


let roundCounter = 0
let maxScore = 6

// main game logic
function playGame() {
    if (!event.target.closest("button")) return

    playerSelection(event)
    let winner = getWinner()
    updateScore(winner)

    trackRounds()
}

function resetGame() {
    if (!event.target.closest("button")) return 

    compScore = 0
    humanScore = 0
    roundCounter = 0
    
    humanChoice.replaceChildren("Human")
    computerChoice.replaceChildren("Computer")

    humanScoreBoard.replaceChildren("0") 
    computerScoreBoard.replaceChildren("0")

    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false

    playAgain.style.display = "none"
    tryAgain.style.display = "none"
    tie.style.display = "none"

}



buttonContainer.addEventListener("click", playGame)
roundContainer.addEventListener("click", resetGame)
