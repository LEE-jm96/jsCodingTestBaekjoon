const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()

Solution = (input) => {
    const inputArr = input.split("").map(Number);

    if (!inputArr.includes(0)) {
        console.log(-1);
        return;
    }

    const sum = inputArr.reduce((acc, cur) => acc + cur, 0);
    if (sum % 3 !== 0) {
        console.log(-1);
        return;
    }

    console.log(inputArr.sort((a, b) => b - a).join(""));
}

Solution(input);
