'use strict';
const Node = require('./node.js');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // ROOT - LEFT - RIGHT
  preOrder() {
    // eslint-disable-next-line indent
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    console.log('preeeee', results);
    return results;
  }
  //  LEFT- ROOT - RIGHT
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    console.log('innnnnnnnn', results);
    return results;
  }
  // LEFT - RIGHT - ROOT
  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    console.log('posttttttttt', results);

    return results;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    console.log('oneeeeeeeeeeee', node);
    if (node === null) {
      this.root = new Node(data);
      console.log('twoooooo', this.root);
      return this.root.value;
    } else {
      console.log('threeeeeeeee', this.root);
      const searchTree = function (node) {
        if (data < node.value) {
          if (node.left === null) {
            node.left = new Node(data);
            console.log('rooot', node);
            console.log('left value', node.left.value);
            return node;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.value) {
          if (node.right === null) {
            node.right = new Node(data);
            console.log('rooot', node);

            return node;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          console.log('this value is exist');
          return 'this value is exist';
        }
      };
      return searchTree(node);
    }
  }

  contains(data) {
    let current = this.root;
    while (current) {
      if (data === current.value) {
        console.log(true);
        return true;
      }
      if (data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    console.log(false);
    return false;
  }
  findMaximumValue() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    console.log(current.value);
    return current.value;
  }
}

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;

// const tree = new BinaryTree(one);
// tree.preOrder();
// tree.inOrder();
// tree.postOrder();

// const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(3);
// bst.add(12);
// bst.add(22);
// bst.findMaximumValue();
// bst.contains(4);
// bst.contains(9);
// bst.contains(10);

module.exports = { BinaryTree, BST };
