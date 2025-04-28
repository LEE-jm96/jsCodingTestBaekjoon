const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const tasteScores = input[1].split(" ").map(Number);
const extendedTastes = tasteScores.slice(0, k);

const applepies = [...tasteScores, ...extendedTastes];
let windowSum = 0;
let maxTaste = 0;
    
for (let i = 0; i < k; i++) {
    windowSum += applepies[i];
}
    
maxTaste = windowSum;
    
for (let i = k; i < applepies.length; i++) {
    windowSum = windowSum - applepies[i - k] + applepies[i];
    maxTaste = Math.max(windowSum, maxTaste);
}
    
console.log(maxTaste);
