let myObj1 = {
    name: "Arsalan",
    class: 16,
    city: "RWP"
};

let myObj2 = {
    name: "Hassnain",
    class : "PHD",
    city : "ISB"
};

let myArray = [myObj1, myObj2];

console.log('my obj1 = ',myObj1 , '\n');  
console.log('my obj2 = ',myObj2 , '\n');  

myObj1.city = "LHR";

console.log('city of' ,myObj2["name"], ' = ',myObj1["city"], '\n');

console.log(myArray, '\n' );

console.log(typeof(myObj1));
console.log(typeof(myArray));

