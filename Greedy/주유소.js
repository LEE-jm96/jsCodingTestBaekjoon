const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = BigInt(input[0]);
const distance = input[1].split(" ").map(x => BigInt(x));
const cost = input[2].split(" ").map(x => BigInt(x));

let minCost = cost[0];
let totalCost = 0n;

for (let i = 0; i < distance.length; i++) {
    totalCost += distance[i] * minCost;
    
    if (cost[i + 1] < minCost) {
        minCost = cost[i + 1];
    }
}

console.log(totalCost.toString());
