const fs = require("fs");
const S = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 1;
let sum = 0;
    
while (true) {
    sum += answer;
        
    if (sum > Number(S)) {
        break;
    }
        
    answer++;
}
    
console.log(answer - 1);
