const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const NGEArr = input[1].split(" ").map(Number);
const answer = new Array(NGEArr.length).fill(-1);
const stack = [];

for (let i = 0; i < NGEArr.length; i++) {
    while (stack.length > 0 && NGEArr[stack[stack.length - 1]] < NGEArr[i]) {
        answer[stack.pop()] = NGEArr[i];
    }
    stack.push(i);
}

console.log(answer.join(" "));
