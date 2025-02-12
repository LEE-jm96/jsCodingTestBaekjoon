const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const Solution = (input) => {
    let [tryCnt, arr] = input;
    
    tryCnt = Number(tryCnt);
    arr = arr.split(" ").map(BigInt);
    arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)); 
    
    let answer = 0n;

    if (tryCnt % 2 === 1) { 
        for (let i = 0; i < (tryCnt - 1) / 2; i++) {
            const firstWeight = arr[i];
            const lastWeight = arr[tryCnt - i - 2];
            answer = answer > firstWeight + lastWeight ? answer : firstWeight + lastWeight;
        }
        answer = answer > arr[tryCnt - 1] ? answer : arr[tryCnt - 1];
    } else { 
        for (let i = 0; i < tryCnt / 2; i++) {
            const firstWeight = arr[i];
            const lastWeight = arr[tryCnt - i - 1];
            answer = answer > firstWeight + lastWeight ? answer : firstWeight + lastWeight;
        }
    }
    
    console.log(answer.toString());
}

Solution(input);
