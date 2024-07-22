'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    // let s = "12:10:00AM";
    let isAM = s.substr(-2);
    let temp = s.substr(2,6);
    let newS = "";
    let hour = 0;
    hour = Math.floor(s.slice(0,2));
    if(isAM == "AM"){
        if(hour == 12){
            hour = 0;
            newS = String(hour) + "0" +temp ;
        } else {
            newS = "0" + String(hour) +temp ;
        }
            
    }
    if(isAM == "PM"){
        if(hour < 12)
            hour += 12;
            newS = String(hour) + temp ;
    }   
    
    return newS;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
