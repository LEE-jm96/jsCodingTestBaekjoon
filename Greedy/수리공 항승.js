const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, L] = input[0].split(" ").map(Number); 
const leakPositions = input[1].split(" ").map(Number); 

Solution = (L, leakPositions) => {
    leakPositions.sort((a, b) => a - b);
    let answer = 0;
    let coverEnd = 0;

    for (let i = 0; i < leakPositions.length; i++) {
        if (leakPositions[i] > coverEnd) {
            answer++;
            coverEnd = leakPositions[i] + L - 1;
        }
    }
    
    console.log(answer);
}

Solution(L, leakPositions);
