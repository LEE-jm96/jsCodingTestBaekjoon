const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [_, count] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

Solution = (input, count) => {
    let windowSum = 0;

    for (let i = 0; i < count; i++) {
        windowSum += input[i];
    }
    let maxSum = windowSum;
    let days = 1;

    for (let i = count; i < input.length; i++) {
        windowSum = windowSum - input[i - count] + input[i];
        if (windowSum > maxSum) {
            maxSum = windowSum;
            days = 1;
        } else if (windowSum === maxSum) {
            days++;
        }
    }

    console.log(maxSum === 0 ? "SAD" : [maxSum, days].join("\n"));
}

Solution(arr, count);
