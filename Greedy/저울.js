const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const weights = input[1].split(" ").map(Number);

weights.sort((a, b) => a - b);
    
let sum = 0; 
    
for (let i = 0; i < weights.length; i++) {
    if (weights[i] <= sum + 1) {
        sum += weights[i];
    } else {
        break;
    }
}
    
console.log(sum + 1);
