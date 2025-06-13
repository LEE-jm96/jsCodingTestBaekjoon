const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const Solution = (input) => {
    const dp = [-1, 1, -1, 2, 1, 3, 2, 4, 3];
    
    if (input >= 10) {
        for (let i = 9; i < input; i++) {
            dp[i] = dp[i - 5] + 1;
        }
    }
    
    console.log(dp[input - 1]);
}

Solution(Number(input));
