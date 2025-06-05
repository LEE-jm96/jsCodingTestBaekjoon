const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const ropes = input.slice(1, n + 1).map(Number);

ropes.sort((a, b) => b - a);
let maxWeight = 0;
    
while (ropes.length !== 0){
    const ropeSize = ropes.length;
    const totalWeight = ropes.pop() * ropeSize;
    if (totalWeight > maxWeight) {
        maxWeight = totalWeight; 
    }
}
    
console.log(maxWeight);
