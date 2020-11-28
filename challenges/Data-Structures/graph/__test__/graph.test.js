'use Strict';

const { Graph, Node } = require('../graph');

let nodeOne = new Node(1);
let nodeTwo = new Node(2);
let nodeThree = new Node(3);

describe('Graph tests', () => {
  it('should implement a graph', () => {
    const graph = new Graph();
    expect(graph).toBeTruthy();
  });

  it('should add a node to the graph', () => {
    const graph = new Graph();
    graph.addNode(nodeOne);
    graph.addNode(nodeTwo);
    expect(graph.size()).toBe(2);
  });

  it('should ad an edge successfully to the graph', () => {
    const graph = new Graph();
    graph.addNode(nodeOne);
    graph.addNode(nodeTwo);
    graph.addEdge(nodeOne, nodeTwo, 'weight');
    let neighbors = graph.getNeighbors(nodeOne);
    const edges = [
      {
        destination: {
          neighbors: [1],
          value: 2,
        },
        origin: {
          neighbors: [2],
          value: 1,
        },
        weight: 'weight',
      },
    ];
    expect(neighbors).toEqual(edges);
  });
});
