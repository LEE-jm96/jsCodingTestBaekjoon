const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")

Solution = (input) => {
    const [str, search] = input;
    const exceptNumStr = str.replace(/[0-9]/g, "");

    console.log(exceptNumStr.includes(search) ? 1 : 0);
}

Solution(input);
