const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const money = input.slice(1).map(line => line.split(" ").map(Number)); 

const Solution = (gita, money) => {
    const bulkPrices = [];

    for (const [pack, each] of money) {
        bulkPrices.push(pack, each * 6);
    }

    let answer = 0;

    while (gita > 0) {
        if (gita >= 6) {
            const minPrice = Math.min(...bulkPrices);
            answer += minPrice;
            gita -= 6;
        } else {
            const options = money.map(([pack, each]) => Math.min(pack, each * gita));
            const minPrice = Math.min(...options);
            answer += minPrice;
            gita = 0;
        }
    }

    console.log(answer);
};

Solution(N, money);
