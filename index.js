// references to the DOM
let humanChoice = document.getElementById("human-choice")
let computerChoice = document.getElementById("comp-choice")
let  humanScoreBoard = document.getElementById("human-score")
let computerScoreBoard = document.getElementById("computer-score")
let buttonContainer = document.querySelector(".button-container")


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

buttonContainer.addEventListener("click", () => {

    if (!event.target.closest("button")) return
    playerSelection(event)
    let winner = getWinner()
    updateScore(winner)
})
