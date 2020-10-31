'use strict';

const AS = require('../fifo-animal-shelter.js');

describe('FIFO animal shelter tests', () => {
  it('should be a class', () => {
    expect(AS).toBeDefined();
  });

  it('should enqueue dog into the dog queue', () =>{
    const animal = new AS ();
    animal.enqueue('dog');
    expect(animal.dog.peek()).toBe('dog');
  });
  it('should enqueue cat into the cat queue', () =>{
    const animal = new AS ();
    animal.enqueue('cat');
    expect(animal.cat.peek()).toBe('cat');
  });

  it('should dequeue dog into the dog queue', () =>{
    const animal = new AS ();
    animal.enqueue('dog');
    expect(animal.dequeue('dog')).toBe('dog');
  });
  it('should dequeue cat into the cat queue', () =>{
    const animal = new AS ();
    animal.enqueue('cat');
    expect(animal.dequeue('cat')).toBe('cat');
  });
});
