const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [_, count] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let windowSum = 0;
for (let i = 0; i < count; i++) {
    windowSum += arr[i];
}

let maxTemperatureSum = windowSum;

for (let i = count; i < arr.length; i++) {
    windowSum = windowSum - arr[i - count] + arr[i];
    maxTemperatureSum = Math.max(maxTemperatureSum, windowSum);
}

console.log(maxTemperatureSum);
