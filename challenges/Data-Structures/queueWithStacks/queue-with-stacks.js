'use strict'

const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack;

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack;
    this.stack2 = new Stack;
  }
  enqueue(value){
    this.stack1.push(value);
  }
  dequeue(){
    try{
      while(this.stack1.peek()){
        this.stack2.push(this.stack1.pop());
      }
    } catch(err){
      return this.stack2.pop();
    }
  }
}
const queue=new PseudoQueue

// queue.enqueue(5);
//     queue.enqueue(10);
//     queue.enqueue(15);
//     queue.enqueue(20);
//     console.log(queue.stack1.peek());
module.exports = PseudoQueue;