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
ranges.forEach(range => {
    const [start, end] = range.split('-');
    for (let i = parseInt(start); i <= parseInt(end); i++) {
        if (i.toString().length % 2 === 0){
            if (i.toString().slice(0, i.toString().length/2) === i.toString().slice(i.toString().length/2)) {
                badIDs.push(i);
            }
        }
    }
});


console.log('Sum of bad IDs:', badIDs.reduce((a, b) => a + b, 0));