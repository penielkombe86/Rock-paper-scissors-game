// get human choice
// get computer choice
// compare the two and get winner
// update scores
// declare winner


function playGame() {
    let humanScore = 0
    let compScore = 0

    // ask the player for their choice
    function getHumanChoice() {
        const humanChoice = prompt("Enter rock, paper or scissors")
        return humanChoice
    }

    // randomly select rock, paper or scissors for the computer
    function getCompChoice() {
        const compChoice = ["rock", "paper", "scissors"]
        return compChoice[Math.floor(Math.random() * compChoice.length)]
    }

    // compare choices and determine winner
    function getWinner(humanChoice, computerChoice) {
        console.log(`You chose ${humanChoice}`)
        console.log(`Computer chose ${computerChoice}`)
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! rock beats scissors")
            return "human"
        } else if(humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! paper beats rock")
            return "human"
        } else if(humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! scissors beats paper")
            return "human"
        } else if(humanChoice === computerChoice) {
            console.log("Its a tie")
            return "tie"
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return "computer"
        }

    }

    // update the running score after each round
    function updateScores(winner) {
        if (winner === "human") {
            humanScore++
        } else if(winner === "computer") {
            compScore++
        }
    }
    // display current scores
    function showScores() {
        console.log(`Your score is ${humanScore}`)
        console.log(`Computer score is ${compScore}`)
    }
 
    // round 1
    let winner1 = getWinner(getHumanChoice(), getCompChoice())
    updateScores(winner1)
    showScores()

    // round 2
    let winner2 = getWinner(getHumanChoice(), getCompChoice())
    updateScores(winner2)
    showScores()
     
    // round 3
    let winner3 = getWinner(getHumanChoice(), getCompChoice())
    updateScores(winner3)
    showScores()
    
    // round 4
    let winner4 = getWinner(getHumanChoice(), getCompChoice())
    updateScores(winner4)
    showScores()

    // round 5
    let winner5 = getWinner(getHumanChoice(), getCompChoice())
    updateScores(winner5)
    showScores()

    // determine the overall winner after the 5 rounds
    if (humanScore > compScore) {
        console.log("Congratulations! You win")
    } if (compScore > humanScore) {
        console.log("Sorry! You lose")
    } if (humanScore === compScore) {
        console.log("It's a tie")
    }
}

playGame()