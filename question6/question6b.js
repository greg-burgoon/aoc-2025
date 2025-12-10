const fs = require('fs');
const path = require('path');

function transposeMatrix(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return []; // Handle empty or invalid input
    }
    
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    
    // Create a new array with dimensions swapped (numCols x numRows)
    const transposedMatrix = Array.from({ length: numCols }, () =>
        Array.from({ length: numRows })
    );
    
    // Populate the new array by swapping row and column indices
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
}

// Read the input file
const inputPath = path.join(__dirname, 'question6.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');



// Parse each line into an array, filtering out empty lines
const lines = fileContent
    .split('\n')
    .filter(line => line.length > 0)


const transposedLines = transposeMatrix(lines.map(line => line.split('')));

const calculatedValues = [];

let currentOperator = '';
transposedLines.forEach (line => {
    if (line.join('').trim().length === 0) {
        return;
    }
    let nextOperator = line[line.length-1];    
    let nextValue = 0;
    if (nextOperator != ' ') {
        if (nextOperator === '*') {
            calculatedValues.push(1);
        } else if (nextOperator === '+') {
            calculatedValues.push(0);
        }
        currentOperator = nextOperator;
        nextValue = parseInt(line.slice(0,-1).join('').trim()); 
    } else {
        nextValue = parseInt(line.join('').trim()); 
    }
    let currentValue = calculatedValues.pop();
    if (currentOperator === '*') {
        currentValue *= nextValue;
    } else if (currentOperator === '+') {
        currentValue += nextValue;
    }
    calculatedValues.push(currentValue);
});

const indexesOfEmptyColumns = transposedLines.map((line, index) => line.join('').trim().length > 0 ? 0 : index).filter(index => index !== 0);


console.log(calculatedValues.reduce((a, b) => a + b, 0));