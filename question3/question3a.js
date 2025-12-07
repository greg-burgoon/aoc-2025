const fs = require('fs');
const path = require('path');

// Read the input file
const inputPath = path.join(__dirname, 'question3.txt');
const fileContent = fs.readFileSync(inputPath, 'utf8');

// Parse each line into an array, filtering out empty lines
const batteryBanks = fileContent
  .split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0);

function getBiggestNumber(batteryBank) {
    let biggestNumber = 0;
    let biggestNumberIndex = 0;
    batteryBank.split('').forEach((char, index) => {
        let number = parseInt(char);
        if (number > biggestNumber) {
            biggestNumber = number;
            biggestNumberIndex = index;
        }
    });
    return [ biggestNumber.toString(), biggestNumberIndex ];
}

let joltages = [];

batteryBanks.forEach(bank => {
    let [startNumber, startNumberIndex] = getBiggestNumber(bank.slice(0, -1));
    let [endNumber, endNumberIndex] = getBiggestNumber(bank.slice(startNumberIndex + 1));
    let joltage = parseInt(startNumber + endNumber);
    joltages.push(joltage);
});

console.log('Joltages:' + joltages);

console.log('Joltage sum:' + joltages.reduce((a, b) => a + b, 0));