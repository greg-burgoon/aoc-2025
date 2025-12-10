const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question6.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const lines = fileContent
    .split('\n')
    .map(line => line.split(' ').map(word => word.trim()).filter(word => word.length > 0))
    .filter(line => line.length > 0)

const symbolArray = lines[lines.length-1];
const numberArray = lines[lines.length-1].map(word => word === "*" ? 1 : 0);

for (let i = lines.length-2; i >= 0; i--) {
    let line = lines[i];
    for (let j = 0; j < line.length; j++) {
        if (symbolArray[j] === "*") {
            numberArray[j] *= parseInt(line[j]);
        } else if (symbolArray[j] === "+") {
            numberArray[j] += parseInt(line[j]);
        }
    }
}
    
console.log(numberArray.reduce((a, b) => a + b, 0));

    
