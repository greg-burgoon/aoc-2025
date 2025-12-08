const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question5.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const inputs = fileContent
    .split('\n\n')

const ranges = inputs[0]
    .split('\n')
    .map(line => line.split('-').map(Number));

const ingredients = inputs[1]
    .split('\n')    
    .map(Number);


let freshIngredientsCount = 0;

ingredients.forEach(ingredient => {
    for (let i = 0; i < ranges.length; i++) {
        if (ingredient >= ranges[i][0] && ingredient <= ranges[i][1]) {
            freshIngredientsCount++;
            break;
        }
    }
});

console.log("fresh ingredients count: " + freshIngredientsCount);
