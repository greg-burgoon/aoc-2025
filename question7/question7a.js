const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question7.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const lines = fileContent
    .split('\n')
    .map(line => line.trim().split(''))
    
let numberOfSplits = 0;

for (let r = 0; r < lines.length-1; r++) {
    for (let c = 0; c < lines[r].length; c++) {
        if (lines[r][c] === 'S') {
            lines [r+1][c] = '|';
        }
        if (lines[r][c] === '|') {
            if (lines[r+1][c] === '^') {
                lines[r+1][c-1] = '|';
                lines[r+1][c+1] = '|';
                numberOfSplits++;
            } else {
                lines [r+1][c] = '|';
            }
        }
    }
}

console.log(numberOfSplits);