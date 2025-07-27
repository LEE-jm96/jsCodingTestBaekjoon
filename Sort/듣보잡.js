const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const parseInput = (lines) => {
    const [n, m] = lines[0].split(" ").map(Number);
    const listenList = lines.slice(1, 1 + n);
    const seeList = lines.slice(1 + n, 1 + n + m);
    return [listenList, seeList];
};

const Solution = ([listenList, seeList]) => {
    const seeSet = new Set(seeList);
    const 듣보 = [];

    listenList.forEach(name => {
        if (seeSet.has(name)) {
            듣보.push(name);
        }
    })
    
    듣보.sort();
    
    console.log(듣보.length);
    console.log(듣보.join("\n"));
}

Solution(parseInput(input));
