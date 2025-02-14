const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

Solution = (input) => {
    let prefixSum = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (prefixSum === 100) break;
        else if (prefixSum + input[i] > 100) {
            const diffBefore = 100 - prefixSum;
            const diffAfter = (prefixSum + input[i]) - 100;
            if (diffBefore >= diffAfter) {
                prefixSum += input[i];
            }
            break;
        }
        prefixSum += input[i]; 
    }
    
    console.log(prefixSum);
}

Solution(input);
