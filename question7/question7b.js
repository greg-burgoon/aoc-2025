const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question7.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const lines = fileContent
    .split('\n')
    .map(line => line.trim().split(''))
    


let pathCount = Array.from({ length: lines.length }, () => Array.from({ length: lines[0].length }, () => 0));

for (let r = 0; r < lines.length-1; r++) {
    for (let c = 0; c < lines[r].length; c++) {
        if (lines[r][c] === 'S') {
            lines [r+1][c] = '|';
            pathCount[r+1][c] = 1;
        }
        if (lines[r][c] === '|') {
            if (lines[r+1][c] === '^') {
                lines[r+1][c-1] = '|';
                lines[r+1][c+1] = '|';
                pathCount[r+1][c-1] += pathCount[r][c];
                pathCount[r+1][c+1] += pathCount[r][c];
            } else {
                lines [r+1][c] = '|';
                pathCount[r+1][c] += pathCount[r][c];
            }
        }
    }
}

console.log(pathCount[lines.length-1].reduce((a, b) => a + b, 0));