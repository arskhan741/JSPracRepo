'use strict';

let guess = 0;
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

//Display Message
const DisplayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//Check Button
document.querySelector(`.check`).addEventListener(`click`, function () {
  guess = document.querySelector(`.guess`).value;

  guess = Number(guess);

  //console.log(`Guess = ${guess} and type = ${typeof(guess)}`);

  if (!guess) {
    document.querySelector(
      `.message`
    ).textContent = `Please Enter Valid Number!`;
  } else if (guess == secretNumber && score > 0) {
    //Correct Guess
    DisplayMessage(`Correct Number`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else {
    DecreaseScore();
  }
});

function DecreaseScore() {
  score--;

  const outCome = guess > secretNumber ? `📈too High` : `📉too Low`;

  DisplayMessage(outCome);

  if (score <= 0) {
    score = 0;
    DisplayMessage(`You Lost!!`);
    document.querySelector(`body`).style.backgroundColor = `#ff0000`;
  }

  document.querySelector(`.score`).textContent = score;
}

//Again! Button
document.querySelector(`.again`).addEventListener(`click`, ResetGame);

function ResetGame() {
  //new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //reset score
  score = 20;

  //reset middle box number
  document.querySelector(`.number`).textContent = `?`;

  //Reset Text
  DisplayMessage(`Start guessing....`);

  //Reset Score
  document.querySelector(`.score`).textContent = `20`;

  //Reset Input field
  document.querySelector(`.guess`).value = ``;

  //Reset width of number
  document.querySelector(`.number`).style.width = `15rem`;

  //Reset BG color
  document.querySelector(`body`).style.backgroundColor = '#222';

  console.log(secretNumber);
}
