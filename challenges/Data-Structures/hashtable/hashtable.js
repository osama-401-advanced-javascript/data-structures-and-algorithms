'use strict';
/*
Implement a Hashtable with the following methods:

add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.
*/

class Hashtable {
  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  add(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
    return index;
  }
  get(key) {
    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if (itemsInBucket) {
      for (let bucket of itemsInBucket) {
        // if key matches
        if (bucket[0] === key) {
          return bucket[1];
        }
      }
    }
    return null;
  }
  contains(key) {
    // signature of contains: Key (whatever form key is)
    // hashes key to return boolean
    const index = this.hash(key);
    if (this.buckets[index] === undefined) {
      return false;
    }
    return true;
  }
  hash(key) {
    let sum = 0;

    for (let char of key) {
      sum += char.charCodeAt(0);
    }

    const primed = sum * 599;

    const index = primed % this.buckets.length;

    return index;
  }
}

module.exports = Hashtable;
