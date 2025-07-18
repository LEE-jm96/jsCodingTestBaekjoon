const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const score = input.slice(1, n + 1).map(Number);

let compareValue = score[score.length - 1];
let answer = 0;
    
for (let i = score.length - 2; i >= 0; i--) {
    if (compareValue <= score[i]) {
        answer += (score[i] - compareValue + 1);
        compareValue = compareValue - 1;
    } else {
        compareValue = score[i];
    }
}
    
console.log(answer);
