const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [g, s] = input[0].split(" ").map(Number);
const W = input[1];
const S = input[2];

const wMap = {};
const sMap = {};
let answer = 0;

for (let i = 0; i < g; i++) {
    const wCh = W[i];
    const sCh = S[i];

    wMap[wCh] = (wMap[wCh] || 0) + 1;
    sMap[sCh] = (sMap[sCh] || 0) + 1;
}

const isSame = (a, b) => {
    for (let key in a) {
        if (a[key] !== b[key]) return false;
    }
    return true;
};

if (isSame(wMap, sMap)) answer++;

for (let i = g; i < s; i++) {
    const add = S[i];
    const remove = S[i - g];

    sMap[add] = (sMap[add] || 0) + 1;
    sMap[remove]--;
    
    if (sMap[remove] === 0) delete sMap[remove];
    if (isSame(wMap, sMap)) answer++;
}

console.log(answer);
