const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

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
}

const Solution = (n) => {
    const queue = new Queue();

    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }

    while (queue.size() > 1) {
        queue.dequeue(); 
        queue.enqueue(queue.dequeue());
    }

    console.log(queue.dequeue());
}

Solution(input);
