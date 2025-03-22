const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

const Solution = (input) => {
  const [tryCnt, ...money] = input;
  const stack = [];
    
  money.forEach(num => {
    if (num === 0 && stack.length > 0) {
      stack.pop();
    } else if (num !== 0) {
      stack.push(num);
    }
  })
    
  console.log(stack.reduce((acc, cur) => acc + cur, 0) || 0);
}

Solution(input);
