const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question2.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const ranges = fileContent
  .split(',')
  .map(line => line.trim())
  .filter(line => line.length > 0);


let badIDs = [];


function addBadIDs(range, divisor, badIDs) {
    const [start, end] = range.split('-');
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        const numberString = i.toString();
        if (numberString.length % divisor === 0){
            let stringPieces = [];
            let chunk = Math.floor(numberString.length / divisor);
            for (let j = 0; j < numberString.length; j += chunk) {
                stringPieces.push(numberString.slice(j, j + chunk));
            }
            if (stringPieces.every(piece => piece === stringPieces[0]) && !badIDs.includes(i)) {
                badIDs.push(i);
            }
        }
    }
}

ranges.forEach(range => {
    const [start, end] = range.split('-');
    for (let i = 2; i <= end.length; i++) {
        addBadIDs(range, i, badIDs);
    }
});

console.log('Bad IDs:', badIDs);
console.log('Sum of bad IDs:', badIDs.reduce((a, b) => a + b, 0));