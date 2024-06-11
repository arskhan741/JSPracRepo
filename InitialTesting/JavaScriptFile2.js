function myFunction(d)
{
    let a = 10;
    let b = 20;
    c = a +b + d;

    console.log(c);
}

myFunction2 = (a =10, b = 20) => a+b;

myFunction(30);

let result = myFunction2(1,2);

console.log('result = ',result);