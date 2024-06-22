let testData1 = new Array(17,21,23);
let testData2 = [12, 5, -5, 0, 4];

function PrintForeCast(array)
{
    let str = '';

    for(let i=0; i<array.length; i++)
    {
        str += `${array[i]}C in ${i+1} days. . . .`
    }

    console.log(`${str} \n`);
}


PrintForeCast(testData1);
PrintForeCast(testData2);