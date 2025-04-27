const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, l] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let answer = 0;
let windowSum = 0;

for (let i = 0; i < l; i++) {
    windowSum += arr[i];    
    if (129 <= windowSum && windowSum <= 138) {
        answer++;
    }
}

for (let i = l; i < n; i++) {
    windowSum = windowSum - arr[i - l] + arr[i];
    if (129 <= windowSum && windowSum <= 138) {
        answer++;
    }
}

console.log(answer);
