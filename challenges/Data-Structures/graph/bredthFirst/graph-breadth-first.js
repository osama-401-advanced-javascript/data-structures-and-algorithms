const { Graph } = require('../graph');
const { Queue } = require('../../stacksAndQueues/stacks-and-queues');

class breadthFirst extends Graph {
  constructor() {
    super();
  }
  breadthFirst(startNode) {
    const nodes = new Map();
    const breadth = new Queue();
    const visitedArr = [];

    breadth.enqueue(startNode);

    while (breadth) {
      const front = breadth.dequeue();
      nodes.add(front);
      visitedArr.push(front);

      const children = this.getNeighbors(front);

      for (let child of children) {
        const childNode = child.startNode;

        if (!visitedArr.has(childNode)) {
          breadth.enqueue(childNode);
        }
      }
    }

    return nodes;
  }
}

module.exports = { breadthFirst };
