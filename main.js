"use strict";

let game = true;
let cardNumber;
let cardSuit;
let card;
let newCard;
let playerScore = 0;
let cpuScore = 0;
const usedCards = [];

const draw = document.querySelector(".draw");
const play = document.querySelector(".play");
const cpuPlay = document.querySelector(".cpu-play");
const playerScr = document.getElementById("player-score");
const cpuScr = document.getElementById("cpu-score");

function cardGenerator() {
  cardNumber = Math.trunc(Math.random() * 13) + 1;
  cardSuit = Math.trunc(Math.random() * 4) + 1;
  card = `${cardNumber}-${cardSuit}`;
  !usedCards.includes(card) ? usedCards.push(card) : cardGenerator();
}

function war() {}

function gameOver() {
  if (playerScore > cpuScore) {
    prompt("You win!");
  } else {
    prompt("You lose!");
  }
}

draw.addEventListener("click", () => {
  let playerCard;
  let cpuCard;
  cardGenerator();
  play.src = `imgs/${card}.svg`;
  playerCard = cardNumber;
  cardGenerator();
  cpuPlay.src = `imgs/${card}.svg`;
  cpuCard = cardNumber;
  if (usedCards.length === 52) {
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
