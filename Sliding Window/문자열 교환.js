const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("");

Solution = (input) => {
    const aCnt = input.filter(str => str === "a").length;
    const doubled = input.concat(input);

    let min = Infinity;
    
    for (let i = 0; i <= input.length; i++) {
         const sliceStr = doubled.slice(i, i + aCnt);
         const bCnt = sliceStr.filter(str => str === "b").length;
         if (bCnt < min) min = bCnt;
    }
    
    console.log(min);
}

Solution(input);
