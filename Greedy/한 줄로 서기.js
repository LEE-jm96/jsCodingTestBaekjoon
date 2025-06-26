const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const Solution = (input) => {
    const answer = Array.from({ length: input.length }, () => 0);
    const rank = {};

    for (let i = 1; i <= input.length; i++) {
        rank[i] = input[i - 1];
    }
    
    for (let i = 1; i <= input.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (answer[j] === 0) {
                if (count === rank[i]) {
                    answer[j] = i;
                    break;
                }
                count++;
            }
        }
    }

    console.log(answer.join(" "));
};

Solution(arr);
