'use strict';

//  console.log(document.querySelector(`.message`).textContent);

//  document.querySelector((`.message`)).textContent = `👍Correct Number!`;

//  document.querySelector(`.number`).textContent = `GG`;

//  console.log( document.querySelector(`.guess`).nodeValue);
 
//  document.querySelector(`.guess`).nodeValue = 69;

//  console.log( document.querySelector(`.guess`).nodeValue);

document.querySelector(`.check`).addEventListener(`click`, function (){

        let guess = document.querySelector(`.guess`).value;

        guess = Number(guess);

        console.log(`Guess = ${guess} and type = ${typeof(guess)}`);

        if(!guess){
            document.querySelector((`.message`)).textContent = `Please Enter Valid Number!`;
        }
        else
        {
            document.querySelector((`.message`)).textContent = `Start Guessing .........!`;
        }
})