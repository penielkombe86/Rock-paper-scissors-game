// swap the human-choice div with another div

let rock = document.createElement("div")

rock.textContent = "rock"

let paper = document.createElement("div")

paper.textContent = "paper"

let scissors = document.createElement("div")


scissors.textContent = "scissors"

let humanChoice = document.getElementById("human-choice")
let computerChoice = document.getElementById("comp-choice")

let buttonContainer = document.querySelector(".button-container")

let compChoice = [rock, paper, scissors]


function playerSelection(event) {
    let target = event.target

    let randomChoice = compChoice[Math.floor(Math.random() * compChoice.length)]

    if (target.id === "rock-btn") {
        humanChoice.replaceChildren(rock.cloneNode(true))
        computerChoice.replaceChildren(randomChoice.cloneNode(true))
    }
    else if (target.id === "paper-btn") {
        humanChoice.replaceChildren(paper.cloneNode(true))
        computerChoice.replaceChildren(randomChoice.cloneNode(true))
    }

    else if (target.id === "scissors-btn") {
        humanChoice.replaceChildren(scissors.cloneNode(true))
        computerChoice.replaceChildren(randomChoice.cloneNode(true))
    }

}


let  humanScoreBoard = document.getElementById("human-score")
let computerScoreBoard = document.getElementById("computer-score")

let compScore = 0
let humanScore = 0


function getWinner() {
    if (humanChoice.textContent === "rock" && computerChoice.textContent === "scissors") {
        return "human"
    }
    else if (humanChoice.textContent === "paper" && computerChoice.textContent === "rock") {
        return "human"
    }
    else if (humanChoice.textContent === "scissors" && computerChoice.textContent === "paper") {
        return "human"
    } else if (humanChoice.textContent === computerChoice.textContent) {
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

    if (event.target.tagName !== "BUTTON") return
    playerSelection(event)
    let winner = getWinner()
    updateScore(winner)
})
