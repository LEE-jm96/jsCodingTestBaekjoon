const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);
const commands = input.map(line => line.split(" ").map(Number));

const stack = [];
const output = [];

for (const [cmd, val] of commands) {
    if (val) {
        stack.push(val);
        continue;
    }

    switch (cmd) {
        case 2:
            output.push(stack.length ? stack.pop() : -1);
            break;
        case 3:
            output.push(stack.length);
            break;
        case 4:
            output.push(stack.length ? 0 : 1);
            break;
        case 5:
            output.push(stack.length ? stack[stack.length - 1] : -1);
            break;
    }
}

console.log(output.join("\n"));
