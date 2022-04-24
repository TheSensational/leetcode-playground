class MaxStack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  peekMax() {
    return Math.max(...this.stack);
  }

  popMax() {
    const buffer = [];
    const max = this.peekMax();

    while (this.top() !== max) buffer.push(this.pop());
    this.pop();
    while (buffer.length) this.push(buffer.pop());

    return max;
  }
}
