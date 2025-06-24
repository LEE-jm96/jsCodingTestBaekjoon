const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const Solution = (input) => {
    const charCount = {};

    for (const ch of input) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    const oddChars = Object.keys(charCount).filter(ch => charCount[ch] % 2 !== 0);

    if (oddChars.length > 1) {
        console.log("I'm Sorry Hansoo");
        return;
    }

    let frontStr = "";
    let middle = "";

    const sortedKeys = Object.keys(charCount).sort();

    for (const ch of sortedKeys) {
        const count = charCount[ch];

        if (count % 2 !== 0) {
            middle = ch;
        }

        frontStr += ch.repeat(count / 2);
    }

    const endStr = [...frontStr].reverse().join("");
    console.log(frontStr + middle + endStr);
};


Solution(input);
