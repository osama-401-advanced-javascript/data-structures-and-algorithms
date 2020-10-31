'use strict';

const PQ = require('../queue-with-stacks.js');

describe('queues with stacks testing', () => {
  it('should be a class', () => {
    expect(PQ).toBeDefined();
  });
  it('can enqueue things', () => {
    let queue = new PQ;
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    expect(queue.stack1.peek()).toBe(20);
  });
  it('can dequeue things', () => {
    let queue = new PQ;
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(5);
  })
})