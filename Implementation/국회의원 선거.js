const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(Number);
const [n, ...arr] = input;

Solution = (input) => {
    let [dasom, ...arr] = input;
    
    if (arr.length === 0){
        console.log(0);
    } else {
        let answer = 0;
        while (true) {
            const max = Math.max(...arr);
            if (dasom > max) break;
            arr[arr.indexOf(max)] -= 1;
            dasom++;
            answer++;
        }
        console.log(answer);
    }
}

Solution(arr);
