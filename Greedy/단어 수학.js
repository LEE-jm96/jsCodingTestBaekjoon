const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const word = input.slice(1, n + 1);

const Solution = (input) => {
    const priority = {};
    const alphabetScore = {};
    let score = 9;
    let answer = 0;

    input.forEach(str => {
        for (let i = 0; i < str.length; i++) {
            const weight = Math.pow(10, str.length - i - 1);
            const ch = str[i];
            priority[ch] = (priority[ch] || 0) + weight;
        }
    });

    const sortedAlpha = Object.entries(priority)
        .sort((a, b) => b[1] - a[1]);

    for (const [char] of sortedAlpha) {
        alphabetScore[char] = score--;
    }

    for (const str of input) {
        const numStr = str.split("").map(ch => alphabetScore[ch]).join("");
        answer += Number(numStr);
    }

    console.log(answer);
};

Solution(word);
