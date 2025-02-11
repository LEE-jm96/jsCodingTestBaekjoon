const fs = require("fs");
const input = fs
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const Solution = (input) => {
    const [tryCnt, ...goods] = input;
    let totalPay = 0;

    goods.sort((a, b) => b - a);  

    goods.forEach((money, idx) => {
        if ((idx + 1) % 3 === 0) {
            // 3번째 항목 무료
        } else {
            totalPay += money; 
        }
    });

    console.log(totalPay);
};

Solution(input);
