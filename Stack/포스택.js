const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, sequence] = input;
const sequenceArr = sequence.split(" ").map(Number);
const stack = [[0], [0], [0], [0]];

for (let i = 0; i < N; i++) {
    let pushFlag = false;
    for (let j = 0; j < stack.length; j++) {
        if (sequenceArr[i] > stack[j][stack[j].length - 1]) {
            stack[j].push(sequenceArr[i]);
            pushFlag = true;
            break;
        }     
    }
    if (!pushFlag) {
        console.log("NO");
        return;
    }
}

console.log("YES");
