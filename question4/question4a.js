const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question4.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const paperRollMatrix = fileContent
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0)
  .map(line => line.split(''));

let markMatrix = paperRollMatrix.map(row => row.map(cell => cell === '@' ? 0 : 100));

paperRollMatrix.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
        if (cell === '@') {
            if (rowIndex-1 >= 0) {
                if (cellIndex-1 >= 0) {
                    markMatrix[rowIndex-1][cellIndex-1]++;
                }
                markMatrix[rowIndex-1][cellIndex]++;
                if (cellIndex+1 < row.length) {
                    markMatrix[rowIndex-1][cellIndex+1]++;
                }
            }
            if (cellIndex-1 >= 0) {    
                markMatrix[rowIndex][cellIndex-1]++;
            }
            if (cellIndex+1 < row.length) {
                markMatrix[rowIndex][cellIndex+1]++;
            }
            if (rowIndex+1 < markMatrix.length) {
                if (cellIndex-1 >= 0) {
                    markMatrix[rowIndex+1][cellIndex-1]++;
                }
                markMatrix[rowIndex+1][cellIndex]++;
                if (cellIndex+1 < row.length) {
                    markMatrix[rowIndex+1][cellIndex+1]++;
                }
            }
        }
    });
});


let sum = markMatrix.map(row => row.reduce((a, value) => a + (value < 4 ? 1 : 0), 0)).reduce((a, b) => a + b, 0);

console.log("sum: " + sum);
