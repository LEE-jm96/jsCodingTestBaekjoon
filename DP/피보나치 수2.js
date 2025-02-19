const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

Solution = (n) => {
    const dp = Array.from({length: n + 1}, () => BigInt(0));
    dp[0] = 0n;
    dp[1] = 1n;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    console.log(dp[n].toString());
}

Solution(input);
