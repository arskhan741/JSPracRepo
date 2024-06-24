'use strict';

let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function (){

        let guess = document.querySelector(`.guess`).value;

        guess = Number(guess);

        //console.log(`Guess = ${guess} and type = ${typeof(guess)}`);

        if(!guess){
            document.querySelector((`.message`)).textContent = `Please Enter Valid Number!`;
        }
        else if(guess == secretNumber)
        {
            //Correct Guess
            document.querySelector((`.message`)).textContent = `Correct Number`;
        }
        else if(guess < secretNumber)
        {
            //Wrong Guess
            DecreaseScore();
            document.querySelector((`.message`)).textContent = `📉too Low`;
        }
        else if(guess > secretNumber)
        {
            //Wrong Guess
            DecreaseScore();
            document.querySelector((`.message`)).textContent = `📈too High`;
        }
})

function DecreaseScore() {
    score--;
    document.querySelector(`.score`).textContent = score;
}