const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
 
const Solution = (input) => {
    const [n, k] = input;
    const queue = Array.from({length : n}, (v, i)=> i + 1);
    const answer = [];
    
    let cnt = 0;
    while (queue.length) {
        cnt++;
        const popFirstItem = queue.shift();
        if (cnt % k === 0){
            answer.push(popFirstItem);
        } else {
            queue.push(popFirstItem);
        }
    }

    console.log("<" + answer.join(", ") + ">");
}

Solution(input);
