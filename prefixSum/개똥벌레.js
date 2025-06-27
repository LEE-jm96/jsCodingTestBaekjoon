const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, h] = input[0].split(" ").map(Number);         
const arr = input.slice(1).map(Number);

const Solution = (h, arr) => {
    const cave = Array(h + 2).fill(0);

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            cave[1]++;
            cave[arr[i] + 1]--;
        } else {
            const start = h - arr[i] + 1;
            cave[start]++;
            cave[h + 1]--;
        }
    }

    for (let i = 1; i <= h; i++) {
        cave[i] += cave[i - 1];
    }

    const answer = cave.slice(1, h + 1);
    const min = Math.min(...answer);
    const count = answer.filter(v => v === min).length;

    console.log(min, count);
};

Solution(h, arr);
