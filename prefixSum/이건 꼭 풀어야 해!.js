const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, q] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const startEnd = input.slice(2).map(line => line.split(" ").map(Number));

const Solution = (arr, startEnd) => {
    arr.sort((a, b) => a - b);
    const prefixSum = Array.from({length: arr.length}, () => 0);
    
    prefixSum[0] = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = arr[i] + prefixSum[i - 1];
    }
    
    const answer = startEnd.map(([start, end]) =>
        start === 1 ? prefixSum[end - 1] : prefixSum[end - 1] - prefixSum[start - 2]
    );
    
    console.log(answer.join("\n"));
}

Solution(arr, startEnd);
