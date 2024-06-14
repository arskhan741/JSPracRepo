const johnMass = 50;
const johnHeight = 6;
const markMass = 100;
const markHeight = 5;

let markHigherBMI = false;


const johnBMI = (johnMass / (johnHeight * johnMass));
const markBMI = (markMass / (markHeight * markHeight));

markHigherBMI = markBMI > johnBMI;

if (markBMI) {
    console.log("Mark has higher BMI by " + (markBMI - johnBMI) + " then John");
}
else {
    console.log("John has higher BMI by " + (johnBMI - markBMI) + " then Mark");

}

console.log('a\nb');

console.log(`a
b`);
