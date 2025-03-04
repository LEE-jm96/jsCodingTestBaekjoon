const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        return this.queue[this.front++];
    }

    size() {
        return this.rear - this.front;
    }
    
    getQueue() {
        return this.queue.slice(this.front, this.rear);
    }
}

const Solution = (arr, targetIndex) => {
    const queue = new Queue();
    let printOrder = 0;

    for (let i = 0; i < arr.length; i++) {
        queue.enqueue([arr[i], i]);
    }

    while (queue.size() > 0) {
        const currentQueue = queue.getQueue();
        const [headValue, headIndex] = currentQueue[0];
        const body = currentQueue.slice(1);

        if (body.some(([priority]) => priority > headValue)) {
            queue.enqueue(queue.dequeue());
        } else {
            printOrder++;
            const [printedValue, printedIndex] = queue.dequeue();

            if (printedIndex === targetIndex) {
                break;
            }
        }
    }
    
    console.log(printOrder);
}

let [n, ...arr] = input;
arr = arr.map((item) => item.split(" ").map(Number));

for (let i = 0; i < arr.length; i += 2) {
    const printerQueue = arr[i + 1];
    const location = arr[i][1];
    Solution(printerQueue, location);
}
