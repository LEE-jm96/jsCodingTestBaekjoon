const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const levels = input[1].split(" ").map(Number);

Solution = (levels) => {
    const maxLevel = Math.max(...levels);
    let gold = 0;
    
    levels.sort((a, b) => a - b);
    levels.pop();
    
    for (let i = 0; i < levels.length; i++) {
        gold += maxLevel + levels[i];
    }
    
    console.log(gold);
}

Solution(levels);
