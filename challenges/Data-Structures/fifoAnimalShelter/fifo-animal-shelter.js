'use strict';

let Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

class AnimalShelter {
  constructor() {
    this.dog = new Queue ();
    this.cat = new Queue ();
  }
  enqueue(animal) {
    if (animal.toLowerCase() === 'dog') {
      this.dog.enqueue(animal);
      
    }
    else if (animal.toLowerCase() === 'cat') {
      this.cat.enqueue(animal);
    } 
    else{
      return `We don't accept ${animal}`;
    }
  }
  dequeue(pref) {
    if (pref.toLowerCase() === 'cat'){
      return this.cat.dequeue();
    } if(pref.toLowerCase() === 'dog'){
      return this.dog.dequeue();
    }else{
      return null;
    }
  }
}

const que=new AnimalShelter()
que.enqueue('dog')
que.enqueue('cat')
que.enqueue('dog')
console.log('hiiiiiiiiiiii',que);

que.dequeue('dog')
console.log('byeeeeeeeeeeeee',que);


module.exports = AnimalShelter;