"use strict"

let playerOneScore = 0
let playerTwoScore = 0
let playerOneTurn = true

const playerOneDice = document.getElementById("player1Dice").innerHTML
const playerTwoDice = document.getElementById("player2Dice").innerHTML
const playerOneScoreboard = document.getElementById("player1Scoreboard")
const playerTwoScoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
