"use strict";

let playerCard;
let cpuCard;
let cardNumber;
let cardSuit;
let card;
let newCard;
let playerScore = 0;
let cpuScore = 0;
let usedCards = [];

const draw = document.querySelector(".draw");
const play = document.querySelector(".play");
const playArea = document.querySelectorAll(".play-area");
const cpuPlay = document.querySelector(".cpu-play");
const playerScr = document.getElementById("player-score");
const cpuScr = document.getElementById("cpu-score");
const gameEnd = document.querySelector(".end-game");
const table = document.querySelector(".table");
const restart = document.getElementById("restart-btn");
const reset = document.getElementById("reset-btn");
const msg = document.querySelector(".message");

function cardGenerator() {
  cardNumber = Math.trunc(Math.random() * 13) + 1;
  cardSuit = Math.trunc(Math.random() * 4) + 1;
  card = `${cardNumber}-${cardSuit}`;
  !usedCards.includes(card) ? usedCards.push(card) : cardGenerator();
}

function war() {
  if (playerCard > cpuCard) {
    playerScore += 10;
    playerScr.textContent = `Score: ${playerScore}`;
  } else if (cpuCard > playerCard) {
    cpuScore += 10;
    cpuScr.textContent = `Score: ${cpuScore}`;
  } else if (playerCard === cpuCard) {
    war();
  }
}

function resetGame() {
  usedCards = [];
  gameEnd.setAttribute("id", "hidden");
  table.removeAttribute("id");
  play.classList.add("hidden-cards");
  cpuPlay.classList.add("hidden-cards");
  playerScore = 0;
  playerScr.textContent = `Score: ${playerScore}`;
  cpuScore = 0;
  cpuScr.textContent = `Score: ${cpuScore}`;
}

function gameOver() {
  if (playerScore > cpuScore) {
    msg.innerText = "You win! 😁";
    gameEnd.style.backgroundColor = "green";
  } else {
    msg.innerText = "You lose! ☹️";
    gameEnd.style.backgroundColor = "red";
  }
}

restart.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

draw.addEventListener("click", () => {
  cardGenerator();
  play.classList.remove("hidden-cards");
  play.src = `imgs/${card}.svg`;
  playerCard = cardNumber;
  cardGenerator();
  cpuPlay.classList.remove("hidden-cards");
  cpuPlay.src = `imgs/${card}.svg`;
  cpuCard = cardNumber;
  if (usedCards.length === 52) {
    gameEnd.removeAttribute("id");
    table.setAttribute("id", "hidden");
    gameOver();
  }
  if (playerCard > cpuCard) {
    playerScore += 2;
    playerScr.textContent = `Score: ${playerScore}`;
  } else if (cpuCard > playerCard) {
    cpuScore += 2;
    cpuScr.textContent = `Score: ${cpuScore}`;
  } else if (playerCard === cpuCard) {
    war();
  }
});
