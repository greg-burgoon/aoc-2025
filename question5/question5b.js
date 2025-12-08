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
    .map(line => line.split('-').map(Number))
    .sort((a, b) => a[0] - b[0]);



//merge ranges
const mergedRanges = [];
mergedRanges.push(ranges[0]);
for (let i = 1; i < ranges.length; i++) {
    let rangeAnalyzed = mergedRanges.pop();
    if (rangeAnalyzed[1] >= ranges[i][0]) {
        mergedRanges.push([rangeAnalyzed[0], Math.max(rangeAnalyzed[1], ranges[i][1])]);
    } else {
        mergedRanges.push(rangeAnalyzed);
        mergedRanges.push(ranges[i]);
    }
}

let freshIDCount = mergedRanges.map(range => 
    range[1] - range[0] + 1
).reduce((a, b) => a + b, 0);

console.log("fresh ID count: " + freshIDCount);