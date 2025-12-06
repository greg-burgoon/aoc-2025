const fs = require('fs');
const path = require('path');

function mod(n, m) {
    return ((n % m) + m) % m;
}

// Read the input file
const inputPath = path.join(__dirname, 'question1.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const lines = fileContent
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0);




console.log(`Read ${lines.length} lines from question1.txt`);
console.log('First 5 lines:', lines.slice(0, 5));

let dialPosition = 50;
let numberOfZeros = 0;


lines.forEach(line => {
    const [direction, steps] = [line[0], parseInt(line.slice(1))];
    const currentDialPosition = dialPosition;
    if (direction === 'R') {
        dialPosition += steps;
    } else if (direction === 'L') {
        dialPosition -= steps;
    }
    const preMod = dialPosition;
    dialPosition = mod(dialPosition, 100);
    numberOfZeros = numberOfZeros + Math.floor((Math.abs(preMod)/100));
    if (preMod <= 0 && currentDialPosition !== 0) {
        numberOfZeros++;
    }
    console.log(`Rotated ${line}. Dial position ${dialPosition.toString()} number of zeros ${numberOfZeros.toString()}`);
    
});

console.log('Number of zeros:', numberOfZeros);
