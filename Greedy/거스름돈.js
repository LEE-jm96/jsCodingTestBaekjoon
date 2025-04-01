const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

let change = 1000 - Number(input);
const coinDenominations = [500, 100, 50, 10, 5, 1];

const coinCounts = coinDenominations.map(denomination => {
    const count = Math.floor(change / denomination);
    change = change % denomination;
    return count;
});

console.log(coinCounts.reduce((total, count) => total + count, 0));
