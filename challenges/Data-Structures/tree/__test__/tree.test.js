const BinaryTree = require('../tree.js').BinaryTree;
const BST = require('../tree.js').BST;
const bst = new BST();


const Node = require('../node.js');


describe('Binary Tree', () => {
  let tree = null;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    tree = new BinaryTree(one);
  });

  it('preorder()', () => {
    const expected = [1, 2, 4, 5, 3];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('inOrder()', () => {
    const expected = [4, 2, 5, 1, 3];
    const preOrder = tree.inOrder();
    expect(preOrder).toEqual(expected);
  });
  it('postOrder()', () => {
    const expected = [4, 5, 2, 3, 1];
    const preOrder = tree.postOrder();
    expect(preOrder).toEqual(expected);
  });
});

describe('Binary search Tree', () => {
  it('should be a class', () => {
    expect(BST).toBeDefined();
  });
    
  it('Can successfully instantiate a tree with a single root node', () => {
    const addNode = bst.add(5);
    expect(addNode).toEqual(5);
  });
  it('Can successfully add a left child and right child to a single root node'
    , () => {
      
      const addNodeLeft = bst.add(3);
      const addNodeRight = bst.add(9);

      expect(addNodeLeft.left.value).toBe(3);
      expect(addNodeRight.right.value).toBe(9);

    });
  it('contains()', () => {
    const contains = bst.contains(3);
    const notContains = bst.contains(12);
    expect(contains).toBe(true);
    expect(notContains).toBe(false);
  });
});