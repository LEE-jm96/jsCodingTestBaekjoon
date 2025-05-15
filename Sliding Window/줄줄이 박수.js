const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1, 1 + N).map(line => line.split(" ").map(Number));
const A = Number(input[N + 1]);

const columnSum = [];

for (let i = 0; i < M; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
        sum += board[j][i];
    }
    columnSum.push(sum);
}

let windowSum = 0;

for (let i = 0; i < A; i++) {
    windowSum += columnSum[i]
}

let maxSum = windowSum;

for (let i = A; i < columnSum.length; i++) {
    windowSum = windowSum - columnSum[i - A] + columnSum[i];
    maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);
