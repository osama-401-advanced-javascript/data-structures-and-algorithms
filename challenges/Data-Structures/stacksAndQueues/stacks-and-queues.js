'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){
    // this.storage=[];
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    // console.log('im the node',node);
    // this.storage.unshift(value);
    // console.log('im this.top',this.top);
    // this.top=value
    node.next = this.top;
    this.top = node
    // console.log(this.top);
    return this.top;
  }

  pop(){
      if(this.top==null){
          throw new Error('stack is empty')
      }
      let removedValue=this.top.value
      this.top=this.top.next
    //   console.log(removedValue);
    //   console.log(this.top);
      return removedValue

  }
  peek(){
      if(this.top==null){
        throw new Error('stack is empty')
   
      }
    //   console.log(this.top.value);
      return this.top.value
  }
  isEmpty(){
    if(this.top){
        return false
      } else{
        return true;
      }
  }
//   console.log(true);
}


class Queue {
    constructor() {
      this.storage = [];
      this.front=null
    }
    enqueue(value){
        let node = new Node(value);
        // console.log(node);
    //   this.storage.push(value)
      if(!this.front){
          this.front=node
          return this.front
        // console.log('im before',this.front);
      }
      let currentNode = this.front;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      console.log(this.front);
      return this.front;
          
          // node.next=this.front
          // this.front=node;
          // console.log('im after',this.front);
          // console.log(node);

          // return this.front
        //   this.front=node
      
    }
    dequeue(){
        if(this.front==null){
            throw new Error('stack is empty')
        }
        let removedValue=this.front.value
        this.front=this.front.next
        console.log(removedValue);
        console.log(this.front);
        return removedValue
    //   return this.storage.shift()
    }
    peek(){
        if(this.front==null){
            throw new Error('stack is empty')
        }
        console.log(this.front.value);
        return this.front.value
    // return this.storage[0];
    }
    isEmpty(){
        if(this.front==null) {
          console.log(false); 
          return false
        }
         console.log(true); 
        return true
    }
    }







// const stack = new Stack()


// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.isEmpty()
// stack.peek();

// stack.pop();
// stack.peek();


const queue = new Queue()
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(7)
// queue.enqueue(8)


// queue.dequeue()
// queue.peek()
// queue.isEmpty()
 module.exports={Stack,Queue}



