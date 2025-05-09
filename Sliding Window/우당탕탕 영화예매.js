const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const seats = input.slice(1).map(line => line.split("").map(Number));

let answer = 0;
    
seats.forEach(seat => {
    let windowSum = 0;
    for (let i = 0; i < K; i++) {
        windowSum += seat[i];
    }
        
    if (windowSum === 0) answer++;
        
    for (let j = K; j < seat.length; j++) {
        windowSum = windowSum - seat[j - K] + seat[j];
        if (windowSum === 0) answer++;
    }
})

console.log(answer);
