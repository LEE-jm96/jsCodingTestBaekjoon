const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 1;
let sum = 0;
    
while (true) {
    sum = sum + answer;
        
    if (sum > Number(input)) {
        break;
    }
        
    answer++;
}
    
console.log(answer - 1);
