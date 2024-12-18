const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.obj = {};
    this.size = 0;
  }

  push(element) {
    this.size += 1;
    this.obj[this.size] = element;
  }

  pop() {
    let removed = this.obj[this.size];
    delete this.obj[this.size];
    this.size -= 1;
    return removed;
  }

  peek() {
    return this.obj[this.size];
  }
}

module.exports = {
  Stack,
};
