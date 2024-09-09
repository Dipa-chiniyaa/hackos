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
    let strlength = s.length;
    let isAm = s.substr(-2);
    if(isAm == 'AM') {
        if(parseInt(s.substr(0,2)) == 12) {
            return ('00'+s.substr(2,strlength-4));
        } else {
            return (s.substr(0,strlength-2));
        } 
        
    } else {
        let num = parseInt(s.substr(0,2));
        if(parseInt(s.substr(0,2)) < 12){
            num += 12;
            return (num.toString() + s.substr(2,strlength-4));
        }
               
        return (num.toString() + s.substr(2,strlength-4));
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
