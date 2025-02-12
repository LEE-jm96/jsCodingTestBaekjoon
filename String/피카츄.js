const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()

Solution = (input) => {
    const arr = ["pi", "ka", "chu"];
    let str = "";
    let isAnswer = true;

    for (let i = 0; i < input.length; i++) {
        str += input[i];
        if (arr.includes(str)) str = "";
    }
    if (str.length > 0) {
        isAnswer = false;
    }

    console.log(isAnswer ? "YES" : "NO");
}

Solution(input);
