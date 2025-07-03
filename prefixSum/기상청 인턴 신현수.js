const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number); 
const temperature = input[1].split(" ").map(Number);

const Solution = (temperature, K) => {
    const answer = [];
    const prefixSum = [];
    prefixSum[0] = temperature[0];
    
    for (let i = 1; i < temperature.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + temperature[i];
    }
    
    answer[0] = prefixSum[K - 1];
 
    for (let i = K - 1; i < prefixSum.length - 1; i++) {
        answer.push(prefixSum[i + 1] - prefixSum[i + 1 - K]);
    }
    
    console.log(Math.max(...answer));
}

Solution(temperature, K);
