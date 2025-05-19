const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [S, P] = input[0].split(" ").map(Number);
const DNA = input[1];
const [minA, minC, minG, minT] = input[2].split(" ").map(Number);

let current = { A: 0, C: 0, G: 0, T: 0 };
let answer = 0;

for (let i = 0; i < P; i++) {
    current[DNA[i]]++;
}

const isValid = () => (
    current["A"] >= minA &&
    current["C"] >= minC &&
    current["G"] >= minG &&
    current["T"] >= minT
);

if (isValid()) answer++;

for (let i = P; i < S; i++) {
    current[DNA[i]]++;          
    current[DNA[i - P]]--;       

    if (isValid()) answer++;
}

console.log(answer);
