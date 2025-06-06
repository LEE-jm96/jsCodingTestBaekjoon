const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0], 10);
let idx = 1;

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx], 10);
    idx++;

    const testCase = [];

    for (let i = 0; i < N; i++) {
        const [a, b] = input[idx].split(" ").map(Number);
        testCase.push([a, b]);
        idx++;
    }

    Solution(testCase);
}

const Solution = (applicants) => {
    applicants.sort((a, b) => a[0] - b[0]);

    let hiredCount = 1;
    let bestInterviewRank = applicants[0][1];

    for (let i = 1; i < applicants.length; i++) {
        if (applicants[i][1] < bestInterviewRank) {
            hiredCount++;
            bestInterviewRank = applicants[i][1];
        }
    }

    console.log(hiredCount);
}
