const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [_, count] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const Solution = (input, count) => {
    let windowSum = 0;
    for (let i = 0; i < count; i++) {
        windowSum += input[i];
    }

    let maxSum = windowSum;

    for (let i = count; i < input.length; i++) {
        windowSum = windowSum - input[i - count] + input[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    console.log(maxSum);
};

Solution(arr, count);

