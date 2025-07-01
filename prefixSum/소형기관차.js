const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const guests = input[1].split(' ').map(Number);
const max = Number(input[2]);

const small = 3;
const dp = Array.from({ length: 4 }, () =>
  Array.from({ length: guests.length + 1 }, () => 0)
);
const prefixSum = Array.from({ length: guests.length + 1 }, () => 0);

prefixSum[0] = 0;
prefixSum[1] = guests[0];

for (let i = 2; i <= guests.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + guests[i - 1];
}

for (let i = 1; i <= small; i++) {
  for (let j = i * max; j <= guests.length; j++) {
    dp[i][j] = Math.max(
      dp[i][j - 1],
      dp[i - 1][j - max] + (prefixSum[j] - prefixSum[j - max])
    );
  }
}

console.log(dp[3][guests.length]);
