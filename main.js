"use strict";

let cardNumber;
let cardSuit;
let card;
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
  usedCards.push(card);
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
  if (playerCard > cpuCard) {
    playerScore += 2;
    playerScr.textContent = `Score: ${playerScore}`;
  } else if (cpuCard > playerCard) {
    cpuScore += 2;
    cpuScr.textContent = `Score: ${cpuScore}`;
  }
});
