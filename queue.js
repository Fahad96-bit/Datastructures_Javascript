class Node {
  constructor(val) {
    this.next = null;
    this.value = val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }
    const temp = this.first;
    this.first = this.first.next;

    this.size--;
    return temp.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
console.log("Queue", queue);
