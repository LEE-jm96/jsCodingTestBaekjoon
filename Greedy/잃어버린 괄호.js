const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const Solution = (input) => {
    const formula = input.split("-");
    
    const firstSum = formula[0]
        .split("+")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    
    const restSum = formula
        .slice(1)
        .map(expression =>
            expression
                .split("+")
                .map(Number)
                .reduce((acc, cur) => acc + cur, 0)
        )
        .reduce((acc, cur) => acc + cur, 0);

    console.log(firstSum - restSum);
};

Solution(input);
