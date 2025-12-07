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
    console.log('Looking for biggest number in :' + batteryBank);
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
const joltageLength = 12

batteryBanks.forEach(bank => {
    let numbers = []
    let indexToStartAt = 0;
    for (let i = joltageLength; i > 1; i--) {
        let [startNumber, startNumberIndex] = getBiggestNumber(bank.slice(indexToStartAt, -i+1));
        numbers.push(startNumber);
        indexToStartAt += startNumberIndex + 1;
    }
    let [endNumber, endNumberIndex] = getBiggestNumber(bank.slice(indexToStartAt));
    numbers.push(endNumber);

    let joltage = parseInt(numbers.reduce((a, b) => a + b, ""));
    joltages.push(joltage);
});

console.log('Joltages:' + joltages);

console.log('Joltage sum:' + joltages.reduce((a, b) => a + b, 0));