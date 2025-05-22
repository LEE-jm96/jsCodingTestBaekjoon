const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

Solution = (T) => {
    const A = 300;
    const B = 60;
    const C = 10;
    let aCnt = bCnt = cCnt = 0;
    
    while(T >= C) {
        if (T >= A) {
            aCnt += Math.floor(T / A);
            T = T % A;
        } else if (T >= B) {
            bCnt += Math.floor(T / B);
            T = T % B;
        } else if (T >= C) {
            cCnt += Math.floor(T / C);
            T = T % C;
        }
    }
    
    console.log(T ? -1 : aCnt + " " + bCnt + " " + cCnt);
}

Solution(Number(input));
