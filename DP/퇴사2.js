const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const Solution = (input) => {
    let [tryCnt, ...schedule] = input;
    tryCnt = Number(tryCnt);
    const dp = Array.from({length: tryCnt + 1}, () => 0);
    let max = 0;
    
    for (let i = 0; i < tryCnt; i++) {
        const [day, pay] = schedule[i].split(" ").map(Number);
        max = Math.max(max, dp[i]);
        
        if (day + i <= tryCnt) {
            dp[day + i] = Math.max(pay + max, dp[day + i]);
        }
    }
    
    console.log(Math.max(...dp));
}

Solution(input);
