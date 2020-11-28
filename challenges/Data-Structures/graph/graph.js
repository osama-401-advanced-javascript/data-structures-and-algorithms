class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
class Edge {
  constructor(origin, destination, weight) {
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Set();
    this.edges = [];
  }

  addNode(node) {
    let newNode = new Node(node.value);
    this.adjacencyList.add(newNode);
    return newNode;
  }

  addEdge(origin, destination, weight = null) {
    origin.neighbors.push(destination.value);
    destination.neighbors.push(origin.value);

    const edge = new Edge(origin, destination, weight);
    this.edges.push(edge);
  }
  getNodes() {
    return this.adjacencyList;
  }
  getNeighbors(node) {
    const myEdges = [];

    this.edges.forEach((edge) => {
      if (edge.origin.value === node.value) {
        myEdges.push(edge);
      }
    });
    return myEdges;
  }
  size() {
    return this.adjacencyList.size;
  }
}

module.exports = { Graph, Node };
