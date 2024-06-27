'use strict';

const player0EL = document.querySelector(`.player--0`);
const player1EL = document.querySelector(`.player--1`);
const score0EL = document.querySelector(`#score--0`);
const score1EL = document.getElementById(`score--1`);
const diceEL = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);
const btnRoll = document.querySelector(`.btn--roll`);
const current0EL = document.getElementById(`current--0`);
const current1EL = document.querySelector(`#current--1`);


const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


Init();

function Init() {
  console.log(`resetting game`);

  //Starting Conditions

  //Reset SCores
  for (let i = 0; i < scores.length; i++)
    scores[i] = 0;

  //Reset All variables
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Reset text contents and hide dice image
  score0EL.textContent = 0;
  score1EL.textContent = 0;

  diceEL.src = `dice-1.png`;
  diceEL.classList.add(`hidden`);

  document.getElementById(`current--0`).textContent =
    currentScore;
  document.getElementById(`current--1`).textContent =
    currentScore;

  //Remove active classes
  player0EL.classList.add(`player--active`);
  player1EL.classList.remove(`player--active`);

  //Remove winner Classes
  document.querySelector(`.player--0`)
    .classList.remove(`player--winner`);
  document.querySelector(`.player--1`)
    .classList.remove(`player--winner`);
}

function SwitchPlayer() {
  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  //Checks if class is present ? Remove it : Add it
  player0EL.classList.toggle(`player--active`);
  player1EL.classList.toggle(`player--active`);
}

btnRoll.addEventListener(`click`, function () {

  if (!playing) return;

  //1.Generate a random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  console.log(`dice = ${dice}`);

  //2. Display Dice
  diceEL.src = `dice-${dice}.png`;
  diceEL.classList.remove(`hidden`);

  //3.Check for roll
  if (dice != 1) {
    //Add the score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  else {
    SwitchPlayer();
  }
});

btnHold.addEventListener(`click`, function () {

  if (!playing) return;

  //Add the score to array
  scores[activePlayer] += currentScore;

  //Check if score is greater than 100
  if (scores[activePlayer] >= 20) {
    document.querySelector(`.player--${activePlayer}`)
      .classList.add(`player--winner`);

    document.querySelector(`.player--${activePlayer}`)
      .classList.remove(`player--active`);

    //Finish the game
    playing = false;

    //hide the dice image
    diceEL.classList.add(`hidden`);
  }


  //Check if player score is above 100? Finish the game
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;

  //Switch to next player
  SwitchPlayer();

});

btnNew.addEventListener(`click`, Init);

