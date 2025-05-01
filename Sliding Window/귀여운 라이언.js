const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const dolls = input[1].split(" ").map(Number);

const Lion = [];
dolls.forEach((doll, index) => {
    if (doll === 1) Lion.push(index + 1);
})
    
if (Lion.length < K) {
    console.log(-1);
} else {   
    let minSize = Infinity;
 
    for (let i = 0; i <= Lion.length - K; i++) {
        const start = Lion[i];
        const end = Lion[i + K - 1];
        const size = end - start + 1;

        minSize = Math.min(minSize, size);
    }   
    console.log(minSize);
}
