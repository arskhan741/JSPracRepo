'use strict';

const score0EL = document.querySelector(`#score--0`);
const score1EL = document.getElementById(`score--1`);
const diceEL = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);
const btnRoll = document.querySelector(`.btn--roll`);
const current0EL = document.getElementById(`current--0`);
const current1EL = document.querySelector(`#current--1`);

//Starting Conditions
score0EL.textContent = 0; 
score1EL.textContent = 0;
diceEL.classList.add(`hidden`);

let currentScore = 0;

btnRoll.addEventListener(`click`, function(){

    //1.Generate a random number
    const dice = Math.trunc( Math.random()*6) +1;

    //2. Display Dice
    diceEL.classList.remove(`hidden`);
    diceEL.src = `dice-${dice}.png`;  
    
    //3.Check for roll 
    if(dice != 1){
        //Add the score
        currentScore += dice;
        current0EL.textContent = currentScore;
    }
    else{
        //Move to next player
    }
})