let fruit = 'Apple';

console.log(`${fruit}, and Length = ${fruit.length}`);

fruit = 'App\'le';

//Use of escape sequence character
console.log(fruit + " and length = "+fruit.length);


fruit = 'App\nle';

console.log(fruit + " and length = "+fruit.length);


fruit = "App\"le";

console.log(fruit + " and length = "+fruit.length);


//Example: Print this Name :    Adam D' Angelo

let taskName = 'Adam D\' Angelo '
console.log(taskName);

taskName =  "Adam D\" Angelo"
console.log(taskName);
