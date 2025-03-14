const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [tryCnt, A, B] = input;

const aArray = A.split(" ").map(Number);
const bArray = B.split(" ").map(Number);

let min = 0;

aArray.sort((a, b) => a - b);
bArray.sort((a, b) => b - a);

aArray.forEach((num, idx) => {
    min += (num * bArray[idx]);
})
    
console.log(min);
