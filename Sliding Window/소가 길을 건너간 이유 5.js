const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K, B] = input[0].split(" ").map(Number);
const brokenList = input.slice(1).map(Number);

Solution = (N, K, brokenList) => {
    const road = Array.from({length: N}, (v, i) => 1);
    
    brokenList.forEach(broken => {
        road[broken - 1] = 0;
    })
    
    let windowSum = 0;
    for (let i = 0; i < K; i++) {
        windowSum += road[i];
    }
    
    let workingLights = windowSum;
    for (let i = K; i < N; i++) {
        windowSum = windowSum - road[i - K] + road[i];
        workingLights = Math.max(windowSum, workingLights);
    }
    
    console.log(K - workingLights);
}

Solution(N, K, brokenList);
