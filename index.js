"use strict"

let playerOneScore = 0
let playerTwoScore = 0
let playerOneTurn = true

const playerOneDice = document.getElementById("player1Dice")
const playerTwoDice = document.getElementById("player2Dice")
const playerOneScoreboard = document.getElementById("player1Scoreboard")
const playerTwoScoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (playerOneTurn) {
        playerOneDice.textContent = randomNumber 
        message.textContent  = "Player 2 Turn"
        playerOneDice.classList.remove("active")
        playerTwoDice.classList.add("active")
        playerOneScore += randomNumber
        playerOneScoreboard.textContent = playerOneScore
    } else {
        playerTwoDice.textContent = randomNumber
        message.textContent  = "Player 1 Turn"
        playerTwoDice.classList.remove("active")
        playerOneDice.classList.add("active")
        playerTwoScore += randomNumber
        playerTwoScoreboard.textContent = playerTwoScore
    }

    playerOneTurn = !playerOneTurn 

})