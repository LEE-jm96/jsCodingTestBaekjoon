const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const N = input[0];
const arr = input.slice(1);

const solution = (arr) => {
    const stack = [];
    const answer = [];
    let index = 0;

    for (let i = 1; i <= N; i++) {
        stack.push(i);
        answer.push("+");

        while (stack.length > 0 && stack[stack.length - 1] === arr[index]) {
            stack.pop();
            answer.push("-");
            index++;
        }
    }

    if (stack.length > 0) {
        console.log("NO");
    } else {
        console.log(answer.join("\n"));
    }
};

solution(arr);
