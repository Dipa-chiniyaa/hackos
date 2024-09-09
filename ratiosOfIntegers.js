'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let temp = 0;
    let pos,neg,zero,i=1;
    while(i < arr.length) {
        temp = arr[i];
        if(temp > 0) {
            pos++;
        } else if( temp < 0) {
            neg++;
        } else {
            zero++;
        }
        i++;
    }
    console.log((pos/arr.length).toFixed(6));
    console.log((neg/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6)); 
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
