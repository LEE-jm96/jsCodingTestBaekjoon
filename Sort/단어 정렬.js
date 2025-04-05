const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let [tryCnt, ...words] = input;

words.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    return a.localeCompare(b);
});

console.log(Array.from(new Set(words)).join("\n"));
