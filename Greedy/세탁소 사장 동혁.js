const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);
const [tryCnt, ...centList] = input;

const Solution = (cent) => {
    const coins = [25, 10, 5, 1];
    const result = coins.map((coin) => {
        const count = Math.floor(cent / coin);
        cent %= coin;
        return count;
    });

    console.log(result.join(" "));
};

centList.forEach(Solution);
